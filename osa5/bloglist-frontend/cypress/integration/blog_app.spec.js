describe('Blog app', function() {
    beforeEach(function() {
      cy.request('POST', 'http://localhost:3001/api/testing/reset')
      const user = {
          name: 'Emil Salmi',
          username: 'emil',
          password: 'salis'
      }
      cy.request('POST', 'http://localhost:3001/api/users/', user)
      cy.visit('http://localhost:3000')
    })
  
    it('Login from is shown', function() {
        cy.contains('login')
    })
      describe('Login',function() {
        it('succeeds with correct credentials', function() {
            cy.contains('login')
            cy.get('#username').type('emil')
            cy.get('#password').type('salis')
            cy.get('#login-button').click()
    
            cy.contains('Logged in as Emil Salmi')
        })
    
        it('fails with wrong credentials', function() {
            cy.get('#username').type('emil')
            cy.get('#password').type('vääräsalis')
            cy.get('#login-button').click()
    
            cy.contains('wrong credentials')
        })
      })
      describe('When logged in', function() {
        beforeEach(function() {
            cy.login({ username: 'emil', password: 'salis' })
        })
    
        it('A blog can be created', function() {
            cy.contains('new blog').click()
            cy.get('#title').type('A blog can be created by cypress')
            cy.get('#author').type('Cypress')
            cy.get('#url').type('cypress.com')
            cy.contains('save').click()
            cy.contains('A blog can be created by cypress')
        })
        it('A blog can be liked', function() {
            cy.createBlog({ title: 'A blog', author: 'cypress', url: 'url.com' })
            cy.get('#view-button').click()
            cy.get('#like-button').click()
            cy.contains('likes 1')
        })
        it('A blog can be deleted', function() {
            cy.createBlog({ title: 'A blog', author: 'cypress', url: 'url.com' })
            cy.get('#view-button').click()
            cy.get('#delete-button').click()
            cy.get('html').should('not.contain', 'A blog')
        })


      })
      describe.only('When logged in', function() {
        beforeEach(function() {
            cy.login({ username: 'emil', password: 'salis' })
            cy.createBlog({ title: '3rd most likes testblog', author: 'cypress', url: 'url.com', likes: 3 })
            cy.createBlog({ title: '2nd most likes testblog', author: 'cypress', url: 'url.com', likes: 5 })
            cy.createBlog({ title: 'Least likes testblog', author: 'cypress', url: 'url.com', likes: 2 })
            cy.createBlog({ title: 'Most likes testblog', author: 'cypress', url: 'url.com', likes: 10 })
        })
        it('Blogs are ordered by likes', function() {
            cy.get('#blogs').find('button').then(buttons => {
                cy.wrap(buttons[0].click())
                cy.wrap(buttons[1].click())
                cy.wrap(buttons[2].click())
                cy.wrap(buttons[3].click())
            })
            cy.get('#blogs').find('div').then(blogs => {
                cy.wrap(blogs[0]).should('contain', 'Most likes')
                cy.wrap(blogs[2]).should('contain', '2nd most likes')
                cy.wrap(blogs[4]).should('contain', '3rd most likes')
                cy.wrap(blogs[6]).should('contain', 'Least likes')

            })

        })
    })

    
    
})
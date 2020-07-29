import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Blog from './Blog'

    

describe('<Blog />', () => {
    let component
    const blog = {
        title: 'Component testing is done with react-testing-library',
        author: 'Testman',
        url: 'test.com',
        user: {
            username: "eme",
            name: "Emil Salmi"
        }
    }
    const loggedUser = {
        username: "eme",
        name: "Emil Salmi"
    }

    beforeEach(() => {
        localStorage.setItem('loggedBlogUser', loggedUser)
        component = render(
                <Blog blog={blog} />
        )
    })
    test('Only show Title and Author', () => {
        expect(component.container).toHaveTextContent(
            'Component testing is done with react-testing-library'
        )
        expect(component.container).toHaveTextContent(
            'Testman'
        )
        const url = component.queryByText(
            'test.com'
        )
        expect(url).toBeNull()
        const likes = component.queryByText(
            'likes'
        )
        expect(likes).toBeNull()
    })

    test('Show likes and url after pressing view', () => {
        const li = component.container.querySelector('li')
        console.log(prettyDOM(li))
        
        const button = component.getByText('View')
        fireEvent.click(button)

        expect(component.container).toHaveTextContent('test.com')
        expect(component.container).toHaveTextContent('likes')


    })

})

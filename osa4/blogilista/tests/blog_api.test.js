const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const userHelper = require('./user_test_helper')
const app = require('../app')
const api = supertest(app)
require('dotenv').config()

const Blog = require('../models/blog')
const User = require('../models/user')
const { initialBlogs, blogsInDb } = require('./test_helper')

beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(helper.initialBlogs)

})


test('returns correct amount of blogs as JSON', async () => {
    console.log('entered test')
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(helper.initialBlogs.length)

})

test('blogs can be posted', async () => {

    const newBlog = {
        title: "Testingblog",
        author: "Testguy",
        url: "test.fi",
        likes: 100
    }
    await api
        .post('/api/blogs')
        .send(newBlog)
        .set('Authorization', process.env.TESTTOKEN)
        .expect(200)
        .expect('Content-Type', /application\/json/)


    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)

    const titles = blogsAtEnd.map(blog => blog.title)
    expect(titles).toContain('Testingblog')
})

test('blog without likes set to 0', async () => {
    const newBlog = {
        title: "No one likes me",
        author: "nolikes",
        url: "sad.fi"
    }
    await api
        .post('/api/blogs')
        .send(newBlog)
        .set('Authorization', process.env.TESTTOKEN)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    const likes = blogsAtEnd.map(blog => blog.likes)
    expect(likes[2]).toEqual(0)

})

test('blog without title or url cannot be added', async () => {
    const newBlog = {
        author: "Secret guy"
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .set('Authorization', process.env.TESTTOKEN)
        .expect(400)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
})

test('Blog can be deleted', async () => {
    const blogsAtStart = await helper.blogsInDb()
    const blogToDelete = blogsAtStart[0]

    await api
      .delete(`/api/blogs/${blogToDelete.id}`)
      .set('Authorization', process.env.TESTTOKEN)
      .expect(204)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length - 1)
})

afterAll(() => {
    mongoose.connection.close()
})

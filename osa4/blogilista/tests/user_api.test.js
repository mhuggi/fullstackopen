const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./user_test_helper')
const app = require('../app')
const api = supertest(app)

const User = require('../models/user')


beforeEach(async () => {
    await User.deleteMany({})
    await User.insertMany(helper.initialUsers)
})

test('users can be posted', async () => {
    const newUser = {
        username: 'Masa',
        name: 'Kasa Masa',
        password: 'Palalal'
    }

    await api
        .post('/api/users')
        .send(newUser)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    const userAtEnd = await helper.usersInDb()
    expect(userAtEnd).toHaveLength(helper.initialUsers.length + 1)

    const usernames = userAtEnd.map(u => u.username)
    expect(usernames).toContain('Masa')
})
test('fails with status 400 if username is invalid', async () => {
    const newUser = {
        username: 'ma',
        name: 'Kasa Masa',
        password: 'Palalal'
    }

    await api
    .post('/api/users')
    .send(newUser)
    .expect(400)
    .expect('Content-Type', /application\/json/)

    const userAtEnd = await helper.usersInDb()
    expect(userAtEnd).toHaveLength(helper.initialUsers.length)

    const usernames = userAtEnd.map(u => u.username)
    expect(usernames).not.toContain('ma')

})

test('fails with status 400 if password is invalid', async () => {
    const newUser = {
        username: 'masaaa',
        name: 'Kasa Masa',
        password: 'as'
    }

    await api
    .post('/api/users')
    .send(newUser)
    .expect(400)
    .expect('Content-Type', /application\/json/)

    const userAtEnd = await helper.usersInDb()
    expect(userAtEnd).toHaveLength(helper.initialUsers.length)

    const usernames = userAtEnd.map(u => u.username)
    expect(usernames).not.toContain('masaaa')

})



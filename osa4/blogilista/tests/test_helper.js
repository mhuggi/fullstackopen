const Blog = require('../models/blog')

const initialBlogs = [
    {
        title : 'Hejsan',
        author : "Mikko",
        url : "abc.fi",
        likes : 5
    },
    {
        title : 'Mojsan',
        author : "Matti",
        url : "cbf.fi",
        likes : 10
    }

]

  
module.exports = { initialBlogs }
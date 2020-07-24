import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
    const [newTitle, setNewTitle] = useState([])
    const [newAuth, setNewAuth] = useState([])
    const [newUrl, setNewUrl] = useState([])

    const handleTitleChange = (e) => {
        setNewTitle(e.target.value)
    }
    const handleAuthChange = (e) => {
        setNewAuth(e.target.value)
    }
    const handleUrlChange = (e) => {
        setNewUrl(e.target.value)
    }

    const addBlog = (event) => {
        event.preventDefault()
        createBlog({
            title: newTitle,
            author: newAuth,
            url: newUrl,
        })
        setNewTitle('')
        setNewAuth('')
        setNewUrl('')
    }

    return (
        <div>
        <h2>create new</h2>
        <form onSubmit={addBlog}>
          <p>Title: <input value={newTitle} onChange={handleTitleChange} /></p>
          <p>Author: <input value={newAuth} onChange={handleAuthChange} /></p>
          <p>Url: <input value={newUrl} onChange={handleUrlChange} /></p>
          <button type="submit">save</button>
        </form>
        </div>
        )
}

export default BlogForm

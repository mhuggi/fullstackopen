import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login' 


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [newTitle, setNewTitle] = useState([])
  const [newAuth, setNewAuth] = useState([])
  const [newUrl, setNewUrl] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)


  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])


  const addBlog = (event) => {
    event.preventDefault()
    const blogObj = {
      title: newTitle,
      author: newAuth,
      url: newUrl,
    }
    blogService
      .create(blogObj)
      .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
        setNewTitle('')
        setNewUrl('')
        setNewAuth('')
        setErrorMessage('Created ' + blogObj.title + ' by ' + blogObj.author)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
  }


  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedBlogUser', JSON.stringify(user)
      ) 

      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
  const logOut = () => {
    window.localStorage.removeItem('loggedBlogUser')
    window.location.reload(false)
  }

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value)
  }
  const handleAuthChange = (e) => {
    setNewAuth(e.target.value)
  }
  const handleUrlChange = (e) => {
    setNewUrl(e.target.value)
  }


  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
          <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
          <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>      
  )

  const blogForm = () => (
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
  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        <Notification message={errorMessage} />
        {loginForm()}
      </div>
    )
  }


  return (
    <div>
      <h2>blogs</h2>
      <Notification message={errorMessage} />
      <p>Logged in as {user.name}
      <button onClick={() => logOut()}>logout</button></p>
      {blogForm()}
      <h2>blogs</h2>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App
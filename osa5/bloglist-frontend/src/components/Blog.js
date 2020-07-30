import React, { useState } from 'react'
import blogs from '../services/blogs'


const Blog = ({ blog }) => {
  const [showMore, setShowMore] = useState(false)
  const [updateLikes, setUpdatedLikes] = useState(false)


  const toggleMore = () => {
    setShowMore(!showMore)
  }
  const like = (blog) => {
    blogs.like(blog._id, blog)
    setUpdatedLikes(false)
  }

  const loggedUser = JSON.parse(localStorage.getItem('loggedBlogUser'))
  const DelButton = (user) => {
    if (loggedUser === null) {
      return null
    }
    else if (loggedUser.username === user.user) {
      
      return <button id="delete-button" type="button" onClick={() => {
        if (window.confirm(`Are you sure you want to delete ${blog.title} by ${blog.author}?`)) {
          blogs
          .del(blog._id)
          setShowMore(false)
          window.location.reload(false)
        }
      }}>Delete</button>
    } else {
      return null
    }
  }
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  if (showMore === false) {
      return (
        <div style={blogStyle}>
          <div>
            {blog.title} {blog.author}
            <button id="view-button" type="button" onClick={toggleMore}>View</button>
          </div>
        </div>
      )  
  } else {
    if (updateLikes === true) {
      return (
        <div style={blogStyle}>
          <div id="viewMoreDiv">
            {blog.title} {blog.author}
            <button id="hide-button" type="button" onClick={toggleMore}>Hide</button>
            <p>{blog.url}</p>
            <p>likes {blog.likes}<button id="like-button" type="button" className="likeButton" onClick={() => like(blog)}>like</button></p>
            <p>{blog.user.name}</p>
            <DelButton user={blog.user.username} />
          </div>
        </div>
      )  
    } else {
      setUpdatedLikes(true)  
    }
  }
}
export default Blog

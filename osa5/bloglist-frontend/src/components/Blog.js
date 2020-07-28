import React, {useState} from 'react'
import blogs from '../services/blogs'


const Blog = ({ blog }) => {
  const [showMore, setShowMore] = useState(false)


  const toggleMore = () => {
    setShowMore(!showMore)
  }

  const loggedUser = JSON.parse(localStorage.getItem('loggedBlogUser'))
const DelButton = (user) => {
  if (loggedUser.username === user.user) {
  return <button type="button" onClick={() => {
    if (window.confirm(`Are you sure you want to delete ${blog.title} by ${blog.author}?`)) {
      blogs.del(blog._id)
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
        <button type="button" onClick={toggleMore}>View</button>
      </div>
  </div>

)} else {
  return (
    <div style={blogStyle}>
      <div> 
        {blog.title} {blog.author} 
        <button type="button" onClick={toggleMore}>Hide</button>
        <p>{blog.url}</p>
        <p>likes {blog.likes}<button type="button" onClick={() => {blogs.like(blog._id, blog)}}>like</button></p> 
        <p>{blog.user.name}</p>
        <DelButton user={blog.user.username} />
      </div>
  </div>
  )}
  }
export default Blog

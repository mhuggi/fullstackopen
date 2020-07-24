import React, {useState} from 'react'

const Blog = ({ blog }) => {
  const [showMore, setShowMore] = useState(false)


  const toggleMore = () => {
    setShowMore(!showMore)
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
        <p>likes {blog.likes}<button type="button">like</button></p> 
        <p>{blog.user.name}</p>
      </div>
  </div>
  )}
  }
export default Blog

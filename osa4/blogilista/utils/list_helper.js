const dummy = (blogs) => {
    return 1
  }
  
const totalLikes = (blogs) => {
    let likes = 0
    for (i = 0; i<blogs.length; i++) {
        likes += blogs[i].likes
    }
    return likes
}

const favoriteBlog = (blogs) => {
    let blog = {
        'title' : 'Dummy',
        'Author' : 'Dummy',
        'likes' : 0
    }
    
    for (i=0;i<blogs.length;i++) {
        if(blog.likes < blogs[i].likes) {
            blog = blogs[i]
        }
    }
    return {
        'title' : blog.title,
        'author' : blog.author,
        'likes' : blog.likes
    }
}
module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
  }

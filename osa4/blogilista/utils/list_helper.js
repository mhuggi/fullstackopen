const dummy = (blogs) => {
    return 1
  }
  
const totalLikes = (blogs) => {
    console.log(blogs)
    let likes = 0
    for (i = 0; i<blogs.length; i++) {
        likes += blogs[i].likes
    }
    return likes
}
module.exports = {
    dummy,
    totalLikes
  }

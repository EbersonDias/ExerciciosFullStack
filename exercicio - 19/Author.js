<<<<<<< HEAD
const Post = require("./Post")

class Author {
  constructor(name) {
    this.name = name
    this.posts = []
  }

  writePost(title, body) {
    const post = new Post(title, body, this)
    this.posts.push(post)
    return post
  }
}

=======
const Post = require("./Post")

class Author {
  constructor(name) {
    this.name = name
    this.posts = []
  }

  writePost(title, body) {
    const post = new Post(title, body, this)
    this.posts.push(post)
    return post
  }
}

>>>>>>> b8870bcb907e486142cd9bcf2de0f64187e65047
module.exports = Author
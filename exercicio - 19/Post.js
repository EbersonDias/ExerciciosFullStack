<<<<<<< HEAD
const Comment = require("./Comment")

class Post {
  constructor(title, body, author) {
    this.title = title
    this.body = body
    this.author = author
    this.comments = []
    this.createdAt = new Date()
  }

  addComment(username, content) {
    this.comments.push(new Comment(username, content))
  }
}

=======
const Comment = require("./Comment")

class Post {
  constructor(title, body, author) {
    this.title = title
    this.body = body
    this.author = author
    this.comments = []
    this.createdAt = new Date()
  }

  addComment(username, content) {
    this.comments.push(new Comment(username, content))
  }
}

>>>>>>> b8870bcb907e486142cd9bcf2de0f64187e65047
module.exports = Post
<<<<<<< HEAD
const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Título do Post", "Lorem ipsum dolor sic amet ...")

post.addComment("Isaac", "Muito bom!")
post.addComment("Lucas", "Achei interessante.")

console.log(john)
=======
const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Título do Post", "Lorem ipsum dolor sic amet ...")

post.addComment("Isaac", "Muito bom!")
post.addComment("Lucas", "Achei interessante.")

console.log(john)
>>>>>>> b8870bcb907e486142cd9bcf2de0f64187e65047
console.log(post)
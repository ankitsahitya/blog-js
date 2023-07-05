const { default: mongoose } = require('mongoose');

mongoose.connect("mongodb://localhost:27017/blog-dev").then(() => {
  console.log("connected to blog-dev!")
})
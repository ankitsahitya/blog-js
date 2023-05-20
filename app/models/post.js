const { default: mongoose } = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  article: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

const Post = mongoose.model("Post", PostSchema)
module.exports = Post
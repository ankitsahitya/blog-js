const { Post } = require("../models")

exports.index = async (req, res) => {
  try {
    const posts = await Post.find()
    res.send(posts)
  }
  catch (err) {
    res.status(422).send({
      message: "Something went wrong!"
    })
  }
}

exports.show = async (req, res) => {
  try {
    const post = await Post.findOne({
      _id: req.params.id
    }).populate("author")

    if (post)
      res.send(post)
    else
      res.status(404).send({
        message: `Post not found by id ${req.params.id}`
      })
  }
  catch (err) {
    res.status(422).send({
      message: "Something went wrong!"
    })
  }
}

exports.create = async (req, res) => {
  try {
    const post = await Post.create({
      ...req.body
    })

    if (post)
      res.send(post)
  }
  catch (err) {
    res.status(422).send({
      message: err.message
    })
  }
}

exports.update = async (req, res) => {
  try {
    const post = await Post.updateOne({
      _id: req.params.id
    }, {
      ...req.body
    })

    if (post)
      res.send(post)
    else
      res.status(404).send({
        message: `Post not found by id ${req.params.id}`
      })
  }
  catch (err) {
    res.status(422).send({
      message: "Something went wrong!"
    })
  }
}

exports.destroy = async (req, res) => {
  try {
    const post = await Post.deleteOne({
      _id: req.params.id
    })

    if (post)
      res.send(post)
    else
      res.status(404).send({
        message: `Post not found by id ${req.params.id}`
      })
  }
  catch (err) {
    res.status(422).send({
      message: "Something went wrong!"
    })
  }
}
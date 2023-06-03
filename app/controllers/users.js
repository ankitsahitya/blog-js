const { User } = require("../models")
const jwt = require('jsonwebtoken')

exports.index = async (req, res) => {
  try {
    const users = await User.find()
    res.send(users)
  }
  catch (err) {
    res.status(422).send({
      message: "Something went wrong!"
    })
  }
}

exports.show = async (req, res) => {
  try {
    const user = await User.findOne({
      _id: req.params.id
    })

    if (user)
      res.send(user)
    else
      res.status(404).send({
        message: `User not found by id ${req.params.id}`
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
    const user = await User.create({
      ...req.body
    })

    if (user)
      res.send(user)
  }
  catch (err) {
    res.status(422).send({
      message: err.message
    })
  }
}

exports.update = async (req, res) => {
  try {
    const user = await User.updateOne({
      _id: req.params.id
    }, {
      ...req.body
    })

    if (user)
      res.send(user)
    else
      res.status(404).send({
        message: `User not found by id ${req.params.id}`
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
    const user = await User.deleteOne({
      _id: req.params.id
    })

    if (user)
      res.send(user)
    else
      res.status(404).send({
        message: `User not found by id ${req.params.id}`
      })
  }
  catch (err) {
    res.status(422).send({
      message: "Something went wrong!"
    })
  }
}

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email
    })

    if (user) {
      const token = jwt.sign({ user: user }, '123456')
      res.send({ token: token })
    }
    else
      res.status(404).send({
        message: `User not found by id ${req.params.id}`
      })
  }
  catch (err) {
    console.log(err.stack)
    res.status(422).send({
      message: "Something went wrong!"
    })
  }
}
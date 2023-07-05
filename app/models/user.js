const { default: mongoose } = require("mongoose");
const { sendMessage } = require("../../config/socket");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: String
})

UserSchema.post('save', function (doc) {
  sendMessage('NewUser', doc)
})

const User = mongoose.model("User", UserSchema)
module.exports = User
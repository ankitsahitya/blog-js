const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.verifyToken = (req, res, next) => {
  try {
    if (!req.headers["authorization"]) {
      return res.status(401).send({
        message: "Auth Header is missing.!",
      });
    }
    let token = req.headers["authorization"].split(" ")[1] || req.headers["authorization"];
    if (!token) {
      return res.status(403).send({
        message: "No token provided!",
      });
    }
    jwt.verify(token, '123456', async (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized!",
        });
      } else {
        const user = await User.findOne({
          _id: decoded.user._id
        })
        if (user)
          next();
        else
          return res.status(401).send({
            message: "Unauthorized!",
          });
      }
    })

  } catch (ex) {
    res.status(422).send({
      message: ex.message || "Some error occurred while verifying token."
    });
  }
}
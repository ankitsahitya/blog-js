let express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const router = require("./app/routes")
const bodyParser = require("body-parser")
const cors = require('cors')
const corsOptions = {
  origin: ["http://localhost:3001"]
}
app.use(bodyParser.json())
app.use(cors(corsOptions))

mongoose.connect("mongodb://localhost:27017/blog-dev").then(() => {
  console.log("connected to blog-dev!")
})

router(app)

app.listen("3000", () => {
  console.log("listening at port 3000")
})
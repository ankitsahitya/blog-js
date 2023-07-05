let express = require('express');
const cors = require('cors')
const bodyParser = require("body-parser")
const router = require("../app/routes")

const app = express();
app.use(bodyParser.json())

app.use(cors())
router(app)

module.exports = app
const { index, show, create, update, destroy, login } = require("../controllers/users")
const { verifyToken } = require("../middleware/auth")
const router = require("express").Router()

router.get("/", [verifyToken], index)
router.get("/:id", show)
router.post("/", create)
router.put("/:id", update)
router.delete("/:id", destroy)
router.post("/login", login)

module.exports = router
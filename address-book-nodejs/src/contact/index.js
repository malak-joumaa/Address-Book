const { Router } = require("express");
const { add, get, deleteContact, updateContact } = require("./controller");
const router = Router();
const userMiddleware = require("../../middleware/middleware");

router.post("/", userMiddleware(), add);
router.get("/", get);
router.delete("/", userMiddleware(), deleteContact);
router.put("/", userMiddleware(), updateContact);

module.exports = router;

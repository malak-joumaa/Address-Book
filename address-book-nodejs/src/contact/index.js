const { Router } = require("express");
const { add, get, deleteContact } = require("./controller");
const router = Router();

router.post("/", add);
router.get("/", get);
router.delete("/", deleteContact);

module.exports = router;

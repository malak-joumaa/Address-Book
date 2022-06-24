const { Router } = require("express");
const { add, get, deleteContact, updateContact } = require("./controller");
const router = Router();

router.post("/", add);
router.get("/", get);
router.delete("/", deleteContact);
router.put("/", updateContact);

module.exports = router;

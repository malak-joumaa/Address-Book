const { Router } = require("express");
const { get, register, login } = require("./controller/user");
const router = Router();

router.post("/auth/register", register);
router.post("/auth/login", login);

module.exports = router;

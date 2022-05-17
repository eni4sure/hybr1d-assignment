const router = require("express").Router();
const AuthCtrl = require("./../controllers/auth.controller");

router.post("/register", AuthCtrl.register);

router.post("/login", AuthCtrl.login);

module.exports = router;

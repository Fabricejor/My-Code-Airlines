const router = require('express').Router();
const Auth = require("../Controllers/Auth")



//Authentication with JWT
router.post("/signup", Auth.signUP) ;
router.post("/signin", Auth.signIn);

module.exports = router;
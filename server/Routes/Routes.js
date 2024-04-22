const router = require('express').Router();
const Auth = require("../Controllers/Auth")
const FlightCrud = require("../Controllers/FlightCrud");


//Authentication with JWT
router.post("/signup", Auth.signUP) ;
router.post("/signin", Auth.signIn);

//flight api crud
router.get("/allFlight",FlightCrud.getFlight);
router.post("/generateFlight",FlightCrud.generateFlight);
module.exports = router;
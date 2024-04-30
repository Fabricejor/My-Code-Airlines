const router = require('express').Router();
const Auth = require("../Controllers/Auth")
const FlightCrud = require("../Controllers/FlightCrud");
const TicketCrud = require("../Controllers/TicketCrud");
const VoyagerCrud = require("../Controllers/VoyagerCrud");


//Authentication with JWT
router.post("/signup", Auth.signUP) ;
router.post("/signin", Auth.signIn);

//flight api crud
//! DONT FORGET THE SLASH /
router.get("/allFlight",FlightCrud.getFlight);
router.get("/findFlight/:id",FlightCrud.oneFlight);
router.post("/addFlight",FlightCrud.addFlight);
router.delete("/deleteFlight/:id", FlightCrud.deleteFlight);

//ticket geestion
router.get("/allTicket",TicketCrud.getTicket);
router.get("/findTicket/:id",TicketCrud.oneTicket);
router.post("/addTicket",TicketCrud.addTicket);
router.delete("/deleteTicket/:id", TicketCrud.deleteTicket);

//Passager gestion
router.get("/allVoyager",VoyagerCrud.getVoyager);
router.get("/findVoyager/:id",VoyagerCrud.oneVoyager);
router.post("/addVoyager",VoyagerCrud.addVoyager);
router.delete("/deleteVoyager/:id", VoyagerCrud.deleteVoyager);


module.exports = router;
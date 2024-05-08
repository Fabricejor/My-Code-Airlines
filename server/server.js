const express = require('express');//le module express
const dotenv = require('dotenv').config({ path: "config/.env" });//charger les variables d'environnment
const mongoose = require('mongoose');//le module mongoose
const mongodb = require('mongodb');//le module mongodb au cas où
const cors = require('cors');
//importation routes
const routes = require("./Routes/Routes.js")
require ("./Config/db.js")
const app = express();


const port = 5000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

//connexion avec express
app.listen(port, () => {
    console.log(`Server express running on http://localhost/${port}`);
});
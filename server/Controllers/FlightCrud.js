const Flight = require('../Models/FlightSchema');
const express = require('express');

//tous les vols
module.exports.getFlight = async (req, res, next) => {
    try {
        const flight = await Flight.find();
        res.status(200).json(flight);//afficher sous format json le resultat
       } catch (error) {
        res.status(500).json({message: error.message })
       }
}

//un seul vols
module.exports.oneFlight = async (req,res )=>{
    try {
        const id = req.params.id; // Récupérer l'ID à partir des paramètres de l'URL

        const flight = await Flight.findById(id);
    
        // Si aucun utilisateur avec cet ID n'est trouvé, renvoyer une erreur 404
        if (!flight) {
          return res.status(404).json({ message: "pas de vols trouvés" });
        }
    
        // Renvoyer les données de l'utilisateur trouvé
        res.json(flight);
       } catch (error) {
        // Si une erreur se produit, renvoyer un statut 400 (Bad Request) avec le message d'erreur
        res.status(400).json({ message: error.message });
       }
}
//poster un  vols
module.exports.addFlight = async (req,res) =>{
    try {
        //destructuration pour eviter une repetition
        const { compagnie,
            airport_start,
            airport_end,
            date_depart,
            date_arrivee,
            distance,
            dure } = req.body;

        const newFly = new Flight({
            compagnie,
            airport_start,
            airport_end,
            date_depart,
            date_arrivee,
            distance,
            dure
        })
        const savedFly = await newFly.save();
        res.status(201).json(savedFly);
    } catch (error) {
    console.log(error);    
    res.status(400).json({message: error.message })
        
    }
}
module.exports.deleteFlight = async (req ,res ) => {
    try {
        const id = req.params.id; // Récupérer l'ID à partir des paramètres de l'URL
    
        
        const deletedFly = await Flight.findByIdAndDelete(id);
        if (!deletedFly) {
          return res.status(404).json({ message: "erreur ce vols n'existe pas" });
        }
        res.json(deletedFly);
       } catch (error) {
        res.status(400).json({ message: error.message });
       }
}
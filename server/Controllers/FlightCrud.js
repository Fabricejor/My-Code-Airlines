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
            place,
            distance,
            dure } = req.body;

        const newFly = new Flight({
            compagnie,
            airport_start,
            airport_end,
            date_depart,
            date_arrivee,
            place,
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
// Rechercher un vol par aéroports de départ et d'arrivée
module.exports.searchFlight = async (req, res) => {
    try {
        const { airport_start, airport_end , date_depart} = req.query; // Récupérer les aéroports de départ et d'arrivée depuis les paramètres de requête
        console.log(date_depart);
        const formatDate = (dateString) => {
            const date = new Date(dateString);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Ajouter un 0 devant le mois si nécessaire
            const day = String(date.getDate()).padStart(2, '0'); // Ajouter un 0 devant le jour si nécessaire
            return `${year}-${month}-${day}`;
          };
          const formattedDate = formatDate(date_depart);
          console.log("new format: "+formattedDate);
          console.log("type :" + typeof(formattedDate));
        // Utiliser une expression régulière pour rechercher les vols qui contiennent les aéroports spécifiés
        const flights = await Flight.find({
            airport_start: { $regex: airport_start, $options: "i" }, // Utilisation de l'option "i" pour une recherche insensible à la casse
            airport_end: { $regex: airport_end, $options: "i" },
            date_depart: { $gte: formattedDate }
        });

        // Si aucun vol correspondant n'est trouvé, renvoyer un message approprié
        if (flights.length === 0) {
            return res.status(404).json({ message: "Aucun vol trouvé pour les aéroports spécifiés." });
        }

        // Renvoyer les vols trouvés
        res.status(200).json(flights);
    } catch (error) {
        // Si une erreur se produit, renvoyer un statut 500 avec le message d'erreur
        res.status(500).json({ message: error.message });
    }
}

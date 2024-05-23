const Voyager = require('../Models/VoyagerSchema');
const express = require('express');

//tous les vols
module.exports.getVoyager = async (req, res, next) => {
    try {
        const voyager = await Voyager.find();
        res.status(200).json(voyager);//afficher sous format json le resultat
       } catch (error) {
        res.status(500).json({message: error.message })
       }
}

//un seul vols
module.exports.oneVoyager = async (req,res )=>{
    try {
        const id = req.params.id; // Récupérer l'ID à partir des paramètres de l'URL

        const voyager = await Voyager.findById(id);
    
        // Si aucun utilisateur avec cet ID n'est trouvé, renvoyer une erreur 404
        if (!voyager) {
          return res.status(404).json({ message: "pas de passager trouvé" });
        }
    
        // Renvoyer les données de l'utilisateur trouvé
        res.json(voyager);
       } catch (error) {
        // Si une erreur se produit, renvoyer un statut 400 (Bad Request) avec le message d'erreur
        res.status(400).json({ message: error.message });
       }
}
//poster un  vols
module.exports.addVoyager = async (req,res) =>{
    try {
        //destructuration pour eviter une repetition
        const { 
            nom,
            numPassport,
            age
            } = req.body;

        const newVoyager = new Voyager({
            nom,
            numPassport,
            age,
        })
        const savedFly = await newVoyager.save();
        res.status(201).json(savedFly);
    } catch (error) {
    console.log(error);    
    res.status(400).json({message: error.message })
        
    }
}
module.exports.deleteVoyager = async (req ,res ) => {
    try {
        const id = req.params.id; // Récupérer l'ID à partir des paramètres de l'URL
    
        
        const deletedVoyager = await Voyager.findByIdAndDelete(id);
        if (!deletedVoyager) {
          return res.status(404).json({ message: "erreur ce passager n'existe pas" });
        }
        res.json(deletedVoyager);
       } catch (error) {
        res.status(400).json({ message: error.message });
       }
}
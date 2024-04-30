const Ticket = require('../Models/TicketSchema');
const express = require('express');

//tous les vols
module.exports.getTicket = async (req, res, next) => {
    try {
        const ticket = await Ticket.find();
        res.status(200).json(ticket);//afficher sous format json le resultat
       } catch (error) {
        res.status(500).json({message: error.message })
       }
}

//un seul vols
module.exports.oneTicket = async (req,res )=>{
    try {
        const id = req.params.id; // Récupérer l'ID à partir des paramètres de l'URL

        const ticket = await Ticket.findById(id);
    
        // Si aucun utilisateur avec cet ID n'est trouvé, renvoyer une erreur 404
        if (!ticket) {
          return res.status(404).json({ message: "pas de vols trouvés" });
        }
    
        // Renvoyer les données de l'utilisateur trouvé
        res.json(ticket);
       } catch (error) {
        // Si une erreur se produit, renvoyer un statut 400 (Bad Request) avec le message d'erreur
        res.status(400).json({ message: error.message });
       }
}
//poster un  vols
module.exports.addTicket = async (req,res) =>{
    try {
        //destructuration pour eviter une repetition
        const { 
            id_user,
            id_passager,
            flight_id,
            numTicket,
            type,
            classe,
            prix,
            destination,
            promotion
            } = req.body;

        const newTicket = new Ticket({
            id_user,
            id_passager,
            flight_id,
            numTicket,
            type,
            classe,
            prix,
            destination,
            promotion
        })
        const savedFly = await newTicket.save();
        res.status(201).json(savedFly);
    } catch (error) {
    console.log(error);    
    res.status(400).json({message: error.message })
        
    }
}
module.exports.deleteTicket = async (req ,res ) => {
    try {
        const id = req.params.id; // Récupérer l'ID à partir des paramètres de l'URL
    
        
        const deletedTicket = await Ticket.findByIdAndDelete(id);
        if (!deletedTicket) {
          return res.status(404).json({ message: "erreur ce vols n'existe pas" });
        }
        res.json(deletedTicket);
       } catch (error) {
        res.status(400).json({ message: error.message });
       }
}
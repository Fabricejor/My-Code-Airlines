const Ticket = require('../Models/TicketSchema');
const express = require('express');

//tous les vols
module.exports.getTicket = async (req, res, next) => {
    try {
        const ticket = await Ticket.find();
        res.status(200).json(ticket);//afficher sous format json le resultat
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//un seul vols
module.exports.oneTicket = async (req, res) => {
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
module.exports.addTicket = async (req, res) => {
    try {
        //destructuration pour eviter une repetition
        const {
            id_user,
            flight_id,
            numTicket,
            nom,
            numPassport,
            age,
            type,
            classe,
            prix,
            destination,
            promotion
        } = req.body;

        const newTicket = new Ticket({
            id_user,
            flight_id,
            numTicket,
            nom,
            numPassport,
            age,
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
        res.status(400).json({ message: error.message })

    }
}
module.exports.deleteTicket = async (req, res) => {
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
// Ajouter plusieurs tickets en même temps
module.exports.addManyTickets = async (req, res) => {
    try {
        const tickets = req.body; // Supposons que req.body est un tableau d'objets tickets

        if (!Array.isArray(tickets) || tickets.length === 0) {
            return res.status(400).json({ message: "La requête doit contenir un tableau de tickets" });
        }

        const newTickets = await Ticket.insertMany(tickets);
        res.status(201).json(newTickets);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
}
//recherchers les tickets correspondant en fonctions de l'id du user
// Renvoyer tous les résultats de la table Ticket en fonction de l'id_user
module.exports.getTicketsByUserId = async (req, res) => {
    try {
        const id_user = req.params.id; // Récupérer l'ID de l'utilisateur à partir des paramètres de l'URL

        const tickets = await Ticket.find({ id_user })
        .sort({ createdAt: -1 }) // Trier par date de création décroissante
            .limit(50); 

        // Si aucun ticket n'est trouvé, renvoyer un message approprié
        if (!tickets.length) {
            return res.status(404).json({ message: "Aucun ticket trouvé pour cet utilisateur" });
        }

        // Renvoyer les tickets trouvés
        res.json(tickets);
    } catch (error) {
        // Si une erreur se produit, renvoyer un statut 400 (Bad Request) avec le message d'erreur
        res.status(400).json({ message: error.message });
    }
};
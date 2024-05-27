const NewsLetter= require("../Models/NewsletterSchema");
const express = require('express');

module.exports.Subscribe =async (req, res) =>{
    try {
        const email = req.body.email;

        const userEmailExist = await NewsLetter.findOne({ email });
        if (userEmailExist) {
            return res.status(409).json({ message: "User with this email is already Exist!" });
        }
        const newsletter = await NewsLetter.create({ email});
        return res.status(201).json({ message: " subscribed succesful  ...", newsletter });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error "+console.log(error), error});
    }
}
module.exports.getAllsubscribers= async (req,res)=>{
    try {
        const subcribers = await NewsLetter.find(); // Récupérer tous les utilisateurs

        if (!subcribers.length) {
            return res.status(404).json({ message: "Aucun abonné trouvé" });
        }

        res.status(200).json(subcribers);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Erreur interne du serveur", error });
    }
}
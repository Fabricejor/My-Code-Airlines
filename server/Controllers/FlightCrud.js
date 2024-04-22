const Flight = require('../Models/FlightSchema');
const express = require('express');

module.exports.getFlight = async (req, res, next) => {
    try {
        const flight = await Flight.find();
        res.status(200).json(flight);//afficher sous format json le resultat
       } catch (error) {
        res.status(500).json({message: error.message })
       }
}

module.exports.generateFlight = async (req,res) =>{
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
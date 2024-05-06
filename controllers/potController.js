import Flower from '../models/Pots.js'; // assuming you update Flower model similarly
import express from 'express';
const router = express.Router();
import  db from '../db/conn.js';


// seed route
router.get("/seed", async (req, res) => {
    console.log('in seed');
    try {
        await Flower.create([
            {
                name: 'Dorlis fiberstone',
                color: "Gray",
                decorative: true
            }, 
            {
                name: 'Resin Tiered ',
                color: 'White',
                Elegance: true
            }, 
            {
                name: 'Glass Terrariums',
                color: 'Transparent',
                Trending: true
            }
        ])
        res.status(200).redirect('/pots');
    } catch (err) {
        res.status(400).send(err);
    }
});

export const getPots = async (req, res) => {
    try {
        const pots = await pots.find();
        res.json(pots);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addPot = async (req, res) => {
    const Pot = new Pot(req.body);
    try {
        const savedPot = await Pot.save();
        res.status(201).json(savedPot);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

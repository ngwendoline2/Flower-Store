import Flower from '../models/Fruitbaskets.js'; // assuming you update FruitBasket model similarly
import express from 'express';
const router = express.Router();
import  db from '../db/conn.js';


// seed route
router.get("/seed", async (req, res) => {
    console.log('in seed');
    try {
        await Flower.create([
            {
                name: 'Sunnystore',
                color: "Gold",
                decorative: true
            }, 
            {
                name: 'Ranxo Rose',
                color: 'Gold',
                Elegance: true
            }, 
            {
                name: 'CCATSIX Ceramic Fruit Bowl',
                color: 'white',
                GoldenFeet: true
            }
        ])
        res.status(200).redirect('/fruitbaskets');
    } catch (err) {
        res.status(400).send(err);
    }
});

export const getFruitbaskets = async (req, res) => {
    try {
        const fruitbaskets = await fruitbaskets.find();
        res.json(fruitbaskets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addFruitbasket = async (req, res) => {
    const Fruitbasket = new Fruitbasket(req.body);
    try {
        const savedFruitbasket = await Fruitbasket.save();
        res.status(201).json(savedFruitbasket);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

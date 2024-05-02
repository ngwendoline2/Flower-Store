import Flower from '../models/Flower.js'; // assuming you update Flower model similarly
import express from 'express';
const router = express.Router();
import  db from '../db/conn.js';


// seed route
router.get("/seed", async (req, res) => {
    console.log('in seed');
    try {
        await Flower.create([
            {
                name: 'oriental lilies',
                color: "mixed colors",
                price: '12',
            }, 
            {
                name: 'gladiolus',
                color: 'assorted colors',
                price: '23',
            }, 
            {
                name: 'dinnerplate dahlia',
                color: 'assorted colors',
                price: '15',
            }
        ])
        res.status(200).redirect('/flowers');
    } catch (err) {
        res.status(400).send(err);
    }
});

export const getFlowers = async (req, res) => {
    try {
        const flowers = await Flower.find();
        res.json(flowers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addFlower = async (req, res) => {
    const flower = new Flower(req.body);
    try {
        const savedFlower = await flower.save();
        res.status(201).json(savedFlower);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

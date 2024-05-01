import express from 'express';
import Flower from '../models/flowers';
const router = express.Router();


// seed route
router.get("/seed", async (req, res) => {
    console.log('in seed');
    try {
        await Flower.create([
            {
                name: 'roseflower',
                color: "pink",
                readyToEat: true
            }, 
            {
                name: 'tulip',
                color: 'purple',
                readyToEat: false
            }, 
            {
                name: 'mini-calla-lily',
                color: 'red',
                readyToEat: true
            }
        ])
        res.status(200).redirect('/flowers');
    } catch (err) {
        res.status(400).send(err);
    }
});

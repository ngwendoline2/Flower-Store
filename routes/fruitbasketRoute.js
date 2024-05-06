import express from 'express';
import { getFruitbaskets, addFruitbasket } from '../controllers/fruitbasketController.js';
import FruitBasket from '../models/Fruitbaskets.js';

const router = express.Router();
router.get("/test",(req, res)=>{res.send("test")})
// seed route
router.get("/seed", async (req, res) => {
    console.log('in seed');
    try {
        await FruitBasket.create([
            {
                name: 'Sunnystore',
                color: "Gold",
                price: 89,
                decorative: true
            }, 
            {
                name: 'Ranxo Rose',
                color: 'Gold',
                price: 73,
                Elegance: true
            }, 
            {
                name: 'CCATSIX Ceramic Fruit Bowl',
                color: 'white',
                price: 45,
                GoldenFeet: true
            }
        ])
        res.status(200).redirect('/fruitBaskets');
    } catch (err) {
        res.status(400).send(err);
    }
});
router.get('/', getFruitbaskets);
router.post('/', addFruitbasket);

// I - Index    GET         READ - display a list of elements
// router.get('/', async (req, res) => {
//     try {
//         const foundFlowers = await Flower.find({});
//         res.status(200).render('flowers/Index', { flowers: foundFlowers})
//         // res.status(200).send(foundFlowers);
//     } catch (err) {
//         res.status(400).send(err);
//     }
// })

// N - New - allows a user to input a new fruit
router.get('/new', (req, res) => {
    res.render('fruitbaskets/New');
})

// D - DELELITE - allows a user to permanently remove an item from the database
router.delete('/:id', async(req, res) => {
    try{
        const deleteFruitbasket = await FruitBasket.findByIdAndDelete(req.params.id);
        console.log(deleteFruitbasket);
        res.status(200).redirect('/fruitbaskets');
    }catch (err) {
        res.status(400).send(err);
    }
})


// U - UPDATE
router.put('/:id', async (req, res) => {
    if (req.body.Beautiful === 'on') {
        req.body.Beautiful = true;
    } else {
        req.body.Beautiful = false;
    }

    try {
        const updatedFruitbasket = await FruitBasket.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
            console.log(updatedFruitbasket);
        res.redirect(`/fruitbaskets/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
})

// C - CREATE
// I am starting with my post route so that I can see the things in my database
router.post('/', async(req, res) => {
    // // this will be useful when have a user input form
    if (req.body.Beautiful === 'on') { // if checked, req.body.Beautiful is set to 'on' - or the checkbox is checked
        req.body.Beautiful = true;
    } else {                            // if not checked, then it was undefined
        req.body.Beautiful = false;
    }
    console.log(req.body)

    try {
        const createdFruitbasket = await FruitBasket.create(req.body);
        res.status(200).redirect('/fruitbaskets');
    } catch (err) {
        res.status(400).send(err);
    }
})

// E - EDIT - update an existing entry in the database
router.get("/:id/edit", async (req, res) => {
    try {
        const foundFruitbasket = await FruitBasket.findById(req.params.id);
        res.status(200).render('fruitbaskets/Edit', {FruitBasket: foundFruitbasket});
    } catch (err) {
        res.status(400).send(err);
    }
})


// S - SHOW - show route displays details of an individual fruitbasket
router.get('/:id', async (req, res) => {
    try {
        const foundFruitBasket = await FruitBasket.findById(req.params.id);
        res.render('fruitbaskets/Show', {FruitBasket: FruitBasket});
    } catch (err) {
        res.status(400).send(err);
    }
})

export default router;
import express from 'express';
import Flower from '../models/Flower.js';
import Pot from '../models/Pots.js';

const router = express.Router();
router.get("/test",(req, res)=>{res.send("test")})
// seed route
router.get("/seed", async (req, res) => {
    console.log('in seed');
    try {
        await Pot.create([
            {
                name: 'Dorlis fiberstone',
                color: "Gray",
                price: 60,
                decorative: true
            }, 
            {
                name: 'Resin Tiered ',
                color: 'White',
                price: 34,
                Elegance: true
            }, 
            {
                name: 'Glass Terrariums',
                color: 'Transparent',
                price: 63,
                Trending: true
            }
        ])
        res.status(200).redirect('/pots');
    } catch (err) {
        res.status(400).send(err);
    }
});
router.get('/', getPots);
router.post('/', addPot);

// I - Index    GET         READ - display a list of elements
// router.get('/', async (req, res) => {

// N - New - allows a user to input a new pot
router.get('/new', (req, res) => {
    res.render('pots/New');
})

// D - DELELITE - allows a user to permanently remove an item from the database
router.delete('/:id', async(req, res) => {
    try{
        const deletePot = await Pot.findByIdAndDelete(req.params.id);
        console.log(deletePot);
        res.status(200).redirect('/pots');
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
        const updatedPot = await Pot.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
            console.log(updatedPot);
        res.redirect(`/pots/${req.params.id}`);
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
        const createdPot = await Pot.create(req.body);
        res.status(200).redirect('/pots');
    } catch (err) {
        res.status(400).send(err);
    }
})

// E - EDIT - update an existing entry in the database
router.get("/:id/edit", async (req, res) => {
    try {
        const foundPot = await Pot.findById(req.params.id);
        res.status(200).render('pots/Edit', {pot: foundPot});
    } catch (err) {
        res.status(400).send(err);
    }
})


// S - SHOW - show route displays details of an individual pot
router.get('/:id', async (req, res) => {
    try {
        const foundPot = await Pot.findById(req.params.id);
        res.render('pots/Show', {Pot: foundPot});
    } catch (err) {
        res.status(400).send(err);
    }
})

export default router;
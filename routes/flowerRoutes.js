import express from 'express';
import { getFlowers, addFlower } from '../controllers/flowerController.js'; // assuming you update flowerController similarly
import Flower from '../models/Flower.js';

const router = express.Router();
router.get("/test",(req, res)=>{res.send("test")})
// seed route
router.get("/seed", async (req, res) => {
    console.log('in seed');
    try {
        await Flower.create([
            {
                name: 'oriental lilies',
                color: 'mixed colors',
                price: 12,
                Beautiful: true
            }, 
            {
                name: 'gladiolus',
                color: 'assorted colors',
                price: 23,
                beautiful: true
            }, 
            {
                name: 'dinnerplate dahlia',
                color: 'assorted colors',
                price: 15,
                Beautiful: true
            }
        ])
        res.status(200).redirect('/flowers');
    } catch (err) {
        res.status(400).send(err);
    }
});
router.get('/', getFlowers);
router.post('/', addFlower);

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
    res.render('flowers/New');
})

// D - DELELITE - allows a user to permanently remove an item from the database
router.delete('/:id', async(req, res) => {
    try{
        const deleteFlower = await Flower.findByIdAndDelete(req.params.id);
        console.log(deleteFlower);
        res.status(200).redirect('/flowers');
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
        const updatedFlower = await Flower.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
            console.log(updatedFlower);
        res.redirect(`/flowers/${req.params.id}`);
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
        const createdFlower = await Flower.create(req.body);
        res.status(200).redirect('/flowers');
    } catch (err) {
        res.status(400).send(err);
    }
})

// E - EDIT - update an existing entry in the database
router.get("/:id/edit", async (req, res) => {
    try {
        const foundFlower = await Flower.findById(req.params.id);
        res.status(200).render('flowers/Edit', {fruit: foundFlower});
    } catch (err) {
        res.status(400).send(err);
    }
})


// S - SHOW - show route displays details of an individual fruit
router.get('/:id', async (req, res) => {
    try {
        const foundFruit = await Fruit.findById(req.params.id);
        res.render('fruits/Show', {fruit: foundFruit});
    } catch (err) {
        res.status(400).send(err);
    }
})

export default router;
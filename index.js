import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import flowerRoutes from './routes/flowerRoutes.js'; // ensure this path is correct and uses '.js' extension
import db from './db/conn.js';

const app=express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());


app.get("/getData",(req,res)=>{
    res.send( name, color, price)
    }
)

// Use routes
app.use('/api/flowers', flowerRoutes);

app.listen(PORT, () => {
    console.log(`Server running `);
});
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import flowerRoutes from './routes/flowerRoutes.js'; // ensure this path is correct and uses '.js' extension
import db from './db/conn.js';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Database connection
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("MongoDB connection established successfully"))
// .catch(err => console.error(err));

// Use routes
app.use('/api/flowers', flowerRoutes);

app.listen(PORT, () => {
    console.log(`Server running `);
});
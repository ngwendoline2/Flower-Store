import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';
import flowerRoutes from './controllers/flower.js';
// import potRoutes from './controllers/pot.js';
// import fruitbasketRoutes from './controllers/fruitbasket.js';


config();  // This will load the environment variables from the .env file.

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());  // Updated for clarity and consistency.

app.set('cors engine', 'jsx');
app.set('cors', './cors');
app.engine('jsx', jsxCorsEngine());


const flowersRouter = require('./routes/flower')


app.use('/flowers', flowersRouter);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
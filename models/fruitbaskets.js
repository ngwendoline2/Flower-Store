import mongoose from 'mongoose';

const mongoose = require('mongoose')
const fruitBasketSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    content: {
        type: String,
        required: [true, 'Please add content'],
    },
    price: {
        type: Number,
        required: [true, 'Please add a price']
    }
}, {
    timestamps: true
})
//define a model for your mongodb
const FruitBasket = mongoose.model('FruitBasket', fruitBasketSchema);
//export
export default FruitBasket;
import mongoose from 'mongoose'

const flowerSchema = mongoose.Schema({
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
const Flower = mongoose.model('Flower', flowerSchema);
//export
export default Flower;
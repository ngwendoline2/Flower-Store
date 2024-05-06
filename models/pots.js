import mongoose from 'mongoose'
const potSchema = mongoose.Schema({
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
const Pot = mongoose.model('Pot', potSchema);
//export
export default Pot;
import mongoose from 'mongoose';

const FlowerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true }
});

export default mongoose.model('Flower', FlowerSchema);
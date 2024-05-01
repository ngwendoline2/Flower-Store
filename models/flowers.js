import { Schema as _Schema, model } from 'mongoose';


const Schema = _Schema;


const flowersSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});


const Flower = model('Flower', flowersSchema);


export default Flower;

;
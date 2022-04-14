import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let Eletronic = new Schema({
    "type": { type: String },
    "model": { type: String },
    "brand": { type: String },
    "year": { type: Number },
    "price": { type: Number },
    "image": { type: String },
    });

export default Electronic;

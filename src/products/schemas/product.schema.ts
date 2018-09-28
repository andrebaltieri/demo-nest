import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    tag: String,
    title: String,
    price: Number,
});
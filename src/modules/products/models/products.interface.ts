import * as mongoose from 'mongoose';

export interface Products extends mongoose.Document {
    id: string,
    name: string,
    price: number,
    description: string,
    img_url: string
}
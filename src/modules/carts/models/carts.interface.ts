import * as mongoose from 'mongoose';

export interface Carts extends mongoose.Document {
    uid: string,
    items: object[],
}
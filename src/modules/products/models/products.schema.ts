import * as mongoose from 'mongoose'

export const ProductsField = {
}

export const ProductsSchema = new mongoose.Schema(ProductsField, { timestamps: true, collection: 'Products'})

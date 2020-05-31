import * as mongoose from 'mongoose'

export const CartsField = {
  uid: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
}

export const CartsSchema = new mongoose.Schema(CartsField, { timestamps: true, collection: 'carts'})
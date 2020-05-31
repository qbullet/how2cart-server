import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Products } from '../models/products.interface'

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products') private productsModel:Model<Products>
    ){}

    async findAll(): Promise<Products[]> {
      return this.productsModel.find().exec()
    }

    async findByCode(_code: string): Promise<Products[]> {
      return this.productsModel.find({code: _code}).exec()
    }
}

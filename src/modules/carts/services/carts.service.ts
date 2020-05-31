import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Carts } from '../models/carts.interface'

@Injectable()
export class CartsService {
  constructor(
    @InjectModel('Carts') private cartsModel:Model<Carts>
    ){}

    async findAll(): Promise<Carts[]> {
      return this.cartsModel.find().exec()
    }

    async findByUid(_uid: string): Promise<Carts[]> {
      return this.cartsModel.find({uid: _uid}).exec()
    }

    async createCart(uid: string, item: string) : Promise<Carts[]> {
      return this.cartsModel({ 
        uid, 
        items: {
          code: item,
          qty: 1
        } 
      }).save()
    }

    async updateByUid(uid: string, item: string) : Promise<Carts[]> {
      let res = await this.cartsModel.updateOne(
        { uid, 'items.code': item },
        { $inc : { 'items.$.qty': 1 } }
      )

      if (res.n === 0) {
        res = await this.cartsModel.updateOne(
          { uid },
          { $push: { 
            items: {
              code: item,
              qty: 1
            }
          }}
        )
      }


      return res
    }

    async updateOwnedProd(uid: string, item: string) : Promise<Carts[]> {
      return await this.cartsModel.updateOne(
        { uid, 'items.code': item },
        { $inc : { 'items.$.qty': 1 } }
      )
    }

    async  putNewProd (uid: string, item: string) : Promise<Carts[]> {
      return await this.cartsModel.updateOne(
        { uid },
        { $push: { 
          items: {
            code: item,
            qty: 1
          }
        }}
      )
    }
    
}

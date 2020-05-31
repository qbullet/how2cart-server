import { Injectable } from '@nestjs/common'
import { CartsService } from '../services/carts.service'

@Injectable()
export class CartsLogic {
  
  constructor(
    private readonly cartsService: CartsService
  ) {}

  async add2Cart(req) {
    const cart = await this.cartsService.findByUid(req.uid)
    if (cart.length <= 0) {
      return await this.cartsService.createCart(req.uid, req.item)
    } else {
      return await this.cartsService.updateByUid(req.uid, req.item)
    }
  }
}
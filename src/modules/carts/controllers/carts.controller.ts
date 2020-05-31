import { Controller, Post, Body, Get, Param } from '@nestjs/common'
import { CartsLogic } from '../logics/carts.logic'
import { CartsService } from '../services/carts.service'

@Controller('Carts')
export class CartsController {

  constructor(
    private readonly cartsLogic: CartsLogic,
    private readonly cartsService: CartsService
  ) {}
  
  @Get('/:uid')
  async getByCode(@Param('uid') _uid: string) {
    return this.cartsService.findByUid(_uid)
  }

  @Post('')
  async add2Cart (@Body() payload) {
    return await this.cartsLogic.add2Cart(payload)
  }
  
}

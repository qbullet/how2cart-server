import { Controller, Get, Param } from '@nestjs/common'
import { ProductsLogic } from '../logics/products.logic'
import { ProductsService } from '../services/products.service'

@Controller('Products')
export class ProductsController {

  constructor(
    private readonly productsLogic: ProductsLogic,
    private readonly productsService: ProductsService
  ) {}
  
  @Get('')
  async findAll() {
    return this.productsService.findAll()
  }

  @Get('/:code')
  async getByCode(@Param('code') _code: string) {
    return this.productsService.findByCode(_code)
  }
}

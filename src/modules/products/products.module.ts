import { Module, HttpModule } from '@nestjs/common'
import { ProductsLogic } from './logics/products.logic'
import { ProductsService } from './services/products.service' 
import { ProductsController } from './controllers/products.controller'
import { ProductsSchema } from './models/products.schema'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      { name: 'Products', schema: ProductsSchema }
    ])
  ],
  providers: [
    ProductsLogic,
    ProductsService,
  ],
  controllers: [
    ProductsController
  ]
})

export class ProductsModule {}

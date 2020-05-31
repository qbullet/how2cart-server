import { Module, HttpModule } from '@nestjs/common'
import { CartsLogic } from './logics/carts.logic'
import { CartsService } from './services/carts.service' 
import { CartsController } from './controllers/carts.controller'
import { CartsSchema } from './models/carts.schema'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      { name: 'Carts', schema: CartsSchema }
    ])
  ],
  providers: [
    CartsLogic,
    CartsService,
  ],
  controllers: [
    CartsController
  ]
})

export class CartsModule {}

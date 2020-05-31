import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProductsModule } from './modules/products/products.module'
import { MongooseModule } from '@nestjs/mongoose'
import { CartsModule } from './modules/carts/carts.module'
import { ConfigModule } from '@nestjs/config'


@Module({
  imports: [
    ProductsModule,
    CartsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

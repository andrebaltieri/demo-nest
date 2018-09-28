import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb://baltaio:baltaio1978@ds119113.mlab.com:19113/cursonest'),
  ],
})
export class AppModule { }

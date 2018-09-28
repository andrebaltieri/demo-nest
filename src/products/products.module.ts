import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from 'products/schemas/product.schema';
import { AppController } from 'products/controllers/app.controller';
import { AppService } from 'products/services/app.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }])],
    controllers: [AppController],
    providers: [AppService],
})
export class ProductsModule { }

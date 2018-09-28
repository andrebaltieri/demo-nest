import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from 'products/models/product.model';

@Injectable()
export class AppService {
  constructor(@InjectModel('Product') private readonly model: Model<Product>) { }

  async get(): Promise<Product[]> {
    return await this.model.find().exec();
  }

  async create(model: Product): Promise<Product> {
    const product = new this.model(model);
    return await product.save();
  }
}

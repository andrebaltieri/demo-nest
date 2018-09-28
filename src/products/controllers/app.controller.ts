import { Get, Controller, Post, Body } from '@nestjs/common';
import { AppService } from 'products/services/app.service';
import { Product } from 'products/models/product.model';

@Controller('v1/products')
export class AppController {
  constructor(private readonly service: AppService) {}

  @Post()
  async create(@Body() model: Product) {
    this.service.create(model);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.service.get();
  }
}

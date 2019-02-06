import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { config } from 'dotenv';

import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    config,
    CategoryModule
  ]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}

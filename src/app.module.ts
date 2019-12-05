import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import config from './config/keys';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot(config.mongoURI), LoginModule, RegisterModule],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}

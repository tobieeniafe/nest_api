import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UserModule } from './user/user.module';
import config from './config/keys';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), ProductsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

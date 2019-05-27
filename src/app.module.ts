import { Module, NestModule, MiddlewareConsumer  } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { MiddlewareMiddleware } from './share/middleware.middleware';
import { UsersController } from './users/users.controller';
import { ProductController } from './products/controller/product.controller';

@Module({
  imports: [UserModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule  implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // apply、forRoute方法允許傳入多個參數
    consumer.apply(MiddlewareMiddleware).forRoutes(
      // load進Controllers
      UsersController,
      ProductController,
    );
  }
}

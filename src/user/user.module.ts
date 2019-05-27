import { Module } from '@nestjs/common';
import { UsersController } from 'src/users/users.controller';
import { UsersService } from 'src/users/users.service';
import { ProductsModule } from 'src/products/products.module';

@Module({
    imports: [ProductsModule],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UserModule {}

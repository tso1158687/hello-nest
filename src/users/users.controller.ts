import { Controller, Get, Post, Request, Response, Param, Next, HttpStatus, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-users.dto';
@Controller('users')
export class UsersController {
    users = this.userService.getUserData();
    constructor(private userService: UsersService) {}
    @Get()
    // 使用Express的參數
    getAllUsers( @Request() req, @Response() res, @Next() next) {
        // 假資料
        // 多種HttpStatus可用
        res.status(HttpStatus.OK).json(this.users);
    }

    @Get('/:id')
    // 使用Express的參數
    getUser( @Param() params) {
        return this.users[params.id];
        // return { getUser: params.id };
    }

    @Post()
    addUser(@Body() createUserDTO: CreateUserDTO) {
        // 顯示POST過來的body請求體
        console.log('姓名:', createUserDTO._name, '年紀:', createUserDTO._age);
    }
}

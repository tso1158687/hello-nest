import { Controller, Get, Post, Request, Response, Param, Next, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';

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
    addUser() { }
}

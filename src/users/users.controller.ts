import { Controller, Get, Post, Request, Response, Param, Next, HttpStatus } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    // 使用Express的參數
    getAllUsers( @Request() req, @Response() res, @Next() next) {
        // 假資料
        const users = [{ Name: 'Michael', Age: 25 }, {Name: 'Jason', Age: 25}];
        // 多種HttpStatus可用
        res.status(HttpStatus.OK).json(users);
    }

    @Get('/:id')
    // 使用Express的參數
    getUser( @Param() params) {
        return { getUser: params.id };
    }

    @Post()
    addUser() { }
}

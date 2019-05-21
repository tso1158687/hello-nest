import { Controller, Get, Post, Request, Response, Param, Next, HttpStatus, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-users.dto';
import { tap } from 'rxjs/operators';
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}
    @Get()
    // 使用Express的參數
    getAllUsers( @Request() req, @Response() res, @Next() next) {
        // 假資料
        // 多種HttpStatus可用
        this.userService.getAllUsers().subscribe(user => {
            res.status(HttpStatus.OK).json(user);
        });
    }

    @Get('/:id')
    // 使用Express的參數
    getUser( @Param() params, @Response() res) {
        this.userService.getUser(params.id).subscribe(user => {
            res.status(201).json(user);
        });
    }

    @Post()
    addUser( @Response() res, @Body() createUserDTO: CreateUserDTO) {
        // 使用Rx.js，所以回傳可以做更多資料流的處理
        this.userService.addUser(createUserDTO).subscribe((users) => {
            res.status(HttpStatus.OK).json(users);
        });
    }
}

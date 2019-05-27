import { Controller, Get, Post, Request, Response, Param, Next, HttpStatus, Body } from '@nestjs/common';
import { ProductService } from '../service/product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}
    @Get()
    // 使用Express的參數
    getAllProducts( @Request() req, @Response() res, @Next() next) {
        this.productService.getAllProducts().subscribe(user => {
            res.status(HttpStatus.OK).json(user);
        });
    }

}

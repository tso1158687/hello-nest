import { Injectable } from '@nestjs/common';
import { of } from 'rxjs';
@Injectable()
export class ProductService {
    products = [
        {name: 'legal', id: 1},
        {name: 'chem', id: 2},
        {name: 'risk', id: 3},
        {name: 'box', id: 4},
        {name: 'license', id: 5},
    ];
    getAllProducts() {
        console.log('經過這裡??');
        return of(this.products);
    }
}

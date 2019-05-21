import { Injectable, HttpException } from '@nestjs/common';
import {of} from 'rxjs';
import { Observable } from 'rxjs';
import { CreateUserDTO } from './dto/create-users.dto';

@Injectable()
export class UsersService {
    users = [{ Name: 'Michael', Age: 25, id: 1 }, {Name: 'Jason', Age: 25, id: 2}, {Name: 'BJ', Age: 24, id: 3}];
    getAllUsers(): Observable<any> {
        return of(this.users);
    }
    getUser(id: number) {
        const user = this.users.filter(data => {
            return data.id === Number(id);
        });
        if (!user) {
            // nestjs對於http exception有API可以調用，建議使用。
            throw new HttpException('user not found', 404);
        }
        return of(user);
    }
    // 在nestjs也是可以歡樂使用Rx.js
    addUser(user): Observable<object[]> {
       this.users = [...this.users, ...[user]];
       return of(this.users);
    }
}

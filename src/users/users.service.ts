import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUserData() {
        const users = [{ Name: 'Michael', Age: 25 }, {Name: 'Jason', Age: 25}, {Name: 'BJ', Age: 24}];
        return users;
    }
}

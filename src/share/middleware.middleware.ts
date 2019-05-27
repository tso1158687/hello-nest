import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class MiddlewareMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('經過middleware囉');
    next();
  }
}

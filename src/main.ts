import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MiddlewareMiddleware } from './share/middleware.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(MiddlewareMiddleware);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();

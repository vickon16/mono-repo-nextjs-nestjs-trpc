import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TRPCRouter } from '@server/trpc/trpc.router';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // trpc setup
  const trpc = app.get(TRPCRouter);
  trpc.applyMiddleware(app);

  await app.listen(process.env.PORT || 3333);
}
bootstrap();

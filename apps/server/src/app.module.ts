import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TRPCModule } from './trpc/trpc.module';

@Module({
  imports: [
    // enable environment variables,
    ConfigModule.forRoot(),
    TRPCModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

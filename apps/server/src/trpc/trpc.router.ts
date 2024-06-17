import { INestApplication, Injectable } from '@nestjs/common';
import { TRPCService } from './trpc.service';
import * as z from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';

@Injectable()
export class TRPCRouter {
  constructor(private readonly trpc: TRPCService) {}

  appRouter = this.trpc.router({
    greeting: this.trpc.procedure
      .input(z.object({ name: z.string() }))
      .query(({ input }) => {
        return `hello ${input.name ?? 'world'}`;
      }),
  });

  // we need to add this router to the nest js middleware to make sure that this routers
  // are exposed.
  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({
        router: this.appRouter,
      }),
    );
  }
}

export type AppRouter = TRPCRouter['appRouter'];

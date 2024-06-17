import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { type AppRouter } from "@server/trpc/trpc.router";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${process.env.NEXT_PUBLIC_NESTJS_SERVER}/trpc`, // same as the route in the server.
    }),
  ],
});

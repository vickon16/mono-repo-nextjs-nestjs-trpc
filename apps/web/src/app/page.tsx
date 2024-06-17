import { trpc } from "@web/trpc";

export default async function Home() {
  const response = await trpc.greeting.query({ name: "Client" });
  return <div>{response}</div>;
}

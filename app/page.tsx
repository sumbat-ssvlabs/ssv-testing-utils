import { generateKey } from "./lib/generateKey";

export default async function Home() {
  const result = await generateKey();
  const date = new Date().toLocaleTimeString();
  return (
    <main className="min-h-screen p-24">
      <h1 className="text-4xl font-bold text-center mb-8">
        RSA Public Key Generator
      </h1>
      <p className="text-center mb-8">Generated at {date}</p>
      <textarea
        rows={20}
        value={result.encoded}
        className="flex  w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
      />
    </main>
  );
}

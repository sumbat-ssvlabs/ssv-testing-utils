import Image from "next/image";
import { generateKey } from "./lib/generateKey";
import { Suspense } from "react";

export default async function Home() {
  const result = await generateKey();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="min-h-screen p-24">
        <h1 className="text-4xl font-bold text-center mb-8">
          RSA Public Key Generator
        </h1>
        <textarea rows={20} className="flex  w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {result.encoded}
        </textarea>
      </main>
    </Suspense>
  );
}

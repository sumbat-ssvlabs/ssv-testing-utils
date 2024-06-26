"use client";

import { useMutation } from "@tanstack/react-query";
import { generateKey } from "../lib/generateKey";
import Image from "next/image";

export const MainPage = () => {
  const mutation = useMutation({
    mutationFn: async () => {
      return {
        keys: await generateKey(),
        createdAt: new Date(),
      };
    },
  });

  return (
    <main className="min-h-screen p-24 max-w-screen-lg mx-auto">
      <Image
        src="https://app.stage.ssv.network/images/logo/dark.svg"
        width={120}
        height={120}
        alt="SSV Logo"
        className="mx-auto mb-8"
      />
      <h1 className="text-4xl font-bold text-center mb-8">
        Operator Public Key Generator
      </h1>
      {mutation.isPending ? (
        <p className="text-center mb-8">Generating...</p>
      ) : mutation.isError ? (
        <p className="text-center mb-8">Error: {mutation.error.message}</p>
      ) : null}
      {/* {mutation.isSuccess && (
        <p className="text-center mb-8">
          Generated at {mutation.data?.createdAt.toLocaleTimeString()}
        </p>
      )} */}
      <textarea
        rows={8}
        value={mutation.isSuccess ? mutation.data?.keys.encoded : ""}
        className="flex  w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
      />
      <button
        onClick={() => {
          mutation.reset();
          setTimeout(() => {
            mutation.mutate();
          }, 100);
          return;
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 w-full h-12"
      >
        Generate
      </button>
    </main>
  );
};

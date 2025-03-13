import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function BackgroundLinesDemo() {
  return (
    (<BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Automated <br /> Quote System.
      </h2>
      <p
        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Made for Web and App Development. <br />
        Submit your details below to get
        a quote for your project.
      </p>
      <button className="mt-7 bg-orange-500 dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Get started
      </button>
    </BackgroundLines>)
  );
}

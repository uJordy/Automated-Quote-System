"use client";

import { useState } from "react";
import { motion } from "motion/react"
import MyForm from "@/components/quote-form";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";
import Link from "next/link";
import { TabsDemo } from "@/components/quote-tabs";

export default function Home() {

  const [quote, setQuote] = useState(0);

  const generateQuote = (formData) => {
    "use client";

    const { app_type, page_num, features_required, design_complexities } = formData;

    console.log(app_type, page_num, features_required, design_complexities);

    const baseHours = { // An object is defined and then accessed by app_type value
      website: 100,
      mobile: 200,
    }[app_type];

    const pageHours = page_num * 60;
    const featureHours = features_required.length * 100;

    const complexityMultiplier = { // An object is defined and then accessed by design_complexities value
      basic: 1,
      standard: 1.5,
      custom: 2,
    }[design_complexities]

    setQuote((baseHours + pageHours + featureHours) * complexityMultiplier);
  }

  const renderQuote = () => {  
    if (quote === 0) {
      return null
    } else {
      return (

      <p>{quote}</p>
    )
    }
  }

  function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* <div className="h-96 w-full relative top-0 z-10">
        <Image className=" z-10 h-full w-full object-cover" src="/pexels-walidphotoz-1509582.jpg" alt="Bird's eye view of desert" fill={true} />
      </div> */}

      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
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
        <button onClick={() => scrollToElement("quote-form")} className="bg-clip-padding z-20 mt-7 bg-orange-500 dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Get started
        </button>
      </BackgroundLines>

      <main className="m-10 flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <motion.div layout className="flex flex-row gap-4 w-full *:p-5">
          
          <MyForm id="quote-form" classNameProp="basis-full" generateQuote={generateQuote} />

          <motion.div layout className="border-(--border) border-1 grow rounded-lg ">
            <h2 className="text-2xl font-semibold">Your Quote</h2>
            <TabsDemo/>
            {/* <div>
                <div className="inline-flex items-center"><p className="italic">Type:</p><p className="font-bold text-lg">App</p></div>
            </div>
            <p className="text-lg">£{quote}</p> */}

          </motion.div>
          {/* {renderQuote()} */}
        </motion.div>
      </main>
    </div>
  );
}

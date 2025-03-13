"use client";

import { useState } from "react";
import { motion } from "motion/react"
import MyForm from "@/components/quote-form";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";
import Link from "next/link";
import { QuoteTabs } from "@/components/quote-tabs";
import { Background } from "@/components/background";


export default function Home() {


  const [quoteDetails, setQuoteDetails] = useState(null);

  // { app_type: "website", page_num: 3, features_required: ["E-commerce", "Blog", "Booking System", "Portfolio", "Forum", "Social Media", "Other"], design_complexities: "standard", quote: 5000 }
  const generateQuote = (formData) => {
    "use client";

    const { app_type, page_num, features_required, design_complexities } = formData;

    console.log(app_type, page_num, features_required, design_complexities);

    const baseHours = { // An object is defined and then accessed by app_type value
      website: 100,
      mobile: 200,
    }[app_type];

    const pageHours = page_num * 60; //60 hours per page (just an example)
    const featureHours = features_required.length * 100; //100 hours per feature (just an example)

    const complexityMultiplier = { // An object is defined and then accessed by design_complexities value
      basic: 1,
      standard: 1.5,
      custom: 2,
    }[design_complexities]

    const quote = (baseHours + pageHours + featureHours) * complexityMultiplier; // Quote is calculated based on the values of the form

    setQuoteDetails({
      app_type: app_type,
      page_num: page_num,
      features_required: features_required,
      complexity: design_complexities,
      quote: quote
    });
  }


  function scrollToElement(id) { //For "Get started" button
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  return (
    <div className="font-[family-name:var(--font-geist-sans)]">

      {/* Background VV */}
      <Background className="flex items-center justify-center w-full flex-col px-4">
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
      </Background>
      {/* Background ^^ */}


      <main className="m-10 flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <motion.div layout className="flex flex-row gap-4 w-full *:p-5 flex-wrap">

          <MyForm id="quote-form" classNameProp="" generateQuote={generateQuote} />

          <motion.div layout className="basis-lg border-(--border) border-1 grow-2 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold md:text-start sm:text-start">Your Quote</h2>
            <QuoteTabs quoteDetails={quoteDetails}  />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

"use client";

import { Tabs } from "./ui/tabs";
import { motion } from "motion/react";
import { Button } from "./ui/button";

import { IoDocument } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { QuoteDocument } from "@/app/react-pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";

export function QuoteTabs({ quoteDetails }) {
  const summaryText = // Placeholder text to represent summary information for a quote
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt porro fugiat similique, quod quae molestiae. Blanditiis recusandae velit est voluptate. Quas dolor recusandae error,architecto quia impedit vel sunt! Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consectetur quam voluptate veritatis earum nulla eaque quisquam sequi itaque fuga. Non, eaque sint tempora minima iusto recusandae veritatis reiciendis! Earum!";

  const technicalText = // Placeholder text to represent summary information for a quote
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt porro fugiat similique, quod quae molestiae. Blanditiis recusandae velit est voluptate. Quas dolor recusandae error, architecto quia impedit vel sunt! Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consectetur quam voluptate veritatis earum nulla eaque quisquam sequi itaque fuga. Non, eaque sint tempora minima iusto recusandae veritatis reiciendis! Earum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ratione quia, velit tempore explicabo iure vero voluptas illo eaque alias";

  if (!quoteDetails) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-2xl ">
          Please submit your details to generate a quote
        </p>
      </div>
    );
  }

  const tabs = [
    {
      title: "Summary",
      value: "summary",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-xl md:text-4xl font-bold">Summary Quote</p>
          <div className="my-5 flex flex-col *:inline-flex">
            <div>
              <p className=" text-white/80 mr-2">App type:</p>
              <p className="font-bold capitalize"> {quoteDetails.app_type}</p>
            </div>
            <div>
              <p className=" text-white/80 mr-2">Number of pages/screens:</p>
              <p className="font-bold capitalize"> {quoteDetails.app_type}</p>
            </div>
            <div>
              <p className=" text-white/80 mr-2">Design Complexity:</p>
              <p className="font-bold capitalize"> {quoteDetails.complexity}</p>
            </div>
            <div>
              <p className=" text-white/80 mr-2">Features Required:</p>
              <p className="font-bold">
                {quoteDetails.features_required.map(String).join(", ")}
              </p>
            </div>
          </div>
          <p className="text-white/80">Description:</p>
          <p>{summaryText}</p>
          <div className="my-5 inline-flex">
            <div className="my-auto">
              <p className="text-white/80 mr-2">Estimated Quote:</p>
            </div>
            <p className="font-bold text-2xl md:text-4xl">
              {" "}
              £{quoteDetails.quote}
            </p>
          </div>
          <motion.div className="flex justify-start mt-auto gap-2">
            <Button className="bg-orange-500 text-white px-4 py-2 text-xl rounded-full shadow-xl">
              <IoDocument className="text-white" />
              <PDFDownloadLink
                document={
                  <QuoteDocument
                    quoteDetails={quoteDetails}
                    quoteSummary={summaryText}
                  />
                }
                fileName="quote.pdf"
              >
                {({ blob, url, loading, error }) =>
                  loading ? "Preparing document.." : "Export to PDF"
                }
              </PDFDownloadLink>
            </Button>

            <Button className="bg-orange-500 text-white px-4 py-2 text-xl rounded-full shadow-xl">
              <IoMdMail className="text-white" />
              Email Quote
            </Button>
          </motion.div>
        </div>
      ),
    },
    {
      title: "Technical",
      value: "technical",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-stone-700 to-stone-900">
          <p className="text-xl md:text-4xl font-bold">Technical Quote</p>
          <div className="my-5 flex flex-col *:inline-flex">
            <div>
              <p className=" text-white/80 mr-2">App type:</p>
              <p className="font-bold capitalize"> {quoteDetails.app_type}</p>
            </div>
            <div>
              <p className=" text-white/80 mr-2">Number of pages/screens:</p>
              <p className="font-bold capitalize"> {quoteDetails.app_type}</p>
            </div>
            <div>
              <p className=" text-white/80 mr-2">Design Complexity:</p>
              <p className="font-bold capitalize"> {quoteDetails.complexity}</p>
            </div>
            <div>
              <p className=" text-white/80 mr-2">Features Required:</p>
              <p className="font-bold ">
                {quoteDetails.features_required.map(String).join(", ")}
              </p>
            </div>
          </div>
          <p className="text-white/80">Description:</p>
          <p>{technicalText}</p>
          <div className="my-5 inline-flex">
            <div className="my-auto">
              <p className="text-white/80 mr-2">Estimated Quote:</p>
            </div>
            <p className="font-bold text-2xl md:text-4xl">
              {" "}
              £{quoteDetails.quote}
            </p>
          </div>
          <motion.div className="flex justify-start mt-auto gap-2">
            <Button className="bg-orange-500 text-white px-4 py-2 text-xl rounded-full shadow-xl">
              <IoDocument className="text-white" />
              <PDFDownloadLink
                document={
                  <QuoteDocument
                    quoteDetails={quoteDetails}
                    quoteSummary={technicalText}
                  />
                }
                fileName="quote.pdf"
              >
                {({ blob, url, loading, error }) =>
                  loading ? "Preparing document.." : "Export to PDF"
                }
              </PDFDownloadLink>
            </Button>
            <Button className="bg-orange-500 text-white px-4 py-2 text-xl rounded-full shadow-xl">
              <IoMdMail className="text-white" />
              Email Quote
            </Button>
          </motion.div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mb-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

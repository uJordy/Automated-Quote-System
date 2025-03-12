import { DropdownMenuDemo } from "@/components/DropdownMenuDemo";
import MyForm from "@/components/quote-form";
import { RadioGroup } from "@/components/radio-group";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="h-96 w-full relative">
      <Image className=" z-10 h-full w-full object-cover" src="/pexels-walidphotoz-1509582.jpg" alt="Bird's eye view of desert" fill={true}/>
      </div>
      <main className="m-10 flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <p className="text-5xl font-bold">Quote System</p>
        <p>Submit your details below</p>
        <DropdownMenuDemo />
        <RadioGroup />
        {/* <QuoteForm /> */}
        {/* <ProfileForm/> */}
        {/* <InputForm /> */}
        <MyForm />
        </main>
    </div>
  );
}

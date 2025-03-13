"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multi-select";
import { estimatePrice } from "@/app/actions";

const formSchema = z.object({
  app_type: z.string(),
  page_num: z
    .coerce.number({
      required_error: "Number of Pages/Screens required",
      invalid_type_error: "Pages/Screen must be a number and greater than 0",
    })
    .gt(1),
  features_required: z.array(z.string()).nonempty("Please at least one item"),
  design_complexities: z.string(),
});

export default function MyForm({generateQuote, id, classNameProp}) {

  const app_types = [
    {
      label: "Website",
      value: "website",
    },
    {
      label: "Mobile App",
      value: "mobile",
    },
  ];

  const design_complexities = [
    {
      label: "Basic",
      value: "basic",
    },
    {
      label: "Standard",
      value: "standard",
    },
    {
      label: "Custom",
      value: "custom", 
    },
  ];


  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      page_num: [0],
      features_required: ["E-commerce"],
    },
  });

  function onSubmit(values) {
    try {
      console.log("Form submitted", values);
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  const onFormSubmit = (form) => {
    "use client";
    generateQuote(form); 
    // let res = await estimatePrice(form);
    console.log("on Form Submit")
  }
    

  return (
    <Form {...form}>
      <form
        id={id}
        onSubmit={form.handleSubmit((data) => onFormSubmit(data))}
        className={cn("space-y-8 max-w-3xl mx-auto py-10 border-(--border) border-1 grow rounded-lg", classNameProp)}
      >
        <h2 className="text-2xl font-semibold">Quote Form</h2>
        <FormField
          control={form.control}
          name="app_type"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Type of App</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? app_types.find((type) => type.value === field.value)
                            ?.label
                        : "Select type"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandList>
                      <CommandGroup>
                        {app_types.map((type) => (
                          <CommandItem
                            value={type.label}
                            key={type.value}
                            onSelect={() => {
                              form.setValue("app_type", type.value);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                type.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {type.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <FormField
              control={form.control}
              name="page_num"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Pages/Screens</FormLabel>
                  <FormControl>
                    <Input placeholder="Number" type="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="features_required"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select features required</FormLabel>
              <FormControl>
                <MultiSelector
                  values={field.value}
                  onValuesChange={field.onChange}
                  loop
                  className="max-w-xs"
                >
                  <MultiSelectorTrigger>
                    <MultiSelectorInput placeholder="Select features required" />
                  </MultiSelectorTrigger>
                  <MultiSelectorContent>
                    <MultiSelectorList>
                      <MultiSelectorItem value={"E-commerce"}>
                        E-commerce
                      </MultiSelectorItem>
                      <MultiSelectorItem value={"Blog"}>Blog</MultiSelectorItem>
                      <MultiSelectorItem value={"Booking System"}>
                        Booking System
                      </MultiSelectorItem>
                      <MultiSelectorItem value={"Portfolio"}>
                        Portfolio
                      </MultiSelectorItem>
                      <MultiSelectorItem value={"Forum"}>
                        Forum
                      </MultiSelectorItem>
                      <MultiSelectorItem value={"Social Media"}>
                        Social Media
                      </MultiSelectorItem>
                      <MultiSelectorItem value={"Other"}>
                        Other
                      </MultiSelectorItem>
                    </MultiSelectorList>
                  </MultiSelectorContent>
                </MultiSelector>
              </FormControl>
              <FormDescription>Select every feature required for your website</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="design_complexities"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Design Complexity</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? design_complexities.find(
                            (complexity) => complexity.value === field.value
                          )?.label
                        : "Select Complexity"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandList>
                      <CommandGroup>
                        {design_complexities.map((complexity) => (
                          <CommandItem
                            value={complexity.label}
                            key={complexity.value}
                            onSelect={() => {
                              form.setValue("design_complexities", complexity.value);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                complexity.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {complexity.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                Select the complexity of the design you require
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Calculate Quote</Button>
      </form>
    </Form>
  );
}

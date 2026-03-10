"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleHelp, Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: "item-1",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "item-2",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "item-3",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "item-4",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "item-5",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "item-6",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "item-7",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "item-8",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "item-9",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "item-10",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function FAQIcon({ open }: { open: boolean }) {
  return (
    <span className="ml-3 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0D86E8] text-white">
      {open ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
    </span>
  );
}

export default function FaqSection() {
  return (
    <section className="w-full bg-[#424242] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className=" text-center">
          <h2 className="text-[28px] font-bold leading-tight text-[#FFFFFF] sm:text-[40px]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/70 sm:text-[15px]">
            Get answers to common questions about our vehicle inspection
            services and process.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-8 sm:mt-10">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="space-y-2.5 sm:space-y-3"
          >
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="overflow-hidden rounded-none border border-[#0D86E8] bg-white"
              >
                <AccordionTrigger className="group flex w-full items-center justify-between px-3 py-3 text-left text-[14px] font-normal text-[#222222] hover:no-underline sm:px-4 sm:text-[15px] [&_[data-slot=accordion-trigger-icon]]:hidden">
                  <div className="flex min-w-0 items-center gap-2.5 pr-3">
                    <CircleHelp className="h-4 w-4 shrink-0 fill-[#F4A23A] text-[#F4A23A]" />
                    <span className="truncate sm:whitespace-normal text-[#0F0F0F] text-xl font-medium">
                      {faq.question}
                    </span>
                  </div>

                  <div className="shrink-0 group-data-[state=open]:hidden">
                    <FAQIcon open={false} />
                  </div>
                  <div className="hidden shrink-0 group-data-[state=open]:block">
                    <FAQIcon open />
                  </div>
                </AccordionTrigger>

                <AccordionContent className="border-t border-[#0D86E8] px-4 pb-4 pt-3 text-[13px] leading-6 text-[#0F0F0F] sm:px-4 sm:text-[16px]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

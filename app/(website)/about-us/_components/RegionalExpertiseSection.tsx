"use client";

import { MapPin, Shield, BadgeDollarSign } from "lucide-react";

const expertiseItems = [
  {
    id: 1,
    title: "Climate Impact Knowledge",
    description:
      "We understand how different climates affect vehicles - from Minnesota winters to southern heat and humidity impacts.",
    icon: Shield,
  },
  {
    id: 2,
    title: "Regional Vehicle Knowledge",
    description:
      "From rural farm trucks to urban commuter cars, we understand the diverse vehicle usage patterns across different regions.",
    icon: MapPin,
  },
  {
    id: 3,
    title: "Local Market Insight",
    description:
      "We understand regional vehicle values and can provide context for repair costs and market conditions in your area.",
    icon: BadgeDollarSign,
  },
];

export default function RegionalExpertiseSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[30px] font-semibold leading-tight text-[#131313] sm:text-[38px] lg:text-[40px]">
          Why Regional Expertise Matters
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {expertiseItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="rounded-[16px] border border-[#B6B6B6] bg-[#f7f7f7] px-5 py-5 text-center shadow-[0_4px_14px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FEEBBB]">
                  <Icon className="h-6 w-6 text-[#000000]" strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-[22px] font-semibold leading-snug text-[#131313] sm:text-[24px]">
                  {item.title}
                </h3>

                <p className="mx-auto mt-3  text-[14px] leading-6 text-[#131313] sm:text-[15px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

import { PhoneCall } from "lucide-react";

const serviceCards = [
  {
    title: "Minnesota & Surrounding States",
    items: [
      "All Minnesota counties",
      "Twin Cities metro area",
      "Greater Minnesota cities",
      "Wisconsin border areas",
      "Iowa border areas",
      "North Dakota border areas",
      "South Dakota border areas",
      "Rural and remote locations",
    ],
  },
  {
    title: "Major US Metro Cities",
    items: [
      "Atlanta, GA",
      "Houston, TX",
      "New York City, NY",
      "Jersey City, NJ",
      "Chicago, IL",
      "Detroit, MI",
      "Milwaukee, WI",
      "And many more metro areas",
    ],
  },
  {
    title: "Service Locations",
    items: [
      "Dealership locations",
      "Private seller locations",
      "Auction facilities",
      "Customer homes/driveways",
      "Commercial lots",
      "Public meeting places",
      "Workplace parking lots",
      "Any safe, accessible location",
    ],
  },
];

export default function ServiceAreasSection() {
  return (
    <section className="w-full bg-[#FFF9E9] py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-center text-[30px] font-bold leading-tight text-[#131313] sm:text-[38px] lg:text-[40px]">
            Service Areas
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3 lg:mt-10">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[14px] border border-[#B6B6B6] bg-[#FFFFFF] px-5 py-5 shadow-[0_4px_14px_rgba(0,0,0,0.05)] sm:px-6 sm:py-6"
              >
                <h3 className="text-[18px] font-semibold leading-tight text-[#131313] sm:text-[20px]">
                  {card.title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[16px] leading-6 text-[#131313]"
                    >
                      <span className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#131313]" />
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-[860px] text-center lg:mt-12">
            <h3 className="text-[24px] font-semibold leading-tight text-[#131313] sm:text-[24px]">
              Don&apos;t see your city listed? We&apos;re expanding our coverage
              area regularly!
            </h3>

            <p className="mx-auto mt-4 max-w-[620px] text-[14px] leading-7 text-[#424242] sm:text-[16px]">
              Don&apos;t buy a vehicle without knowing its true condition. Our
              professional inspections give you the confidence to make the right
              decision.
            </p>

            <div className="mt-6">
              <button
                type="button"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FBBF24] px-6 text-[14px] font-semibold text-[#1E3A8A] transition hover:opacity-90 sm:h-[52px] sm:px-8 sm:text-[18px]"
              >
                <PhoneCall className="h-4 w-4 shrink-0" />
                Contact with Us to check availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
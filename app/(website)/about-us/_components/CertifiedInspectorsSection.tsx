"use client";

import Image from "next/image";

const topCards = [
  {
    title: "Certified Technicians",
    description:
      "All our inspectors hold current certifications and undergo continuous training on the latest automotive technologies.",
    image:
      "/s1.png",
  },
  {
    title: "Decades of Experience",
    description:
      "Our team has over 50 years of combined automotive experience, specializing in pre-purchase inspections.",
    image:
      "/s2.png",
  },
];

const promiseCards = [
  {
    title: "Unbiased Inspections",
    description:
      "We have no financial interest in your purchase decision. Our only goal is providing you with accurate, honest information.",
    image:
      "/s1.png",
  },
  {
    title: "Clear Communication",
    description:
      "We explain our findings in plain language and are available to answer questions about your inspection report.",
    image:
      "/s2.png",
  },
  {
    title: "Thorough Documentation",
    description:
      "Every inspection includes detailed photos and comprehensive reports you can reference during negotiations.",
    image:
      "/s1.png",
  },
  {
    title: "Reliable Service",
    description:
      "We arrive on time, complete inspections efficiently, and deliver reports when promised.",
    image:
    "/s2.png",
  },
];

export default function CertifiedInspectorsSection() {
  return (
    <section className="w-full bg-[#FFF9E9] py-14 sm:py-16 lg:py-24">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        {/* Top heading */}
        <div className="mx-auto  text-center">
          <h2 className="text-[30px] font-bold leading-tight text-[#131313] sm:text-[38px] lg:text-[40px]">
            Meet Our Certified Inspectors
          </h2>
          <p className="mx-auto mt-4  w-[699px] text-[14px] leading-7 text-[#424242] sm:text-[18px]">
            Our team of ASE-certified technicians brings decades of combined
            experience to every inspection.
          </p>
        </div>

        {/* Top cards */}
        <div className="mx-auto mt-10 grid max-w-[1018px] gap-5 md:grid-cols-2 lg:mt-12">
          {topCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[14px] border border-[#cfc9b8] bg-[#FFFFFF] px-6 py-8 text-center shadow-[0_4px_14px_rgba(0,0,0,0.06)]"
            >
              <div className="mx-auto relative h-[90px] w-[150px] sm:h-[100px] sm:w-[148px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={1000}
                  height={1000}
                  className="rounded-[4px] object-cover"
                />
              </div>

              <h3 className="mt-12 text-[24px] font-semibold leading-snug text-[#131313]">
                {card.title}
              </h3>

              <p className="mx-auto mt-3  text-[16px] leading-6 text-[#131313]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Promise heading */}
        <div className="mx-auto mt-16 container text-center sm:mt-20 lg:mt-24">
          <h2 className="text-[30px] font-semibold leading-tight text-[#131313] sm:text-[38px] lg:text-[40px]">
            Our Promise to You
          </h2>
          <p className="mx-auto mt-4 max-w-[699px] text-[14px] leading-7 text-[#424242] sm:text-[18px]">
            We stand by our commitment to quality, focus on your needs with
            integrity, and strive to exceed your expectations.
          </p>
        </div>

        {/* Bottom cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 lg:mt-12">
          {promiseCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[14px] border border-[#cfc9b8] bg-transparent px-5 py-5"
            >
              <div className="flex items-start gap-4">
                <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full bg-[#E7E7E7]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-[20px] font-medium leading-snug text-[#131313]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-[#424242]">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
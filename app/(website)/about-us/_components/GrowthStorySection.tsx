"use client";

import Image from "next/image";

export default function GrowthStorySection() {
  return (
    <section className="w-full bg-[#FFF9E9] py-12 sm:py-14 md:py-16 lg:py-24">
      <div className="container mx-auto grid items-center gap-10 px-4 sm:px-6 md:gap-12 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left Image Layout */}
        <div className="relative mx-auto w-full max-w-[677px]">
          <div className="relative h-[260px] w-full overflow-hidden rounded-[14px] sm:h-[360px] md:h-[460px] lg:h-[577px]">
            <Image
              src="/groth.png"
              alt="Professional team standing together"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full">
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#131313] sm:text-[34px] md:text-[38px] lg:text-[40px]">
            Our Growth Story
          </h2>

          <p className="mt-4 text-[14px] leading-[1.7] text-[#424242] sm:mt-5 sm:text-[16px] md:text-[17px] lg:text-[18px] lg:leading-[150%]">
            Founded by automotive professionals who understood the need for
            reliable, independent vehicle inspections, we’ve grown from a small
            Minnesota-based service to a nationwide network serving major US
            metro cities. We know regional road conditions, weather impacts, and
            local vehicle challenges. From Minnesota’s salt damage and winter
            driving to the unique challenges of urban vehicle ownership across
            the country, our inspectors understand what to look for in each
            market we serve.
          </p>

          <p className="mt-4 text-[14px] leading-[1.7] text-[#424242] sm:mt-5 sm:text-[16px] md:text-[17px] lg:text-[18px] lg:leading-[150%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </section>
  );
}
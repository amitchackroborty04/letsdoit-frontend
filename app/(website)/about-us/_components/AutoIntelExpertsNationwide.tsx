"use client";

import { Shield } from "lucide-react";
import Image from "next/image";

export default function AutoIntelExpertsNationwide() {
  return (
    <section className="w-full bg-[#f3f3f3] py-12 sm:py-14 md:py-16 lg:py-24">
      <div className="container mx-auto grid items-center gap-10 px-4 sm:px-6 md:gap-12 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left Content */}
        <div className="max-w-[560px]">
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#131313] sm:text-[34px] md:text-[38px] lg:text-[40px]">
            AutoIntel Experts Nationwide
          </h2>

          <p className="mt-4 max-w-full text-[14px] leading-6 text-[#424242] sm:text-[15px] sm:leading-7 md:text-[16px]">
            With over a decade of experience and a growing network of certified
            inspectors across major US cities, we’ve built our reputation on
            thorough, honest, and reliable vehicle inspections. Our expertise
            spans from Minnesota to major metro areas nationwide.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">
            <StatCard value="1000+" label="Inspections Completed" />
            <StatCard value="10+" label="Years Experience" />
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-[677px] lg:ml-auto">
          <div className="relative h-[260px] w-full overflow-hidden rounded-[18px] sm:h-[360px] md:h-[440px] lg:h-[577px]">
            <Image
              src="/about.png"
              alt="Auto inspection team working"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-[14px] border border-[#dddddd] bg-white px-4 py-4 shadow-[0_4px_14px_rgba(0,0,0,0.05)] sm:px-5 sm:py-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FEEBBB] sm:h-14 sm:w-14">
        <Shield className="h-5 w-5 text-[#FBBF24] sm:h-6 sm:w-6" strokeWidth={1.8} />
      </div>

      <div>
        <h3 className="text-[22px] font-semibold leading-none text-[#222222] sm:text-[26px] lg:text-[28px]">
          {value}
        </h3>
        <p className="mt-1 text-[12px] leading-5 text-[#666666] sm:mt-2 sm:text-[14px]">
          {label}
        </p>
      </div>
    </div>
  );
}
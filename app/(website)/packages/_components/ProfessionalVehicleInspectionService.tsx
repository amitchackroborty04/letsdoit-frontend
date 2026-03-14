"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function ProfessionalVehicleInspectionService() {
  return (
    <section className="w-full bg-[#f5f1e4] py-12 sm:py-14 md:py-16 lg:py-24">
      <div className="container mx-auto grid items-center gap-10 px-4 sm:px-6 md:gap-12 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left Content */}
        <div className="w-full">
          <h2 className="text-[30px]  max-w-[620px] font-bold leading-[1.12] tracking-[-0.02em] text-[#131313] sm:text-[38px] md:text-[44px] lg:text-[60px]">
            Professional Vehicle
            <br className="hidden sm:block" />
            Inspection Service
          </h2>

          <p className="mt-4 max-w-[699px] text-[14px] leading-[1.7] text-[#424242] sm:text-[15px] md:text-[16px] lg:text-[18px]">
            Choose from three comprehensive inspection packages designed to fit
            your needs and budget. All inspections are performed by
            ASE-certified technicians in Minnesota and major US metro cities.
          </p>

          <div className="mt-5 flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 h-5 w-5 shrink-0 text-[#1E3A8A]"
              strokeWidth={2.2}
            />
            <p className="text-[13px] font-bold leading-6 text-[#131313] sm:text-[16px]">
              Minnesota + Major US Metro Cities
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-[650px] lg:ml-auto">
          <div className="relative h-[280px] w-full overflow-hidden rounded-[18px] sm:h-[360px] md:h-[460px] lg:h-[560px]">
            <Image
              src="/pakage.png"
              alt="Professional vehicle inspection service"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
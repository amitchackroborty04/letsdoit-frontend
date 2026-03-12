"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

export default function ContactHeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/contacthero.jpg"
          alt="AutoIntel contact hero background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0000007A]" />

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[220px] flex-col items-center justify-center py-10 text-center sm:min-h-[260px] sm:py-12 md:min-h-[300px] lg:min-h-[355px]">
            <h1 className="text-[30px] font-bold leading-tight text-[#FFFFFF] sm:text-[42px] md:text-[52px] lg:text-[60px]">
              Contact AutoIntel
            </h1>

            <p className="mt-4 max-w-[760px] text-[14px] leading-6 text-[#E7E7E7] sm:text-[16px] sm:leading-7 md:text-[18px]">
              Ready to schedule your inspection or have questions about our
              services? We&apos;re here to help you make an informed vehicle
              purchasing decision.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-full  px-4 py-2 shadow-lg sm:px-5 sm:py-2.5">
              <span className="flex h-10 w-10 items-center bg-white rounded-full justify-center ">
                <MapPin className="h-5 w-5 text-[#ff5b2e]" />
              </span>
              <span className="text-[13px] font-bold text-[#FFFFFF] sm:text-[16px]">
                Minnesota + Major US Metro Cities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
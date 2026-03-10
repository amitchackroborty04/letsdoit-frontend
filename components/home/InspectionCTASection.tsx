"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InspectionCTASection() {
  return (
    <section className="w-full bg-[#F3F3F3] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-5">
          {/* Left Images */}
          <div className="relative flex min-h-[250px] items-center justify-center sm:min-h-[320px] lg:min-h-[340px]">
            <div className="relative h-[230px] w-full max-w-[430px] sm:h-[340px] sm:max-w-[520px]">
              <Image
                src="/cta44.png"
                alt="Vehicle Inspection"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-[#131313] sm:text-[38px] md:text-[44px] lg:text-[40px]">
              Ready to Schedule Your Inspection?
            </h2>

            <p className="mx-auto mt-4 max-w-[620px] text-[14px] leading-6 text-[#424242] sm:text-[15px] md:text-[16px] lg:mx-0 text-center">
              Don&apos;t buy a vehicle without knowing its true condition. Our
              professional inspections give you the confidence to make the right
              decision.
            </p>

            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                asChild
                className="h-12 rounded-full bg-[#FBBF24] px-6 text-[16px] font-bold text-[#1E3A8A] shadow-none hover:bg-[#e0aa10] sm:h-[50px] sm:px-7"
              >
                <Link href="/packages">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  View All Packages &amp; Book
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-[#FBBF24] bg-transparent px-6 text-[16px] font-bold text-[#FBBF24] shadow-none hover:bg-[#fff7db] hover:text-[#D89B00] sm:h-[50px] sm:px-7"
              >
                <Link href="/contact-us">
                  <Phone className="mr-2 h-4 w-4 text-[#FBBF24]" />
                  Contact with Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
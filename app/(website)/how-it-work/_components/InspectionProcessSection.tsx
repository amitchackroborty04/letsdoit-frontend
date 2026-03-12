"use client";

import Image from "next/image";

export default function InspectionProcessSection() {
  return (
    <section className="w-full bg-[#FFFFFF]  py-14 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-5">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold leading-tight text-[#131313] sm:text-4xl lg:text-[60px] lg:leading-[1.05]">
              How Our Inspection Process Works
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-[#424242] sm:text-[18px]">
              Getting a professional vehicle inspection is simple and convenient. We handle everything from scheduling to report delivery, making the process stress-free for you.
            </p>
          </div>

          {/* Right Images */}
          <div className="w-full items-center justify-center lg:col-span-5 ">
            <div className="">
              {/* Top image */}
              <div className="h-[240px] w-full  overflow-hidden rounded-2xl  sm:h-[320px] md:h-[580px] lg:h-[500px] lg:max-w-none lg:w-full">
                <Image
                  src="/howitwork.png"
                  alt="Inspector holding tablet"
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover"
                />
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

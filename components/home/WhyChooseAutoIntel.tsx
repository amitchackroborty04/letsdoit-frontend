"use client";

import {
  Award,
  MapPin,
  Clock,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Inspectors",
    description:
      "Certified professionals with years of automotive experiences.",
    color: "bg-[#FFE8B5]",
    iconColor: "text-[#1F7A1F]",
  },
  {
    icon: MapPin,
    title: "We Come to You",
    description:
      "Mobile service in Minnesota and major US metro cities",
    color: "bg-[#F8C5C5]",
    iconColor: "text-[#E53935]",
  },
  {
    icon: Clock,
    title: "Fast Reports",
    description:
      "Digital reports delivered within 24 hours of inspection",
    color: "bg-[#E5E7EB]",
    iconColor: "text-[#2563EB]",
  },
  {
    icon: Star,
    title: "Trusted Service",
    description:
      "Hundreds of satisfied customers across Minnesota",
    color: "bg-[#D6F5D6]",
    iconColor: "text-[#1F7A1F]",
  },
];

export default function WhyChooseAutoIntel() {
  return (
    <section className="w-full bg-[#424242] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="text-[26px] font-bold text-[#FFFFFF] sm:text-[32px] lg:text-[40px]">
            Why Choose AutoIntel?
          </h2>

          <p className="mt-3 text-[14px] text-[#E7E7E7] sm:text-[16px]">
            We bring professional expertise directly to you, providing thorough
            inspections that help you make confident vehicle purchasing decisions.
          </p>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div
                  className={`flex h-[70px] w-[70px] items-center justify-center rounded-full ${feature.color}`}
                >
                  <Icon className={`h-7 w-7 ${feature.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-[24px] font-semibold text-[#FFFFFF]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-2 max-w-[230px] text-[14px] leading-relaxed text-[#E7E7E7]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const packages = [
  {
    id: 1,
    title: "Basic Inspection!",
    subtitle: "Essential vehicle check",
    price: "$175",
    features: [
      "Visual exterior inspection",
      "Interior condition check",
      "Road test included",
      "Basic engine inspection",
      "Tire condition assessment",
      "Basic written report",
      "Same-day delivery",
    ],
    featured: false,
    badge: "",
  },
  {
    id: 2,
    title: "Plus Inspection!",
    subtitle: "Enhanced vehicle evaluation",
    price: "$180",
    features: [
      "Everything in Basic package",
      "Detailed engine inspection",
      "Road test included",
      "Brake system check",
      "Suspension inspection",
      "Electrical systems test",
      "Photo documentation",
      "Detailed written report",
    ],
    featured: true,
    badge: "",
  },
  {
    id: 3,
    title: "Complete Inspection!",
    subtitle: "Comprehensive professional analysis",
    price: "$189",
    features: [
      "Everything in Plus package",
      "OBD-II diagnostic scan",
      "Road test included",
      "Comprehensive photo gallery",
      "NADA market value report",
      "Priority scheduling",
    ],
    featured: false,
    badge: "Most Popular",
  },
];

export default function InspectionPackagesSection() {
  return (
    <section className="w-full bg-[#F3F3F3] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Content */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold leading-tight text-[#131313] sm:text-3xl md:text-4xl">
            AutoIntel Inspection Packages Comprehensive 270-point evaluation
            and road test
          </h2>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-3xl font-extrabold text-[#006600] sm:text-5xl">
            <span>•</span>
            <span>$175</span>
            <span>•</span>
            <span>$180</span>
            <span>•</span>
            <span>$189</span>
          </div>

          <h3 className="mt-3 text-2xl font-bold text-[#006600] sm:text-3xl md:text-4xl">
            🚗 Choose Your Inspection Level 🚗
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#131313] sm:text-base">
            Inspection packages include a{" "}
            <span className="text-[#F30000]">
              comprehensive 270-point evaluation and road test
            </span>
            , provided the vehicle is roadworthy and the seller or dealer
            authorizes a test drive.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div key={pkg.id} className="relative">
              {pkg.badge && (
                <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 rounded bg-[#FBBF24] px-3 py-1 text-sm font-bold text-[#131313] shadow">
                  {pkg.badge}
                </div>
              )}

              <div
                className={`overflow-hidden rounded-xl border bg-white shadow-sm transition-all ${
                  pkg.featured
                    ? "border-[#3A57B6] shadow-lg"
                    : "border-[#6F8DFF]"
                }`}
              >
                {/* Header */}
                <div
                  className={`border-b px-4 py-4 text-center ${
                    pkg.featured
                      ? "bg-[#3258DA] border-[#3258DA]"
                      : "bg-[#FFF9E9] border-[#6F8DFF]"
                  }`}
                >
                  <h4
                    className={`text-xl font-semibold ${
                      pkg.featured ? "text-white" : "text-[#3258DA]"
                    }`}
                  >
                    {pkg.title}
                  </h4>
                </div>

                {/* Body */}
                <div className="px-5 pb-6 pt-5">
                  <div className="text-center">
                    <span className="inline-block rounded bg-[#FFF9E9] px-3 py-1 text-sm font-medium text-[#1E3A8A]">
                      {pkg.subtitle}
                    </span>

                    <div className="mt-4 text-4xl font-extrabold text-[#222222]">
                      {pkg.price}
                    </div>

                    <div className="mx-auto mt-4 w-fit bg-[#EEF1FF] px-5 py-1.5 text-sm font-bold uppercase tracking-wide text-[#4338CA]">
                      This Plan Includes
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-[#131313]"
                      >
                        <span className="mt-[2px] flex h-4 w-4 shrink-0 items-center justify-center rounded bg-[#11801A] text-white">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="mt-7 h-12 w-full rounded-md bg-[#F4BC17] text-sm font-bold text-[#222222] hover:bg-[#e2ac10]">
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
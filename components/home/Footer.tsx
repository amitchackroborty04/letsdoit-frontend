"use client";

import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";

const usefulLinks = [
  { label: "Services Area", href: "/services-area" },
  { label: "About Us", href: "/about-us" },
  { label: "Pricing Plan", href: "/pricing-plan" },
  { label: "Sample Report", href: "/sample-report" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Dealship Portal", href: "/dealship-portal" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#4A4A4A] text-white">
      <div className="mx-auto container px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.1fr_1fr] lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[3px] bg-[#F4BC17]">
                <span className="text-[18px] font-bold leading-none text-[#111111]">
                  AI
                </span>
              </div>

              <div className="leading-tight">
                <h3 className="text-[16px] font-semibold uppercase text-white">
                  AUTO INTEL
                </h3>
                <p className="text-[11px] text-[#CFCFCF]">
                  Pre-Purchase Inspection Experts
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-[320px] text-[14px] leading-7 text-[#D7D7D7]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p>

            <p className="mt-3 text-[14px] text-[#E5E5E5]">
              <span className="font-medium">Email:</span> info@example.com
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-[20px] font-semibold text-[#FFFFFF]">Useful Links</h4>

            <ul className="mt-5 space-y-3">
              {usefulLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-[#D8D8D8] transition hover:text-[#F4BC17]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h4 className="text-[20px] font-semibold text-[#FFFFFF]">Other Links</h4>

            <div className="mt-5">
              <div className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 text-[#F4BC17]" />
                <div>
                  <p className="text-[16px] font-medium text-white">
                    Minnesota Statewide
                  </p>
                  <p className="mt-1 text-[13px] text-[#BFBFBF]">
                    All counties and cities
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-[290px] text-[12px] leading-5 text-[#D0D0D0]">
                * Serving all of Minnesota and major US metro cities like
                Atlanta, Houston, NYC, Jersey City. If your city is not listed,
                you&apos;re not sure, please reach out first before you book.
              </p>
            </div>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-[20px] font-semibold text-[#FFFFFF]">Service Area</h4>

            <div className="mt-5 space-y-5">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-red-500" />
                <div>
                  <p className="text-[16px] font-medium text-white">
                    Minnesota Statewide
                  </p>
                  <p className="mt-1 text-[13px] text-[#BFBFBF]">
                    All counties and cities
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-red-500" />
                <div>
                  <p className="text-[16px] font-medium text-white">
                    Major US Metro Cities
                  </p>
                  <p className="mt-1 text-[13px] text-[#BFBFBF]">
                    Atlanta, Houston, NYC, Jersey City
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 text-green-500" />
                <div>
                  <p className="text-[16px] font-medium text-white">
                    Mobile Service
                  </p>
                  <p className="mt-1 text-[13px] text-[#BFBFBF]">
                    We come to you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/15 pt-5 text-center">
          <p className="text-[12px] text-[#D0D0D0]">
            @ 2025AutoIntel. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
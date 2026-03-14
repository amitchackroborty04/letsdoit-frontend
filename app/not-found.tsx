"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#f5f1e4] px-4">
      <div className="max-w-[620px] text-center">
        <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#1E3A8A]">
          404 Error
        </p>

        <h1 className="mt-3 text-[34px] font-bold leading-[1.08] tracking-[-0.02em] text-[#131313] sm:text-[44px] md:text-[52px] lg:text-[64px]">
          Page Not Found
        </h1>

        <p className="mt-5 text-[14px] leading-[1.8] text-[#424242] sm:text-[16px] lg:text-[18px]">
          The page you are looking for may have been moved, deleted, or the
          link may be incorrect. Let&apos;s get you back to a page that helps
          you book or learn more about our inspection service.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#F4B91F] px-6 text-[15px] font-semibold text-[#1E3A8A] transition hover:opacity-90 sm:h-[52px] sm:px-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
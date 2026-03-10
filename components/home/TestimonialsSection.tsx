"use client";

import Image from "next/image";
import { Star } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  date: string;
  image: string;
  review: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maya Russo",
    date: "February 13, 2025",
    image: "/profile.png",
    review:
      "They didn’t just design a beautiful space—they really understood what I wanted and brought it to life. I love coming home now. I wanted something modern but cozy.",
    rating: 5,
  },
  {
    id: 2,
    name: "Maya Russo",
    date: "February 13, 2025",
    image: "/profile.png",
    review:
      "Professional, responsive, and detailed from start to finish. The process felt smooth and the final result exceeded expectations in every way.",
    rating: 5,
  },
  {
    id: 3,
    name: "Maya Russo",
    date: "February 13, 2025",
    image: "/profile.png",
    review:
      "Everything was handled with care and clarity. I appreciated how easy they made the entire experience while still delivering high quality work.",
    rating: 5,
  },
  {
    id: 4,
    name: "Maya Russo",
    date: "February 13, 2025",
    image: "/profile.png",
    review:
      "The team was friendly and efficient. Communication was excellent and the final report was exactly what I needed to move forward confidently.",
    rating: 5,
  },
  {
    id: 5,
    name: "Maya Russo",
    date: "February 13, 2025",
    image: "/profile.png",
    review:
      "I was impressed with the speed, detail, and professionalism. The entire service felt premium and reliable from booking to delivery.",
    rating: 5,
  },
  {
    id: 6,
    name: "Maya Russo",
    date: "February 13, 2025",
    image: "/profile.png",
    review:
      "Highly recommended. They explained everything clearly and helped me feel much more confident in my decision.",
    rating: 5,
  },
];

const stats = [
  { value: "1000+", label: "Happy Customers" },
  { value: "4.9★", label: "Average Rating" },
  { value: "98%", label: "Would Recommend" },
  { value: "24hr", label: "Report Delivery" },
];

function RatingStars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5 fill-[#F4C21A] text-[#F4C21A]"
        />
      ))}
      <span className="ml-1 text-[13px] text-[#333333]">(5)</span>
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="w-[320px] sm:w-[360px] md:w-[420px] shrink-0 rounded-[10px] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
      <div className="flex items-start gap-4">
        <div className="relative h-[68px] w-[68px] shrink-0 overflow-hidden rounded-full bg-[#D9D9D9]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="68px"
            quality={100}
          />
        </div>

        <div className="min-w-0 flex-1">
          <RatingStars count={item.rating} />

          <p className="mt-1 text-[13px] text-[#6B6B6B]">{item.date}</p>

          <h3 className="mt-2 text-[24px] font-medium leading-none text-[#111111]">
            {item.name}
          </h3>

          <p className="mt-3 line-clamp-4 text-[14px] leading-6 text-[#4C4C4C]">
            “{item.review}”
            <span className="ml-1 text-[#E3BE3D]">Read More</span>
          </p>
        </div>
      </div>
    </article>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration = "40s",
}: {
  items: Testimonial[];
  reverse?: boolean;
  duration?: string;
}) {
  const duplicated = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex w-max gap-4 sm:gap-5 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDuration: duration }}
      >
        {duplicated.map((item, index) => (
          <TestimonialCard key={`${item.id}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="w-full overflow-hidden bg-[#F4F4F4] py-12 sm:py-16 lg:py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="text-[30px] font-bold leading-tight text-[#131313] sm:text-[38px] lg:text-[40px]">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-3 max-w-[620px] text-[14px] leading-6 text-[#131313] sm:text-[16px]">
            Don&apos;t just take our word for it. Here&apos;s what real customers
            have to say about their AutoIntel inspection experience.
          </p>
        </div>

        {/* Marquee rows */}
        <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-7">
          <MarqueeRow items={testimonials.slice(0, 5)} duration="38s" />
          <MarqueeRow
            items={testimonials.slice(1, 6)}
            reverse
            duration="42s"
          />
        </div>

        {/* Stats */}
        <div className="mx-auto mt-10 max-w-[1150px] rounded-[8px] bg-[#424242] px-4 py-5 shadow-[0_10px_24px_rgba(0,0,0,0.16)] sm:mt-14 sm:px-6 sm:py-6">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <h3 className="text-[26px] font-semibold leading-none text-white sm:text-[34px]">
                  {stat.value === "4.9★" ? (
                    <>
                      4.9<span className="text-[#F4C21A]">★</span>
                    </>
                  ) : (
                    stat.value
                  )}
                </h3>
                <p className="mt-2 text-[12px] text-white/80 sm:text-[14px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import {
  ClipboardList,
  MapPin,
  ShieldCheck,
  FileText,
  CheckCircle2,
} from "lucide-react";

const leftSteps = [
  {
    id: 1,
    icon: ClipboardList,
    iconClass: "text-[#E8A21A]",
    title: "Easy Online Booking",
    description:
      "Start by booking your comprehensive all-inclusive inspection on our services page. Our secure checkout process guides you through scheduling and payment.",
    points: [
      "Book your $189 all-inclusive inspection",
      "Provide vehicle and location details",
      "Select preferred appointment time",
      "Secure online payment",
    ],
  },
  {
    id: 3,
    icon: ShieldCheck,
    iconClass: "text-[#4D74FF]",
    title: "Professional Inspection",
    description:
      "Our ASE-certified inspector performs a systematic evaluation of all vehicle systems using professional diagnostic equipment and proven inspection protocols.",
    points: [
      "Systematic multi-point inspection",
      "Professional diagnostic tools",
      "Photo documentation",
      "Road test included",
    ],
  },
];

const rightSteps = [
  {
    id: 2,
    icon: MapPin,
    iconClass: "text-[#E44B4B]",
    title: "Mobile Service",
    description:
      "Our certified inspector travels to the vehicle’s location with all necessary equipment. We coordinate with both you and the seller to ensure a smooth process.",
    points: [
      "Confirmation call 24 hours before",
      "Arrival notification",
      "Professional equipment setup",
      "Coordination with seller",
    ],
  },
  {
    id: 4,
    icon: FileText,
    iconClass: "text-[#B34BFF]",
    title: "Detailed Report Delivery",
    description:
      "Within 24 hours of your inspection, you’ll receive a comprehensive digital report with all findings, photos, and recommendations delivered to your email.",
    points: [
      "Email delivery within 24 hours",
      "PDF format for easy sharing",
      "Follow-up consultation available",
      "Lifetime access to your report",
    ],
  },
];

const sideCards = [
  {
    title: "What You'll Need:",
    items: [
      "Vehicle year, make, model, and VIN",
      "Vehicle location address",
      "Your contact information",
      "Preferred appointment time",
      "Seller contact information",
    ],
  },
  {
    title: "Service Coverage:",
    items: [
      "All Minnesota counties",
      "Rural and remote locations",
      "Dealerships and private sellers",
      "No additional travel fees",
      "Seller contact information",
    ],
  },
  {
    title: "What’s Included:",
    items: [
      "Systematic multi-point inspection",
      "Professional diagnostic tools",
      "Photo documentation",
      "Road test included",
      "NADA market value report",
    ],
  },
  {
    title: "Report Features:",
    items: [
      "Detailed findings for each system",
      "High-resolution photos",
      "Priority recommendations",
      "Estimated repair costs included",
      "Market value assessment included",
    ],
  },
];

function InfoCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-[12px] bg-[#FFE59F] px-5 py-5 sm:px-6">
      <h3 className="text-[24px] font-semibold leading-none text-[#131313]">
        {title}
      </h3>

      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="text-[13px] leading-[1.5] text-[#131313] sm:text-[16px]"
          >
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function StepBlock({
  id,
  title,
  description,
  points,
  icon: Icon,
  iconClass,
}: {
  id: number;
  title: string;
  description: string;
  points: string[];
  icon: React.ElementType;
  iconClass: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Icon className={`h-4 w-4 ${iconClass}`} strokeWidth={2.2} />
        <h3 className="text-[24px] font-semibold leading-tight text-[#131313]">
          {id}. {title}
        </h3>
      </div>

      <p className="mt-4 max-w-[430px] text-[13px] leading-[1.6] text-[#131313] sm:text-[16px]">
        {description}
      </p>

      <ul className="mt-4 space-y-3">
        {points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2 text-[13px] leading-[1.5] text-[#131313] sm:text-[16px]"
          >
            <CheckCircle2 className="mt-[1px] h-4 w-4 shrink-0 text-[#131313]" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DetailedProcessBreakdown() {
  return (
    <section className="w-full bg-[#FFFFFF] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[30px] font-semibold leading-tight text-[##131313] sm:text-[38px] lg:text-[40px]">
          Detailed Process Breakdown
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          {/* Left Column */}
          <div className="space-y-6">
            <StepBlock {...leftSteps[0]} />
            <InfoCard {...sideCards[1]} />
            <StepBlock {...leftSteps[1]} />
            <InfoCard {...sideCards[3]} />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <InfoCard {...sideCards[0]} />
            <StepBlock {...rightSteps[0]} />
            <InfoCard {...sideCards[2]} />
            <StepBlock {...rightSteps[1]} />
          </div>
        </div>
      </div>
    </section>
  );
}
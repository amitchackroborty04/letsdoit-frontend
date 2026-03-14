"use client";

export default function ServiceCoverageSection() {
  return (
    <section className="w-full bg-[#FFFFFF]">
      {/* Top Content */}
      <div className="container mx-auto px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-10">
          {/* Left */}
          <div className="max-w-[699px]">
            <h2 className="text-[28px] font-bold leading-tight text-[#131313] sm:text-[34px] lg:text-[40px]">
              Our Service Coverage
            </h2>

            <p className="mt-4 text-[14px] leading-[1.7] text-[#424242] sm:text-[15px] lg:text-[16px]">
              We are based out of Minnesota but have inspectors in most US
              metro cities like Atlanta, Houston, NYC, Jersey City. If your
              city is not listed and you&apos;re not sure, please reach out
              first before you book. We cover all of Minnesota and surrounding
              states.
            </p>
          </div>

          {/* Right Notice */}
          <div className="w-full rounded-[6px] bg-[#E6F0E6] px-4 py-4 sm:px-5">
            <p className="text-[13px] leading-[1.6] text-[#424242] sm:text-[14px]">
              <span className="font-semibold text-[#3d493d]">Important:</span>{" "}
              If your city is not listed below and you&apos;re not sure about
              coverage, please contact us first before booking to confirm
              availability in your area.
            </p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="relative h-[240px] w-full sm:h-[320px] md:h-[420px] lg:h-[520px]">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22607752.31235641!2d-120.54478953939501!3d36.826081839074575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1773459858048!5m2!1sen!2sbd" className="w-full h-full" ></iframe>
      </div>
    </section>
  );
}
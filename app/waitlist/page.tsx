"use client";

import { useState } from "react";

export default function WaitlistPage() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen pt-24">
      {/* Split Layout - Image Left, Content Right */}
  <section className="relative flex flex-col lg:flex-row min-h-screen gap-8 lg:gap-12">
        {/* Left Side - Image */}
  <div className="w-full lg:w-[48%] relative min-h-[50vh] lg:min-h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/waitlist.png')",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/60"></div>
          </div>
          {/* Mobile Title Overlay */}
          <div className="lg:hidden absolute inset-0 flex items-center justify-center z-10">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white text-center px-6 drop-shadow-2xl">
              Join the Waitlist
            </h1>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-[52%] px-6 sm:px-8 lg:px-16 xl:px-24 flex items-center" style={{ backgroundColor: '#eeeeee' }}>
          <div className="w-full py-12 lg:py-16">
            {/* Desktop Title - Left Aligned */}
            <h1 className="hidden lg:block font-serif text-5xl xl:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              Join the Waitlist
            </h1>

            {/* Content Container with max height for scrolling */}
            <div className={`text-gray-800 text-base lg:text-lg leading-relaxed max-w-2xl ${showMore ? 'max-h-[55vh] overflow-y-auto custom-scrollbar pr-4' : ''}`}>
              <div className="space-y-5">
                {/* Initial Content - Always Visible */}
                <p>
                  Enter your information to join the wait list and be considered for membership. Once accepted, we will contact you for payment. Membership is $800 USD/year.
                </p>

                <p className="font-medium text-gray-900">
                  Be one of the first to join and you'll be a permanent member of the <span className="font-bold">Founder's Circle</span>. Enjoy 50% off your first year's membership fee and 25% off for a lifetime as long as you are still part of High Table.
                </p>

                <p>
                  We respect your privacy. After enrollment you can remove yourself from the Linkedin, Facebook or Whatsapp groups. However, events are announced on Facebook so if you remove yourself you will not receive notices.
                </p>

                {/* Expandable sections */}
                {showMore && (
                  <>
                    <p>
                      We only share matriculation information with your alma mater to verify your attendance, but we do not sell your data with other third parties. Although we collaborate closely with your university's alumni network, we do not share data.
                    </p>

                    <p className="font-bold mt-6 text-lg text-gray-900">
                      Required Information
                    </p>
                    <div className="space-y-2">
                      <p>• Name (as it appears on your university records)</p>
                      <p>• LinkedIn link</p>
                      <p>• Facebook link</p>
                      <p>• Phone number (as listed in WhatsApp)</p>
                      <p>• University (drop down)</p>
                      <p>• College (for Oxford and Cambridge members)</p>
                      <p>• Degree (drop down): Bachelor, Master, D. Phil, PhD</p>
                      <p>• Subject</p>
                      <p>• Graduation Year (past or anticipated)</p>
                      <p>• Current City: Select the country and only major cities are listed</p>
                    </div>

                    <p className="font-bold mt-6 text-lg text-gray-900">
                      Consent Form
                    </p>
                    <p>
                      I authorize my university to confirm my matriculation status with High Table. High Table will provide only my name, email, degree, subject, and graduation year. No academic records or grades will be requested.
                    </p>
                    <p className="italic">Electronic Signature:</p>

                    <p className="font-bold mt-6 text-lg text-gray-900">
                      Payment
                    </p>
                    <p>
                      Payment Processing: Momo, VN Pay, Paypal, Mastercard, Visa, American Express.
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* View More / Hide Button - Centered */}
            <div className="mt-8 text-center max-w-2xl">
              <button
                onClick={() => setShowMore(!showMore)}
                className="inline-flex items-center gap-2 px-10 py-3 rounded-full font-medium border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white transition-all duration-300"
              >
                {showMore ? "Hide" : "View More"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

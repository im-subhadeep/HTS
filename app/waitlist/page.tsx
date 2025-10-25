"use client";

import { useState } from "react";

export default function WaitlistPage() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen pt-24">
      {/* Split Layout - Image Left, Content Right */}
  <section className="relative flex flex-col lg:flex-row min-h-screen gap-10 lg:gap-20">
        {/* Left Side - Image */}
  <div className="w-full lg:w-[48%] relative min-h-[50vh] lg:min-h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/waitlist.png')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
          </div>
          {/* Mobile Title Overlay */}
          <div className="lg:hidden absolute inset-0 flex items-center justify-center z-10">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white text-center px-6 drop-shadow-2xl">
              Join the Waitlist
            </h1>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-[52%] bg-gray-50 flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl w-full mx-auto">
            <div className="bg-white rounded-lg pl-14 pr-12 md:pl-16 md:pr-14 lg:pl-20 lg:pr-16 py-8 md:py-10 lg:py-12 shadow-sm max-h-[75vh] overflow-y-auto custom-scrollbar">
              {/* Desktop Title */}
              <h1 className="hidden lg:block font-serif text-5xl xl:text-6xl font-bold text-gray-900 mb-8">
                Join the Waitlist
              </h1>

              {/* Initial Content - Always Visible */}
              <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
                <p>
                  Enter your information to join the wait list and be considered for membership. Once accepted, we will contact you for payment. Membership is $800 USD/year.
                </p>

                <p>
                  Be one of the first to join and you'll be a permanent member of the <span className="font-bold">Founder's Circle</span>. Enjoy 50% off your first year's membership fee and 25% off for a lifetime as long as you are still part of High Table.
                </p>

                <p>
                  We respect your privacy. After enrollment you can remove yourself from the Linkedin, Facebook or Whatsapp groups. However, events are announced on Facebook so if you remove yourself you will not receive notices. We only share matriculation information with your alma mater to verify your attendance, but we do not sell your data with other third parties. Although we collaborate closely with your university's alumni network, we do not share data.
                </p>
              </div>

              {/* Expandable Content with Scroll */}
              {showMore && (
                <div className="mt-10 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed animate-fadeIn">
                  <p>Name (as it appears on your university records)</p>
                  <p>Linkedin link</p>
                  <p>Facebook link</p>
                  <p>Phone number (as listed in Whatsapp)</p>
                  <br />
                  <p>University (drop down)</p>
                  <p>College (for Oxford and Cambridge members):</p>
                  <p>Degree (drop down): Bachelor, Master, D. Phil, PhD</p>
                  <p>Subject:</p>
                  <p>Graduation Year (past or anticipated):</p>
                  <p>Current City: The select the country and only major cities are listed</p>
                  <br />
                  <h3 className="font-semibold text-xl text-gray-800 pt-4">
                    Consent Form:
                  </h3>
                  <p>
                    I authorize my university to confirm my matriculation status with High Table. High Table will provide only my name, email, degree, subject, and graduation year. No academic records or grades will be requested.
                  </p>
                  <p>Electronic Signature:</p>
                  <br />
                  <h3 className="font-semibold text-xl text-gray-800 pt-4">
                    Payment
                  </h3>
                  <p>
                    Payment Processing: Momo, VN Pay, Paypal, Mastercard, Visa, American Express.
                  </p>
                </div>
              )}
            </div>
            {/* View More / Hide Button */}
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowMore(!showMore)}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-amber-800 font-semibold border-2 border-amber-700 hover:bg-amber-700 hover:text-white transition-all duration-300"
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

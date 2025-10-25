"use client";

import { useState } from "react";

export default function MembershipPage() {
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
              backgroundImage: "url('/images/nh-chup-man-hinh-2025-10-11-145446-5092.png')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
          </div>
          {/* Mobile Title Overlay */}
          <div className="lg:hidden absolute inset-0 flex items-center justify-center z-10">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white text-center px-6 drop-shadow-2xl">
              Membership
            </h1>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-[52%] bg-gray-50 flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl w-full mx-auto">
            <div className="bg-white rounded-lg pl-14 pr-12 md:pl-16 md:pr-14 lg:pl-20 lg:pr-16 py-8 md:py-10 lg:py-12 shadow-sm max-h-[75vh] overflow-y-auto custom-scrollbar">
              {/* Desktop Title */}
              <h1 className="hidden lg:block font-serif text-5xl xl:text-6xl font-bold text-gray-900 mb-8">
                Membership
              </h1>

              {/* Introductory Text */}
              <div className="mb-12">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                  Join an exclusive community where exceptional individuals gather to connect, collaborate, and create lasting impact.
                </p>
              </div>

              {/* Membership Benefits List */}
              <div className="space-y-8">
                <div className="pb-8 border-b-2 border-gray-300">
                  <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                    <span className="font-bold">1. Annual membership fee of $800 USD (ensures committed participation).</span>
                  </p>
                </div>

                <div className="pb-8 border-b-2 border-gray-300">
                  <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                    <span className="font-bold">2. Global access: attend events in any city at no extra cost.</span>
                  </p>
                </div>

                <div className="pb-8 border-b-2 border-gray-300">
                  <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                    <span className="font-bold">3. Local focus: members are invited to events based on their primary city, avoiding unnecessary notifications.</span>
                  </p>
                </div>

                <div className="pb-8 border-b-2 border-gray-300">
                  <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                    <span className="font-bold">4. Monthly dinners (self-funded; RSVP + prepayment required).</span>
                  </p>
                </div>

                <div className="pb-8 border-b-2 border-gray-300">
                  <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                    <span className="font-bold">5. Special events (galas, summits, themed gatherings, golf, etc.) available at member rates.</span>
                  </p>
                </div>
              </div>

              {/* Eligibility Text */}
              <div className="mt-12 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
                <p>
                  Membership is reserved for degree-seeking students and alumni from our consortium of universities. Staff, researchers, post-docs, visiting fellows, certificate holders, and exchange students are not eligible.
                </p>
              </div>

              {/* Expandable Content with Scroll */}
              {showMore && (
                <div className="mt-10 max-h-[400px] overflow-y-auto border border-gray-200 rounded-lg p-6 md:p-8 bg-gray-50 animate-fadeIn custom-scrollbar">
                  <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
                    <p>
                      In exceptional cases, we extend invitations to distinguished leaders in business, science, media, the arts, and technology who did not graduate from our consortium — particularly those who left university early to build groundbreaking ventures or who have been recognized with global honors (e.g., Nobel Prize, Fields Medal, Turing Award, Pulitzer, Booker, Grammy, Oscar, MacArthur Fellowship).
                    </p>
                  </div>
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

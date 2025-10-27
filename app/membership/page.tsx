"use client";

import { useState } from "react";

export default function MembershipPage() {
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
              backgroundImage: "url('/images/nh-chup-man-hinh-2025-10-11-145446-5092.png')",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/60"></div>
          </div>
          {/* Mobile Title Overlay */}
          <div className="lg:hidden absolute inset-0 flex items-center justify-center z-10">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white text-center px-6 drop-shadow-2xl">
              Membership
            </h1>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-[52%] px-6 sm:px-8 lg:px-16 xl:px-24 flex items-center" style={{ backgroundColor: '#eeeeee' }}>
          <div className="w-full py-12 lg:py-16">
            {/* Desktop Title - Left Aligned */}
            <h1 className="hidden lg:block font-serif text-5xl xl:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              Membership
            </h1>

            {/* Content Container with max height for scrolling */}
            <div className={`text-gray-800 text-base lg:text-lg leading-relaxed max-w-2xl ${showMore ? 'max-h-[55vh] overflow-y-auto custom-scrollbar pr-4' : ''}`}>
              <div className="space-y-5">
                {/* Introductory Text */}
                <p className="text-lg font-medium text-gray-900">
                  Join an exclusive community where exceptional individuals gather to connect, collaborate, and create lasting impact.
                </p>

                {/* Membership Benefits */}
                <div className="space-y-4 mt-6">
                  <p className="font-semibold text-gray-900">
                    1. Annual membership fee of $800 USD (ensures committed participation).
                  </p>

                  <p className="font-semibold text-gray-900">
                    2. Global access: attend events in any city at no extra cost.
                  </p>

                  <p className="font-semibold text-gray-900">
                    3. Local focus: members are invited to events based on their primary city, avoiding unnecessary notifications.
                  </p>

                  <p className="font-semibold text-gray-900">
                    4. Monthly dinners (self-funded; RSVP + prepayment required).
                  </p>

                  <p className="font-semibold text-gray-900">
                    5. Special events (galas, summits, themed gatherings, golf, etc.) available at member rates.
                  </p>
                </div>

                {/* Eligibility */}
                <p className="mt-6">
                  Membership is reserved for degree-seeking students and alumni from our consortium of universities.
                </p>

                {/* Expandable sections */}
                {showMore && (
                  <>
                    <p>
                      Staff, researchers, post-docs, visiting fellows, certificate holders, and exchange students are not eligible.
                    </p>

                    <p className="font-bold mt-6 text-lg text-gray-900">
                      Exceptional Cases
                    </p>
                    <p>
                      In exceptional cases, we extend invitations to distinguished leaders in business, science, media, the arts, and technology who did not graduate from our consortium — particularly those who left university early to build groundbreaking ventures or who have been recognized with global honors (e.g., Nobel Prize, Fields Medal, Turing Award, Pulitzer, Booker, Grammy, Oscar, MacArthur Fellowship).
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

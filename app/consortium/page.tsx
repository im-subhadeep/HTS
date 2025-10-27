"use client";

import { useState } from "react";

export default function ConsortiumPage() {
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
              backgroundImage: "url('images/nh-chup-man-hinh-2025-10-11-142542-6209.png')",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/60"></div>
          </div>
          {/* Mobile Title Overlay */}
          <div className="lg:hidden absolute inset-0 flex items-center justify-center z-10">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white text-center px-6 drop-shadow-2xl">
              Consortium of Universities
            </h1>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-[52%] px-6 sm:px-8 lg:px-16 xl:px-24 flex items-center" style={{ backgroundColor: '#eeeeee' }}>
          <div className="w-full py-12 lg:py-16">
            {/* Desktop Title - Left Aligned */}
            <h1 className="hidden lg:block font-serif text-5xl xl:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              Consortium of Universities
            </h1>

            {/* Content Container with max height for scrolling */}
            <div className={`text-gray-800 text-base lg:text-lg leading-relaxed max-w-2xl ${showMore ? 'max-h-[55vh] overflow-y-auto custom-scrollbar pr-4' : ''}`}>
              <div className="space-y-5">
                {/* University List */}
                <div className="mb-6">
                  <p className="text-lg font-medium text-gray-900 leading-relaxed">
                    Brown, Cambridge, Columbia, Cornell, Dartmouth, Harvard, MIT, University of Pennsylvania, Princeton, Oxford, Stanford, Yale.
                  </p>
                </div>

                {/* Main Description */}
                <p>
                  We deeply admire many remarkable institutions around the world. Yet to preserve the intimacy and depth of our community, eligibility is limited to a carefully chosen consortium of universities.
                </p>

                {/* Expandable sections */}
                {showMore && (
                  <>
                    <p>
                      This selection is guided not only by research and academic excellence, but also by a shared heritage—rooted in the Greek and Latin classical traditions that trace back to Oxford—and by long-standing research partnerships among these institutions.
                    </p>

                    <p>
                      At the heart of High Table lies the veneration of tradition: centuries-old rituals reimagined for a modern world. Our consortium reflects this shared legacy of scholarship and cultural heritage.
                    </p>

                    <p className="font-bold mt-6 text-lg text-gray-900">
                      Selection Criteria
                    </p>
                    <p>
                      Our selection criteria emphasizes research excellence, a strong alumni culture, and long-term collaboration. We intentionally limit membership to preserve depth in conversation and local chapters.
                    </p>

                    <p className="font-bold mt-6 text-lg text-gray-900">
                      Your University Not Listed?
                    </p>
                    <p>
                      If your university isn't listed but you believe you fit the spirit of High Table, join the waitlist and we'll review your profile carefully.
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

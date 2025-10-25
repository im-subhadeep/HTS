"use client";

import { useState } from "react";

export default function ConsortiumPage() {
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
              backgroundImage: "url('images/nh-chup-man-hinh-2025-10-11-142542-6209.png')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
          </div>
          {/* Mobile Title Overlay */}
          <div className="lg:hidden absolute inset-0 flex items-center justify-center z-10">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white text-center px-6 drop-shadow-2xl">
              Consortium of Universities
            </h1>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-[52%] bg-gray-50 flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl w-full mx-auto">
            <div className="bg-white rounded-lg pl-14 pr-12 md:pl-16 md:pr-14 lg:pl-20 lg:pr-16 py-8 md:py-10 lg:py-12 shadow-sm max-h-[75vh] overflow-y-auto custom-scrollbar">
              {/* Desktop Title */}
              <h1 className="hidden lg:block font-serif text-5xl xl:text-6xl font-bold text-gray-900 mb-8">
                Consortium of Universities
              </h1>

            {/* University List */}
            <div className="mb-10">
              <p className="text-lg text-gray-800 leading-relaxed">
                Brown, Cambridge, Columbia, Cornell, Dartmouth, Harvard, MIT, University of Pennsylvania, Princeton, Oxford, Stanford, Yale.
              </p>
            </div>

            {/* Main Description */}
            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                We deeply admire many remarkable institutions around the world. Yet to preserve the intimacy and depth of our community, eligibility is limited to a carefully chosen consortium of universities. This selection is guided not only by research and academic excellence, but also by a shared heritage—rooted in the Greek and Latin classical traditions that trace back to Oxford—and by long-standing research partnerships among these institutions.
              </p>

              <p>
                At the heart of High Table lies the veneration of tradition: centuries-old rituals reimagined for a modern world. Our consortium reflects this shared legacy of scholarship and cultural heritage.
              </p>
            </div>              {showMore && (
                <div className="pt-6 space-y-6">
                  <p>
                    Our selection criteria emphasizes research excellence, a strong alumni culture, and long-term collaboration. We intentionally limit membership to preserve depth in conversation and local chapters.
                  </p>
                  <p>
                    If your university isn't listed but you believe you fit the spirit of High Table, join the waitlist and we'll review your profile carefully.
                  </p>
                </div>
              )}
            </div>
            {/* View More / Hide Button */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowMore(!showMore)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-amber-800 font-semibold border-2 border-amber-700 hover:bg-amber-700 hover:text-white transition-all duration-300"
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

"use client";

import { useState } from "react";

export default function AboutPage() {
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
              backgroundImage: "url('/images/gt-3214.png')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/40"></div>
          </div>
          {/* Mobile Title Overlay */}
          <div className="lg:hidden absolute inset-0 flex items-center justify-center z-10">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white text-center px-6 drop-shadow-2xl">
              About Us
            </h1>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-[52%] bg-gray-50 flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl w-full mx-auto">
            {/* Desktop Title */}
            <h1 className="hidden lg:block font-serif text-5xl xl:text-6xl font-bold text-gray-900 mb-8">
              About Us
            </h1>
            <div className="bg-white rounded-lg pl-14 pr-12 md:pl-16 md:pr-14 lg:pl-20 lg:pr-16 py-8 md:py-10 lg:py-12 shadow-sm max-h-[75vh] overflow-y-auto custom-scrollbar">
              {/* Main Heading */}
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Where Great Minds Meet
              </h2>

              {/* Content - show first two sections, reveal rest with View More */}
              <div className="space-y-8 text-gray-700 text-base md:text-lg leading-relaxed">
                {/* === SECTION 1 === */}
                <p>
                  The world's most prestigious cross-collegiate network and social
                  club—the first and only of its kind. Founded by an Oxford alumna
                  (Saïd Business School – Oriel College), High Table draws
                  inspiration from Oxford's iconic tradition of formal dinners that
                  date back to the 13<sup>th</sup> century. Marked by Latin
                  prayers, candlelit halls, and a "high table" reserved for
                  distinguished guests, this setting fosters intellectual
                  discourse and a tight-knit community. While these traditional
                  practices continue weekly at Oxford today, we reimagine it for a
                  global community of extraordinary minds.
                </p>

                {/* === SECTION 2 (ALWAYS VISIBLE) === */}
                <p className="font-bold mt-4">
                  An Exclusive Community of Luminaries
                </p>
                <p>
                  High Table unites alumni from Oxford, Cambridge, the Ivy League
                  (Brown, Columbia, Cornell, Dartmouth, Harvard, Penn, Princeton,
                  Yale), Stanford, and MIT—bringing together the most ambitious
                  leaders from all industries to create one powerful network
                  accessible in your own city. After graduation, finding peers of
                  equal caliber across geographies can be challenging. High Table
                  bridges that gap, offering unparalleled access to meaningful
                  connections and enduring friendships across the globe.
                </p>

                {/* Expandable sections */}
                {showMore && (
                  <div className="pt-6 space-y-8">
                    <p className="font-bold mt-4">
                      Curated, Invitation-Only Membership
                    </p>
                    <p>
                      Our community thrives on trust, support, and ambition. Open to
                      exceptional alumni from all backgrounds, High Table is a place
                      where ideas flourish and connections endure. We are strictly
                      politically neutral and socially inclusive, we aim to create a
                      supportive, positive community where all feel welcome.
                      Membership is carefully curated to preserve the quality of
                      conversation and the integrity of our network. Invitations are
                      extended thoughtfully—join our waitlist, and if your vision
                      aligns with ours, we will personally reach out. No payment is
                      required until you are welcomed into the fold.
                    </p>

                    <p className="font-bold mt-4">
                      A Modern Legacy of Distinction
                    </p>
                    <p>
                      High Table is more than a network—it is a living legacy of
                      heritage, intellect, and prestige. We offer a private space
                      where the world’s most distinguished minds collaborate and where
                      networking is not a buzzword, but a lived experience.
                    </p>
                  </div>
                )}
              </div>
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
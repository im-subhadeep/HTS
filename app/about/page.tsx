"use client";

import { useState } from "react";

export default function AboutPage() {
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
              backgroundImage: "url('/images/gt-3214.png')",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/40"></div>
          </div>
          {/* Mobile Title Overlay */}
          <div className="lg:hidden absolute inset-0 flex items-center justify-center z-10">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white text-center px-6 drop-shadow-2xl">
              About Us
            </h1>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-[52%] px-8 sm:px-8 lg:px-16 xl:px-24 flex items-center" style={{ backgroundColor: '#eeeeee' }}>
          <div className="w-full py-12 lg:py-16">
            {/* Desktop Title - Left Aligned */}
            <h1 className="hidden lg:block font-serif text-5xl xl:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              About Us
            </h1>
            
            {/* Main Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Where Great Minds Meet
            </h2>

            {/* Content Container with max height for scrolling */}
            <div className={`text-gray-800 text-base lg:text-lg leading-relaxed max-w-2xl ${showMore ? 'max-h-[55vh] overflow-y-auto custom-scrollbar pr-4' : ''}`}>
              <div className="space-y-5">
                {/* === SECTION 1 === */}
                <p>
                  The world's most prestigious cross-collegiate network and social
                  club—the first and only of its kind. Founded by an Oxford alumna
                  (Saïd Business School – Oriel College), High Table draws inspiration
                </p>

                {/* Expandable sections */}
                {showMore && (
                  <>
                    <p>
                    from Oxford's iconic tradition of formal dinners that
                    date back to the 13<sup>th</sup> century. Marked by Latin
                    prayers, candlelit halls, and a "high table" reserved for
                    distinguished guests, this setting fosters intellectual
                    discourse and a tight-knit community. While these traditional
                    practices continue weekly at Oxford today, we reimagine it for a
                    global community of extraordinary minds.
                  </p>

                  <p className="font-bold mt-6 text-lg text-gray-900">
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

                  <p className="font-bold mt-6 text-lg text-gray-900">
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

                  <p className="font-bold mt-6 text-lg text-gray-900">
                    A Modern Legacy of Distinction
                  </p>
                  <p>
                      High Table is more than a network—it is a living legacy of
                      heritage, intellect, and prestige. We offer a private space
                      where the world’s most distinguished minds collaborate and where
                    networking is not a buzzword, but a lived experience.
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
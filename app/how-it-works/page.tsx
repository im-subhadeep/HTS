"use client";

import { useState } from "react";

export default function HowItWorksPage() {
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
              backgroundImage: "url('/images/nh-chup-man-hinh-2025-10-11-142330-3266.png')",
            }}
          >
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          {/* Mobile Title Overlay */}
          <div className="lg:hidden absolute inset-0 flex items-center justify-center z-10">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white text-center px-6 drop-shadow-2xl">
              How it Work
            </h1>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-[52%] px-6 sm:px-8 lg:px-16 xl:px-24 flex items-center" style={{ backgroundColor: '#eeeeee' }}>
          <div className="w-full py-12 lg:py-16">
            {/* Desktop Title - Left Aligned */}
            <h1 className="hidden lg:block font-serif text-5xl xl:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              How it Work
            </h1>

            {/* Content Container with max height for scrolling */}
            <div className={`text-gray-800 text-base lg:text-lg leading-relaxed max-w-2xl ${showMore ? 'max-h-[55vh] overflow-y-auto custom-scrollbar pr-4' : ''}`}>
              <div className="space-y-5">
                <p>
                  Welcome to the world's most prestigious alumni network and social club—a place where extraordinary minds connect, collaborate, and inspire one another.
                </p>

                <p>
                  Only those who have earned a formal degree (Bachelor's, Master's, D. Phil, PhD, MD, JD) from our consortium of leading universities are eligible. Current degree-seeking students are also welcome. To stay true to the definition of an alumni network, we are not accepting fellows, researchers, staff, lecturers, post-docs, certificate holders of short-term programs, visiting students, or others who do not/will not hold formal degrees from the consortium. During registration, we ask for your university email and a consent form, allowing us to confirm matriculation with your alma mater and ensure the integrity of our community.
                </p>

                {/* Expandable sections */}
                {showMore && (
                  <>
                    <p>
                      During registration, we ask for your university email and a consent form, allowing us to confirm matriculation with your alma mater and ensure the integrity of our community.
                    </p>

                    <p>
                      Dues are paid annually to encourage participation because an elite network requires intention. Once your enrollment is verified, you will gain access to our exclusive LinkedIn, WhatsApp, and Facebook groups. Indicating the city where you are based allows you to receive invitations relevant to your location. Membership remains global—you are welcome to attend events anywhere in the world at no additional cost, reflecting the cross-border nature of our network.
                    </p>

                    <p className="font-bold mt-6 text-lg text-gray-900">
                      Monthly Dinners & Special Events
                    </p>
                    <p>
                      At the heart of High Table are our monthly dinners. Attendance requires only payment for your own food and drinks. We kindly ask for RSVPs and payment two days in advance, helping us nurture strong relationships with our vendors. Special gatherings — such as galas, annual summits, holiday events, or golf outings — carry a separate fee to keep the annual membership accessible.
                    </p>

                    <p className="font-bold mt-6 text-lg text-gray-900">
                      Your Chapter Leaders
                    </p>
                    <p>
                      Each chapter is led by a dedicated chapter head or event coordinator, your guide to events and connections. We encourage you to introduce yourself as they are your primary contact for any questions or support.
                    </p>

                    <p className="font-bold mt-6 text-lg text-gray-900">
                      Special Rates for Students & Recent Graduates
                    </p>
                    <p>
                      To welcome emerging talent, recent graduates (within the past 12 months) and current students enjoy a significant discount, reflecting our commitment to fostering the next generation of leaders.
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

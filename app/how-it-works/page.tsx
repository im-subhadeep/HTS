"use client";

import { useState } from "react";

export default function HowItWorksPage() {
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
        <div className="w-full lg:w-[52%] bg-gray-50 flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl w-full mx-auto">
            <div className="bg-white rounded-lg pl-14 pr-12 md:pl-16 md:pr-14 lg:pl-20 lg:pr-16 py-8 md:py-10 lg:py-12 shadow-sm max-h-[75vh] overflow-y-auto custom-scrollbar">
              {/* Desktop Title */}
              <h1 className="hidden lg:block font-serif text-5xl xl:text-6xl font-bold text-gray-900 mb-8">
                How it Work
              </h1>

              {/* Introduction */}
              <div className="space-y-8 text-gray-700 text-base md:text-lg leading-relaxed">
                <p>
                  Welcome to the world's most prestigious alumni network and social club—a place where extraordinary minds connect, collaborate, and inspire one another.
                </p>

                <p>
                  Only those who have earned a formal degree (Bachelor's, Master's, D. Phil, PhD, MD, JD) from our consortium of leading universities are eligible. Current degree-seeking students are also welcome. To stay true to the definition of an alumni network, we are not accepting fellows, researchers, staff, lecturers, post-docs, certificate holders of short-term programs, visiting students, or others who do not/will not hold formal degrees from the consortium. During registration, we ask for your university email and a consent form, allowing us to confirm matriculation with your alma mater and ensure the integrity of our community.
                </p>

                <p>
                  Dues are paid annually to encourage participation because an elite network requires intention. Once your enrollment is verified, you will gain access to our exclusive LinkedIn, WhatsApp, and Facebook groups. Indicating the city where you are based allows you to receive invitations relevant to your location. Membership remains global—you are welcome to attend events anywhere in the world at no additional cost, reflecting the cross-border nature of our network.
                </p>
              </div>

              {/* Expandable Content with Scroll */}
              {showMore && (
                <div className="mt-10 max-h-[400px] overflow-y-auto border border-gray-200 rounded-lg p-6 md:p-8 bg-gray-50 animate-fadeIn custom-scrollbar">
                  <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
                    <p>
                      At the heart of High Table are our monthly dinners. Attendance requires only payment for your own food and drinks. We kindly ask for RSVPs and payment two days in advance, helping us nurture strong relationships with our vendors. Special gatherings — such as galas, annual summits, holiday events, or golf outings — carry a separate fee to keep the annual membership accessible.
                    </p>

                    <p>
                      Each chapter is led by a dedicated chapter head or event coordinator, your guide to events and connections. We encourage you to introduce yourself as they are your primary contact for any questions or support.
                    </p>

                    <p>
                      To welcome emerging talent, recent graduates (within the past 12 months) and current students enjoy a significant discount, reflecting our commitment to fostering the next generation of leaders.
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

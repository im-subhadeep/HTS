"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Add a console log to see if this function is being called
    console.log("Scroll event detected. Y offset:", window.scrollY);
    if (window.scrollY > 300) {
      setIsVisible(true);
      // Log when the button should become visible
      console.log("Button should be visible.");
    } else {
      setIsVisible(false);
      // Log when the button should be hidden
      console.log("Button should be hidden.");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Attach the event listener
    window.addEventListener("scroll", toggleVisibility);
    console.log("Scroll event listener attached.");

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      console.log("Scroll event listener removed.");
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-10 right-10 z-50">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-gray-700 text-white shadow-2xl hover:bg-gray-900 transition-all duration-300"
            aria-label="Go to top"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

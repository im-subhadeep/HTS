import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full overflow-hidden">
      {/* Full Screen Background Image */}
      <section className="relative h-screen w-full">
        {/* Background Image */}
            <div 
              className="absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
              style={{
                backgroundImage: "url('/images/anha-18680.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            ></div>

        {/* Bottom Left Links */}
        <div className="absolute bottom-8 left-8 flex flex-col sm:flex-row gap-6 sm:gap-8 z-10">
          <a
            href="#"
            className="flex items-center gap-3 text-black hover:text-gray-700 transition-all duration-300"
          >
            <span className="font-medium text-base drop-shadow-lg">Follow Us</span>
          </a>
        </div>

        {/* Bottom Right Links */}
        <div className="absolute bottom-8 right-8 flex gap-6 text-black text-sm z-10">
          <Link 
            href="/code-of-conduct" 
            className="hover:text-gray-700 transition-colors duration-300 font-medium drop-shadow-lg"
          >
            Code of Conduct
          </Link>
          <Link 
            href="/contact" 
            className="hover:text-gray-700 transition-colors duration-300 font-medium drop-shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default function CodeOfConductPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Split Layout - Image Left, Content Right */}
      <section className="relative flex flex-col lg:flex-row min-h-screen gap-10 lg:gap-20">
        {/* Left Side - Image */}
        <div className="w-full lg:w-[48%] relative min-h-[50vh] lg:min-h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/nh-chup-man-hinh-2025-10-11-142236-7552.png')",
            }}
          >
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          
          {/* Mobile Title Overlay */}
          <div className="lg:hidden absolute inset-0 flex items-center justify-center z-10">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white text-center px-6 drop-shadow-2xl">
              Code of Conduct
            </h1>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-[52%] bg-gray-50 flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl w-full mx-auto bg-white rounded-lg pl-14 pr-12 md:pl-16 md:pr-14 lg:pl-20 lg:pr-16 py-8 md:py-10 lg:py-12 shadow-sm max-h-[75vh] overflow-y-auto custom-scrollbar">
            {/* Desktop Title */}
            <h1 className="hidden lg:block font-serif text-5xl xl:text-6xl font-bold text-gray-900 mb-12">
              Code of Conduct
            </h1>

            {/* Content */}
            <div className="space-y-8 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                High Table is founded on a culture of civility, generosity, and respect. We believe that 
                true innovation—in research, entrepreneurship, and beyond—flourishes when diverse perspectives 
                are welcomed and exchanged with grace. Our community thrives on kindness, support, and the 
                highest standards of integrity.
              </p>

              <p>
                To preserve this spirit, we do not permit harassment, bullying, hazing, religious evangelization, 
                abusive language, politicization, excessive advertising, or unlawful activity. Members are 
                expected to honor the laws of the host country at all times.
              </p>

              <p>
                Membership in High Table is a privilege. Should these principles be compromised, membership may 
                be revoked immediately and without refund. This ensures that our circle remains a sanctuary for 
                meaningful connection, thoughtful discourse, and the pursuit of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-amber-50 to-white">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-amber-700 animate-spin"
            style={{ animationDuration: "2s" }}
          >
            <path
              d="M50 10 L30 25 L30 75 L50 90 L70 75 L70 25 Z"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
            />
            <circle cx="50" cy="20" r="3" fill="currentColor" />
          </svg>
        </div>
        <p className="font-serif text-xl text-amber-800">Loading...</p>
      </div>
    </div>
  );
}


import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-amber-50 to-white">
      <div className="text-center px-6 max-w-2xl">
        <div className="mb-8">
          <h1 className="font-serif text-9xl font-bold text-amber-700 mb-4">404</h1>
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="bg-white hover:bg-gray-50 text-amber-900 px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105 border-2 border-amber-700"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-12 text-gray-500">
          <p className="text-sm">
            If you believe this is an error, please{" "}
            <Link href="/contact" className="text-amber-700 hover:text-amber-800 underline">
              let us know
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}


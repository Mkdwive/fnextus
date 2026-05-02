import { Metadata } from "next";
import Link from "next/link";

export const metadata:Metadata ={
  title:"404 - Product Not Found",
  description:"This page is not available in this website"
}
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-50 via-yellow-50 to-red-50 px-4">
      
      <div className="text-center max-w-md">
        
        <div className="text-6xl mb-4">🍔</div>

        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          404 - Product Not Found
        </h2>

        <p className="text-gray-600 mb-6">
          Oops! The product you are looking for does not exist or may have been removed.
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-2 rounded-full bg-orange-500 text-white font-medium shadow-md hover:bg-orange-600 hover:shadow-lg transition duration-300"
        >
          Back to Home
        </Link>

      </div>
    </div>
  );
}
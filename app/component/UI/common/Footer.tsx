import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
        </div>

        <p className="text-xs text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} Fresh Nexsus. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
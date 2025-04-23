import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Site Name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-[#1B4B79] text-2xl">☪</span>
              <span className="text-[#1B4B79] font-semibold text-xl">Islamic Companion</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#1B4B79]">
              Home
            </Link>
            <Link href="/features" className="text-gray-700 hover:text-[#1B4B79]">
              Features
            </Link>
            <Link href="/daily-wisdom" className="text-gray-700 hover:text-[#1B4B79]">
              Daily Wisdom
            </Link>
            <Link href="/prayer-times" className="text-gray-700 hover:text-[#1B4B79]">
              Prayer Times
            </Link>
            <Link href="/ask-ai" className="text-gray-700 hover:text-[#1B4B79]">
              Ask AI
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#1B4B79]">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-[#1B4B79]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-[#1B4B79]">
            Home
          </Link>
          <Link href="/features" className="block px-3 py-2 text-gray-700 hover:text-[#1B4B79]">
            Features
          </Link>
          <Link href="/daily-wisdom" className="block px-3 py-2 text-gray-700 hover:text-[#1B4B79]">
            Daily Wisdom
          </Link>
          <Link href="/prayer-times" className="block px-3 py-2 text-gray-700 hover:text-[#1B4B79]">
            Prayer Times
          </Link>
          <Link href="/ask-ai" className="block px-3 py-2 text-gray-700 hover:text-[#1B4B79]">
            Ask AI
          </Link>
          <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-[#1B4B79]">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

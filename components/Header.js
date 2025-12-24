import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-xenteck-dark/90 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold gradient-text">
            XenTeck
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-300 hover:text-white transition">Services</Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white transition">Pricing</Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition">About</Link>
            <Link href="/contact" className="bg-xenteck-blue hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition">Get Started</Link>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link href="/services" className="text-gray-300 hover:text-white transition">Services</Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white transition">Pricing</Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition">About</Link>
              <Link href="/contact" className="bg-xenteck-blue text-white px-6 py-2 rounded-lg text-center">Get Started</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
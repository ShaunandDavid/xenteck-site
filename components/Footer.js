import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-xenteck-gray border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">XenTeck</h3>
            <p className="text-gray-400 mb-4">AI-powered automation that captures every lead, responds in seconds, and never sleeps. Your complete Revenue Defense System.</p>
            <p className="text-gray-500 text-sm">A division of LevEL 7 Media LLC</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/speed-to-lead" className="text-gray-400 hover:text-white transition">Speed-to-Lead</Link></li>
              <li><Link href="/services/pipeline-copilot" className="text-gray-400 hover:text-white transition">Pipeline Co-Pilot</Link></li>
              <li><Link href="/services/voice-agent" className="text-gray-400 hover:text-white transition">Voice AI Agent</Link></li>
              <li><Link href="/services/agentic-sdr" className="text-gray-400 hover:text-white transition">Agentic SDR</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition">Pricing</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} XenTeck. All rights reserved.</p>
          <p className="mt-2">admin@xenteck.com</p>
        </div>
      </div>
    </footer>
  );
}
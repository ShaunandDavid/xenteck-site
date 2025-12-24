import Head from 'next/head';
import Link from 'next/link';

export default function SpeedToLead() {
  return (
    <>
      <Head><title>Speed-to-Lead | XenTeck</title></Head>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-6xl mb-6 block">\u26A1</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Speed-to-Lead</h1>
            <p className="text-gray-400 text-xl">The first 5 seconds decide who wins the deal. Make sure it is you.</p>
          </div>
          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">The Problem</h2>
            <p className="text-gray-400 mb-4">The average business takes 42 hours to respond to a lead. By then, your prospect has already talked to 3 competitors.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">78%</div><div className="text-gray-500 text-sm">of deals go to first responder</div></div>
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">391%</div><div className="text-gray-500 text-sm">higher conversion at 1-min response</div></div>
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">42hrs</div><div className="text-gray-500 text-sm">average response time</div></div>
            </div>
          </div>
          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">The Solution</h2>
            <p className="text-gray-400 mb-6">Speed-to-Lead responds to every form submission in under 5 seconds with a personalized SMS.</p>
            <ul className="space-y-4">
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">\u2713</span><div><strong className="text-white">Instant Response</strong><p className="text-gray-500">AI-powered SMS sent within 5 seconds</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">\u2713</span><div><strong className="text-white">Personalized Messages</strong><p className="text-gray-500">Dynamic content based on lead source</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">\u2713</span><div><strong className="text-white">24/7 Coverage</strong><p className="text-gray-500">Every lead gets instant attention</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">\u2713</span><div><strong className="text-white">Performance Guarantee</strong><p className="text-gray-500">Sub-5-second response or money back</p></div></li>
            </ul>
          </div>
          <div className="text-center"><Link href="/contact" className="bg-xenteck-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition inline-block">Get Speed-to-Lead</Link></div>
        </div>
      </section>
    </>
  );
}
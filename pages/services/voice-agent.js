import Head from 'next/head';
import Link from 'next/link';

export default function VoiceAgent() {
  return (
    <>
      <Head>
        <title>AI Voice Agent | XenTeck</title>
        <meta name="description" content="Never miss a call again. AI answers your phone 24/7, qualifies leads in real-time, and books meetings directly on your calendar." />
      </Head>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-6xl mb-6 block">🎙️</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Voice Agent</h1>
            <p className="text-gray-400 text-xl">Your phone never stops ringing. Neither does our AI.</p>
          </div>
          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">The Problem</h2>
            <p className="text-gray-400 mb-4">You're in a meeting. Your phone rings. A potential $50,000 deal goes to voicemail. By the time you call back, they've already talked to your competitor.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">62%</div><div className="text-gray-500 text-sm">of calls go unanswered</div></div>
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">85%</div><div className="text-gray-500 text-sm">won't leave voicemail</div></div>
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">$1.2M</div><div className="text-gray-500 text-sm">avg. lost annually to missed calls</div></div>
            </div>
          </div>
          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">The Solution</h2>
            <p className="text-gray-400 mb-6">AI Voice Agent answers every call instantly with natural conversation, qualifies leads, answers FAQs, and books appointments directly on your calendar.</p>
            <ul className="space-y-4">
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">24/7 Coverage</strong><p className="text-gray-500">Every call answered, day or night, weekends included</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Natural Conversation</strong><p className="text-gray-500">Callers can't tell it's AI - sounds like your best receptionist</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Lead Qualification</strong><p className="text-gray-500">Asks the right questions, scores leads, routes hot ones to you</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Calendar Booking</strong><p className="text-gray-500">Books meetings directly - no back and forth emails</p></div></li>
            </ul>
          </div>
          <div className="text-center"><Link href="/contact" className="bg-xenteck-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition inline-block">Get AI Voice Agent</Link></div>
        </div>
      </section>
    </>
  );
}
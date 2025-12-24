import Head from 'next/head';
import Link from 'next/link';

export default function PipelineCopilot() {
  return (
    <>
      <Head><title>AI Sales Pipeline Co-Pilot | XenTeck</title></Head>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-6xl mb-6 block">🎯</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Sales Pipeline Co-Pilot</h1>
            <p className="text-gray-400 text-xl">Your AI partner that works your pipeline while you close deals.</p>
          </div>
          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">The Problem</h2>
            <p className="text-gray-400 mb-4">Sales reps spend 65% of their time on non-selling activities. CRM data goes stale. Follow-ups slip through cracks. Deals die in silence.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">65%</div><div className="text-gray-500 text-sm">time lost to admin tasks</div></div>
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">71%</div><div className="text-gray-500 text-sm">of CRM data is outdated</div></div>
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">48%</div><div className="text-gray-500 text-sm">of reps miss follow-ups</div></div>
            </div>
          </div>
          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">The Solution</h2>
            <p className="text-gray-400 mb-6">Pipeline Co-Pilot monitors your deals, drafts follow-ups, updates your CRM, and alerts you when deals need attention.</p>
            <ul className="space-y-4">
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Auto-Follow-ups</strong><p className="text-gray-500">AI drafts personalized follow-ups based on deal context</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">CRM Hygiene</strong><p className="text-gray-500">Automatically updates deal stages and contact info</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Risk Alerts</strong><p className="text-gray-500">Get notified when deals go cold or need attention</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Meeting Prep</strong><p className="text-gray-500">AI summaries of all deal history before every call</p></div></li>
            </ul>
          </div>
          <div className="text-center"><Link href="/contact" className="bg-xenteck-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition inline-block">Get Pipeline Co-Pilot</Link></div>
        </div>
      </section>
    </>
  );
}

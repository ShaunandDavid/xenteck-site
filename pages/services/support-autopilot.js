import Head from 'next/head';
import Link from 'next/link';

export default function SupportAutopilot() {
  return (
    <>
      <Head><title>Support Autopilot | XenTeck</title></Head>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-6xl mb-6 block">🤖</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Autopilot</h1>
            <p className="text-gray-400 text-xl">AI that actually resolves tickets, not just deflects them.</p>
          </div>
          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">The Problem</h2>
            <p className="text-gray-400 mb-4">Support teams drown in repetitive tickets. Response times slip. Good agents burn out on easy questions. Complex issues get lost in the queue.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">80%</div><div className="text-gray-500 text-sm">of tickets are repetitive</div></div>
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">12hrs</div><div className="text-gray-500 text-sm">avg first response time</div></div>
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">35%</div><div className="text-gray-500 text-sm">agent turnover rate</div></div>
            </div>
          </div>
          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">The Solution</h2>
            <p className="text-gray-400 mb-6">Support Autopilot handles routine tickets end-to-end and escalates complex issues with full context.</p>
            <ul className="space-y-4">
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Full Resolution</strong><p className="text-gray-500">AI resolves common issues without human intervention</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Smart Escalation</strong><p className="text-gray-500">Complex tickets routed with complete context summary</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Knowledge Learning</strong><p className="text-gray-500">Gets smarter from every resolution your team makes</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Omnichannel</strong><p className="text-gray-500">Email, chat, social - unified AI response across all</p></div></li>
            </ul>
          </div>
          <div className="text-center"><Link href="/contact" className="bg-xenteck-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition inline-block">Get Support Autopilot</Link></div>
        </div>
      </section>
    </>
  );
}

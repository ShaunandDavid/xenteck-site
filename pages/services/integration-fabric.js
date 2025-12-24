import Head from 'next/head';
import Link from 'next/link';

export default function IntegrationFabric() {
  return (
    <>
      <Head><title>Agentic Integration Fabric | XenTeck</title></Head>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-6xl mb-6 block">🔗</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Agentic Integration Fabric</h1>
            <p className="text-gray-400 text-xl">Connect everything. Automate anything. No code required.</p>
          </div>
          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">The Problem</h2>
            <p className="text-gray-400 mb-4">Your tools dont talk to each other. Data entry happens in 5 places. Integrations break. Your team is the middleware.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">91%</div><div className="text-gray-500 text-sm">of companies have data silos</div></div>
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">40%</div><div className="text-gray-500 text-sm">of work is manual data transfer</div></div>
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">269</div><div className="text-gray-500 text-sm">avg apps per enterprise</div></div>
            </div>
          </div>
          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">The Solution</h2>
            <p className="text-gray-400 mb-6">Integration Fabric connects your entire tech stack with AI agents that handle complex workflows.</p>
            <ul className="space-y-4">
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">500+ Connectors</strong><p className="text-gray-500">Pre-built integrations for major business tools</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">AI Orchestration</strong><p className="text-gray-500">Agents that understand context and make decisions</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">No-Code Builder</strong><p className="text-gray-500">Visual workflow builder for complex automations</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Error Recovery</strong><p className="text-gray-500">Self-healing integrations that fix common issues</p></div></li>
            </ul>
          </div>
          <div className="text-center"><Link href="/contact" className="bg-xenteck-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition inline-block">Get Integration Fabric</Link></div>
        </div>
      </section>
    </>
  );
}

import Head from 'next/head';
import Link from 'next/link';

export default function AgenticSDR() {
  return (
    <>
      <Head>
        <title>Agentic SDR | XenTeck</title>
        <meta name="description" content="Autonomous outbound prospecting. AI identifies ideal customers, researches them, writes personalized emails, and follows up automatically." />
      </Head>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-6xl mb-6 block">🤖</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Agentic SDR</h1>
            <p className="text-gray-400 text-xl">Your AI sales rep that never sleeps, never complains, and always follows up.</p>
          </div>
          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">The Problem</h2>
            <p className="text-gray-400 mb-4">Hiring SDRs is expensive. Training takes months. Turnover is brutal. And most of them hate cold outreach anyway - their hearts aren't in it.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">$85K</div><div className="text-gray-500 text-sm">avg. SDR salary + benefits</div></div>
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">14mo</div><div className="text-gray-500 text-sm">avg. SDR tenure</div></div>
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">2%</div><div className="text-gray-500 text-sm">cold email response rate</div></div>
            </div>
          </div>
          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">The Solution</h2>
            <p className="text-gray-400 mb-6">Agentic SDR autonomously finds your ideal prospects, researches their companies, crafts hyper-personalized outreach, and follows up persistently until they respond.</p>
            <ul className="space-y-4">
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Lead Discovery</strong><p className="text-gray-500">AI scans signals - job posts, funding rounds, tech stack changes</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Deep Research</strong><p className="text-gray-500">Pulls company info, recent news, decision-maker backgrounds</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Personalized Outreach</strong><p className="text-gray-500">Every email sounds like you spent 20 minutes writing it</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Automated Follow-up</strong><p className="text-gray-500">7-touch sequences that adjust based on engagement</p></div></li>
            </ul>
          </div>
          <div className="text-center"><Link href="/contact" className="bg-xenteck-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition inline-block">Get Agentic SDR</Link></div>
        </div>
      </section>
    </>
  );
}
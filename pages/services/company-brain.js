import Head from 'next/head';
import Link from 'next/link';

export default function CompanyBrain() {
  return (
    <>
      <Head><title>Company Brain Assistant | XenTeck</title></Head>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-6xl mb-6 block">🧠</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Company Brain Assistant</h1>
            <p className="text-gray-400 text-xl">Every employee gets instant access to everything your company knows.</p>
          </div>
          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">The Problem</h2>
            <p className="text-gray-400 mb-4">Knowledge is scattered across Slack, Docs, wikis, and peoples heads. New hires take months to ramp. Experts answer the same questions repeatedly.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">9.3hrs</div><div className="text-gray-500 text-sm">weekly searching for info</div></div>
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">6mo</div><div className="text-gray-500 text-sm">avg new hire ramp time</div></div>
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">47%</div><div className="text-gray-500 text-sm">of knowledge walks out the door</div></div>
            </div>
          </div>
          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">The Solution</h2>
            <p className="text-gray-400 mb-6">Company Brain indexes all your knowledge and gives everyone instant answers with sources.</p>
            <ul className="space-y-4">
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Universal Search</strong><p className="text-gray-500">One search across Slack, Docs, Notion, email, wikis</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Source Citations</strong><p className="text-gray-500">Every answer links to the original document</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Auto-Updating</strong><p className="text-gray-500">Knowledge base stays current as documents change</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Permission-Aware</strong><p className="text-gray-500">Respects access controls - no data leaks</p></div></li>
            </ul>
          </div>
          <div className="text-center"><Link href="/contact" className="bg-xenteck-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition inline-block">Get Company Brain</Link></div>
        </div>
      </section>
    </>
  );
}

import Head from 'next/head';
import Link from 'next/link';

export default function ContentEngine() {
  return (
    <>
      <Head><title>Authority Content Engine | XenTeck</title></Head>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-6xl mb-6 block">✍️</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Authority Content Engine</h1>
            <p className="text-gray-400 text-xl">Turn one idea into a month of content that sounds like you.</p>
          </div>
          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">The Problem</h2>
            <p className="text-gray-400 mb-4">Creating consistent content takes hours. Ghostwriters miss your voice. AI content sounds robotic. Your expertise stays locked in your head.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">4hrs</div><div className="text-gray-500 text-sm">avg time per quality post</div></div>
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">62%</div><div className="text-gray-500 text-sm">say content feels inauthentic</div></div>
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">3x</div><div className="text-gray-500 text-sm">more leads from thought leadership</div></div>
            </div>
          </div>
          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">The Solution</h2>
            <p className="text-gray-400 mb-6">Content Engine learns your voice, extracts your expertise, and produces authentic content across all channels.</p>
            <ul className="space-y-4">
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">\u2713</span><div><strong className="text-white">Voice Cloning</strong><p className="text-gray-500">AI trained on YOUR writing style and terminology</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">\u2713</span><div><strong className="text-white">Multi-Format Output</strong><p className="text-gray-500">LinkedIn, blog, email, video scripts from one idea</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">\u2713</span><div><strong className="text-white">SEO Optimization</strong><p className="text-gray-500">Built-in keyword research and optimization</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">\u2713</span><div><strong className="text-white">Content Calendar</strong><p className="text-gray-500">Automated scheduling and publishing workflow</p></div></li>
            </ul>
          </div>
          <div className="text-center"><Link href="/contact" className="bg-xenteck-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition inline-block">Get Content Engine</Link></div>
        </div>
      </section>
    </>
  );
}

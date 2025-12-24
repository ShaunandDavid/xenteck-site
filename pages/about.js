import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head><title>About | XenTeck</title></Head>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Built by Operators,<br />For Operators</h1>
            <p className="text-gray-400 text-xl">We are not another tech company selling software. We are business owners who got tired of losing leads.</p>
          </div>
          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-400 mb-4">XenTeck was born from frustration. We were running businesses, generating leads, and watching them slip through the cracks because we could not respond fast enough.</p>
            <p className="text-gray-400">So we built what we needed: AI systems that respond instantly, answer phones 24/7, and never let a lead go cold.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Shaun Carriveau</h3>
              <p className="text-xenteck-blue mb-4">CEO & Co-Founder</p>
              <p className="text-gray-400">Builder. Operator. Believes every business deserves enterprise-grade automation without the enterprise price tag.</p>
            </div>
            <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">DJ Carriveau</h3>
              <p className="text-xenteck-blue mb-4">COO & Co-Founder</p>
              <p className="text-gray-400">Technical architect. Turns complex automation dreams into deployed, working systems.</p>
            </div>
          </div>
          <div className="text-center"><p className="text-gray-400 mb-6">A division of LevEL 7 Media LLC</p><Link href="/contact" className="bg-xenteck-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition inline-block">Let Us Talk</Link></div>
        </div>
      </section>
    </>
  );
}
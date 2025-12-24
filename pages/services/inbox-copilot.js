import Head from 'next/head';
import Link from 'next/link';

export default function InboxCopilot() {
  return (
    <>
      <Head><title>Executive Inbox Copilot | XenTeck</title></Head>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-6xl mb-6 block">📧</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Executive Inbox Copilot</h1>
            <p className="text-gray-400 text-xl">Reclaim your inbox. AI handles the noise so you handle what matters.</p>
          </div>
          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">The Problem</h2>
            <p className="text-gray-400 mb-4">Executives spend 28% of their workweek on email. Important messages get buried. Response delays damage relationships. Inbox zero is a myth.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">28%</div><div className="text-gray-500 text-sm">of work week on email</div></div>
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">121</div><div className="text-gray-500 text-sm">emails received per day</div></div>
              <div className="text-center p-4 bg-xenteck-dark rounded-lg"><div className="text-3xl font-bold text-red-500 mb-2">2.5hrs</div><div className="text-gray-500 text-sm">daily email processing</div></div>
            </div>
          </div>
          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">The Solution</h2>
            <p className="text-gray-400 mb-6">Inbox Copilot triages, drafts responses, and handles routine correspondence in your voice.</p>
            <ul className="space-y-4">
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Smart Triage</strong><p className="text-gray-500">AI prioritizes what needs your attention vs delegation</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Draft Responses</strong><p className="text-gray-500">Pre-written replies in your tone, ready to send</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Auto-Delegation</strong><p className="text-gray-500">Routine requests forwarded to the right team member</p></div></li>
              <li className="flex items-start"><span className="text-xenteck-blue mr-3 text-xl">✓</span><div><strong className="text-white">Meeting Scheduling</strong><p className="text-gray-500">AI handles back-and-forth to book meetings</p></div></li>
            </ul>
          </div>
          <div className="text-center"><Link href="/contact" className="bg-xenteck-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition inline-block">Get Inbox Copilot</Link></div>
        </div>
      </section>
    </>
  );
}

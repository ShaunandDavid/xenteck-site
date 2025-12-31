import Head from 'next/head';
import Link from 'next/link';

export default function Terms() {
  return (
    <>
      <Head><title>Terms of Service | XenTeck</title></Head>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-gray-400">Last updated: December 31, 2025</p>
          </div>

          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
            <p className="text-gray-400 mb-4">By accessing or using XenTeck services (operated by LevEL 7 Media LLC), including our speed-to-lead automation systems, you agree to be bound by these Terms of Service.</p>
          </div>

          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Service Description</h2>
            <p className="text-gray-400 mb-4">XenTeck provides speed-to-lead automation services that help businesses respond to leads instantly. When a potential customer submits a lead form powered by XenTeck, our system immediately sends an SMS text message and/or email with a booking calendar link.</p>
          </div>

          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-xenteck-blue">SMS Text Messaging Terms</h2>
            <p className="text-gray-400 mb-4">By submitting a lead form powered by XenTeck and providing your mobile phone number with consent, you agree to:</p>
            <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
              <li>Receive SMS text messages related to your inquiry</li>
              <li>Accept that message and data rates may apply</li>
              <li>Acknowledge that message frequency varies based on interaction</li>
            </ul>
            <div className="bg-gray-900 border border-xenteck-blue rounded-lg p-4">
              <p className="text-white font-semibold mb-2">Opt-Out Instructions:</p>
              <p className="text-gray-300">You may opt out of SMS messages at any time by replying <strong className="text-xenteck-blue">STOP</strong> to any message you receive. Upon opting out, you will receive one confirmation message and no further SMS messages will be sent.</p>
            </div>
          </div>

          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
            <p className="text-gray-400 mb-4">When using our services, you agree to:</p>
            <ul className="text-gray-400 list-disc list-inside space-y-2">
              <li>Provide accurate and current information</li>
              <li>Use the services only for lawful purposes</li>
              <li>Not attempt to interfere with the proper functioning of the services</li>
            </ul>
          </div>

          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-gray-400">XenTeck and LevEL 7 Media LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the services, including but not limited to SMS message delivery failures or delays.</p>
          </div>

          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-gray-400">We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of the services constitutes acceptance of any modified terms.</p>
          </div>

          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-gray-400 mb-4">For questions about these Terms, or to receive help with SMS messages, contact us:</p>
            <p className="text-gray-400"><a href="mailto:admin@xenteck.com" className="text-xenteck-blue hover:underline">admin@xenteck.com</a></p>
            <p className="text-gray-400 mt-4">XenTeck is a service of LevEL 7 Media LLC</p>
          </div>

          <div className="text-center">
            <Link href="/privacy" className="text-xenteck-blue hover:underline mr-6">Privacy Policy</Link>
            <Link href="/" className="text-gray-400 hover:text-white">← Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
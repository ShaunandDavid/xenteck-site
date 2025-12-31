import Head from 'next/head';
import Link from 'next/link';

export default function Privacy() {
  return (
    <>
      <Head><title>Privacy Policy | XenTeck</title></Head>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400">Last updated: December 31, 2025</p>
          </div>

          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-400 mb-4">XenTeck, a service of LevEL 7 Media LLC (&quot;we&#39;, &quot;us&#39;, or &quot;our&quot;), operates speed-to-lead automation services that help businesses respond to leads instantly via SMS and email. This Privacy Policy explains how we collect, use, and protect your information.</p>
          </div>

          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-gray-400 mb-4">When you submit a lead form powered by XenTeck, we may collect:</p>
            <ul className="text-gray-400 list-disc list-inside space-y-2">
              <li>Name and contact information</li>
              <li>Mobile phone number</li>
              <li>Email address</li>
              <li>Inquiry details and preferences</li>
            </ul>
          </div>

          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-xenteck-blue">SMS &amp; Text Messaging Consent</h2>
            <p className="text-gray-400 mb-4">By providing your mobile phone number and checking the consent box on a lead form powered by XenTeck, you agree to receive SMS text messages related to your inquiry. These messages may include:</p>
            <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
              <li>Confirmation of your inquiry</li>
              <li>Booking links and appointment reminders</li>
              <li>Follow-up communications from the business you contacted</li>
            </ul>
            <div className="bg-gray-900 border border-xenteck-blue rounded-lg p-4">
              <p className="text-white font-semibold mb-2">Important SMS Information:</p>
              <ul className="text-gray-300 space-y-2">
                <li>• Message and data rates may apply</li>
                <li>• Message frequency varies based on your interaction (normally 1-5 messages per inquiry)</li>
                <li>• Reply <strong className="text-xenteck-blue">STOP</strong> to any message to opt out and stop receiving messages</li>
                <li>• Reply <strong className="text-xenteck-blue">HELP</strong> for assistance or contact us at admin@xenteck.com</li>
              </ul>
            </div>
          </div>

          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-xenteck-blue">We Do Not Share or Sell Your Phone Number</h2>
            <p className="text-gray-400">Your mobile phone number will never be shared, sold, or rented to third parties for marketing purposes. We only use your phone number to facilitate communication between you and the business you contacted.</p>
          </div>

          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-gray-400">We use your information solely to:</p>
            <ul className="text-gray-400 list-disc list-inside space-y-2">
              <li>Send you immediate notifications about your inquiry</li>
              <li>Connect you with the business you requested information from</li>
              <li>Improve our services and user experience</li>
            </ul>
          </div>

          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-gray-400">We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
          </div>

          <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400 mb-4">If you have any questions about this Privacy Policy or our SMS practices, please contact us:</p>
            <p className="text-gray-400"><a href="mailto:admin@xenteck.com" className="text-xenteck-blue hover:underline">admin@xenteck.com</a></p>
            <p className="text-gray-400 mt-4">XenTeck is a service of LevEL 7 Media LLC</p>
          </div>

          <div className="text-center">
            <Link href="/terms" className="text-xenteck-blue hover:underline mr-6">Terms of Service</Link>
            <Link href="/" className="text-gray-400 hover:text-white">← Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
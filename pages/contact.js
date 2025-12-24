import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const handleSubmit = (e) => { e.preventDefault(); window.location.href = `mailto:admin@xenteck.com?subject=XenTeck Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}`; };

  return (
    <>
      <Head><title>Contact | XenTeck</title></Head>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let Us Build Your Revenue Defense System</h1>
            <p className="text-gray-400 text-xl">Ready to respond faster, convert more, and never miss another lead?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="mb-6"><h3 className="text-white font-semibold mb-2">Email</h3><a href="mailto:admin@xenteck.com" className="text-xenteck-blue hover:underline">admin@xenteck.com</a></div>
              <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">What Happens Next?</h3>
                <ol className="space-y-3 text-gray-400">
                  <li className="flex items-start"><span className="text-xenteck-blue mr-3 font-bold">1.</span>We reach out within 24 hours</li>
                  <li className="flex items-start"><span className="text-xenteck-blue mr-3 font-bold">2.</span>We audit your lead response process</li>
                  <li className="flex items-start"><span className="text-xenteck-blue mr-3 font-bold">3.</span>We show you the revenue you are leaving on the table</li>
                  <li className="flex items-start"><span className="text-xenteck-blue mr-3 font-bold">4.</span>If it is a fit, we deploy within 48 hours</li>
                </ol>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="bg-xenteck-gray border border-gray-800 rounded-xl p-8">
              <div className="space-y-6">
                <div><label className="block text-white font-semibold mb-2">Name</label><input type="text" required className="w-full bg-xenteck-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-xenteck-blue focus:outline-none" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} /></div>
                <div><label className="block text-white font-semibold mb-2">Email</label><input type="email" required className="w-full bg-xenteck-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-xenteck-blue focus:outline-none" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} /></div>
                <div><label className="block text-white font-semibold mb-2">Company</label><input type="text" className="w-full bg-xenteck-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-xenteck-blue focus:outline-none" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} /></div>
                <div><label className="block text-white font-semibold mb-2">How can we help?</label><textarea rows="4" className="w-full bg-xenteck-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-xenteck-blue focus:outline-none" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea></div>
                <button type="submit" className="w-full bg-xenteck-blue hover:bg-blue-600 text-white py-4 rounded-lg font-semibold transition">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
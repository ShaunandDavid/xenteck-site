import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', company: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      // Make.com webhook - Speed-to-Lead demo
      const webhookUrl = 'https://hook.us2.make.com/YOUR_WEBHOOK_ID_HERE';
      
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors', // Make.com webhooks need this
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          source: 'xenteck-website',
          timestamp: new Date().toISOString()
        })
      });
      
      setStatus('success');
      setFormData({ name: '', phone: '', company: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      <Head><title>Contact | XenTeck</title></Head>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Your Revenue Defense System</h1>
            <p className="text-gray-400 text-xl">Drop your info and watch how fast we move.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-2">Call Our AI</h3>
                <a href="tel:+1XXXXXXXXXX" className="text-xenteck-blue hover:underline text-lg flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (XXX) XXX-XXXX
                </a>
                <p className="text-gray-500 text-sm mt-1">Our Voice AI is standing by 24/7</p>
              </div>
              
              <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">What Happens Next?</h3>
                <ol className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-xenteck-blue mr-3 font-bold">1.</span>
                    <span>We contact you with a booking link in under 5 seconds <span className="text-xenteck-blue">(try it, it's fun)</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xenteck-blue mr-3 font-bold">2.</span>
                    We audit your lead response process
                  </li>
                  <li className="flex items-start">
                    <span className="text-xenteck-blue mr-3 font-bold">3.</span>
                    We show you the revenue you're leaving on the table
                  </li>
                  <li className="flex items-start">
                    <span className="text-xenteck-blue mr-3 font-bold">4.</span>
                    If it's a fit, we deploy within 48 hours
                  </li>
                </ol>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-xenteck-gray border border-gray-800 rounded-xl p-8">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Check Your Phone!</h3>
                  <p className="text-gray-400">Our Speed-to-Lead just fired. You should have a text within 5 seconds.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Your name"
                      className="w-full bg-xenteck-dark border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-xenteck-blue focus:outline-none" 
                      value={formData.name} 
                      onChange={(e) => setFormData({...formData, name: e.target.value})} 
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="(555) 123-4567"
                      className="w-full bg-xenteck-dark border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-xenteck-blue focus:outline-none" 
                      value={formData.phone} 
                      onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                    />
                    <p className="text-gray-500 text-xs mt-1">We'll text you a booking link in under 5 seconds</p>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Company</label>
                    <input 
                      type="text" 
                      placeholder="Your company"
                      className="w-full bg-xenteck-dark border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-xenteck-blue focus:outline-none" 
                      value={formData.company} 
                      onChange={(e) => setFormData({...formData, company: e.target.value})} 
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">How can we help?</label>
                    <textarea 
                      rows="4" 
                      placeholder="Tell us about your lead response challenges..."
                      className="w-full bg-xenteck-dark border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-xenteck-blue focus:outline-none resize-none" 
                      value={formData.message} 
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className="w-full bg-xenteck-blue hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Test Our Speed
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </>
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-400 text-center text-sm">Something went wrong. Try again or call us directly.</p>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

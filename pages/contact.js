import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', website: '', headache: '' });
  const [status, setStatus] = useState('idle');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const webhookUrl = 'https://hook.us2.make.com/kwah73cbhkfe4l9580cmh4jyvjd31h2x';
      
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          website: formData.website,
          headache: formData.headache,
          source: 'xenteck-website',
          timestamp: new Date().toISOString()
        })
      });
      
      setStatus('success');
      setFormData({ name: '', email: '', website: '', headache: '' });
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
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <a href="mailto:admin@xenteck.com" className="text-xenteck-blue hover:underline">admin@xenteck.com</a>
              </div>
              
              <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">What Happens Next?</h3>
                <ol className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-xenteck-blue mr-3 font-bold">1.</span>
                    <span>We contact you in under 5 seconds <span className="text-xenteck-blue">(try it, it's fun)</span></span>
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
                  <h3 className="text-2xl font-bold text-white mb-2">Check Your Inbox!</h3>
                  <p className="text-gray-400">Our Speed-to-Lead just fired. You should have an email within seconds.</p>
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
                    <label className="block text-white font-semibold mb-2">Email</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="you@company.com"
                      className="w-full bg-xenteck-dark border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-xenteck-blue focus:outline-none" 
                      value={formData.email} 
                      onChange={(e) => setFormData({...formData, email: e.target.value})} 
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Website</label>
                    <input 
                      type="text" 
                      placeholder="yourcompany.com"
                      className="w-full bg-xenteck-dark border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-xenteck-blue focus:outline-none" 
                      value={formData.website} 
                      onChange={(e) => setFormData({...formData, website: e.target.value})} 
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">What's your biggest lead headache?</label>
                    <textarea 
                      rows="4" 
                      required
                      placeholder="Tell us what's costing you deals..."
                      className="w-full bg-xenteck-dark border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-xenteck-blue focus:outline-none resize-none" 
                      value={formData.headache} 
                      onChange={(e) => setFormData({...formData, headache: e.target.value})}
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
                    <p className="text-red-400 text-center text-sm">Something went wrong. Try again or email us directly.</p>
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

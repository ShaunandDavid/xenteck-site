import Link from 'next/link';
import Head from 'next/head';
import ServiceCard from '../components/ServiceCard';

export default function Home() {
  const services = [
    { title: "Speed-to-Lead", description: "Sub-5-second SMS response to every form fill. 391% higher conversion rate.", icon: "\u26A1", href: "/services/speed-to-lead", features: ["Instant SMS response", "24/7 automation", "CRM integration"] },
    { title: "AI Voice Agent", description: "Never miss a call. AI answers, qualifies, and books meetings while you sleep.", icon: "\uD83C\uDF99", href: "/services/voice-agent", features: ["24/7 call handling", "Lead qualification", "Appointment booking"] },
    { title: "Pipeline Co-Pilot", description: "AI that monitors your deals, predicts outcomes, and tells you what to do next.", icon: "\uD83D\uDCCA", href: "/services/pipeline-copilot", features: ["Deal intelligence", "Next-action prompts", "Risk alerts"] },
    { title: "Agentic SDR", description: "Autonomous outbound prospecting. AI finds, researches, and emails your ideal customers.", icon: "\uD83E\uDD16", href: "/services/agentic-sdr", features: ["Lead discovery", "Personalized outreach", "Auto follow-up"] }
  ];

  return (
    <>
      <Head>
        <title>XenTeck | AI Automation That Never Sleeps</title>
        <meta name="description" content="Revenue Defense Systems - AI-powered automation that captures every lead." />
      </Head>
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-xenteck-blue/10 to-transparent"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">Stop Losing Leads.<br /><span className="gradient-text">Start Closing Deals.</span></h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">AI-powered automation that responds to every lead in under 5 seconds, answers your phone 24/7, and fills your pipeline while you focus on closing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-xenteck-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition">Book a Demo</Link>
            <Link href="/services" className="border border-gray-600 hover:border-gray-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition">See How It Works</Link>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-xenteck-gray">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl md:text-5xl font-bold gradient-text mb-2">391%</div><div className="text-gray-400">Higher Conversion</div></div>
            <div><div className="text-4xl md:text-5xl font-bold gradient-text mb-2">&lt;5s</div><div className="text-gray-400">Response Time</div></div>
            <div><div className="text-4xl md:text-5xl font-bold gradient-text mb-2">24/7</div><div className="text-gray-400">Coverage</div></div>
            <div><div className="text-4xl md:text-5xl font-bold gradient-text mb-2">78%</div><div className="text-gray-400">First Responder Wins</div></div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Complete Revenue Defense System</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Four AI-powered solutions that work together to capture, qualify, and convert every opportunity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{services.map((service, index) => (<ServiceCard key={index} {...service} />))}</div>
        </div>
      </section>
      <section className="py-20 px-4 bg-gradient-to-r from-xenteck-blue/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Never Miss Another Lead?</h2>
          <p className="text-gray-400 text-lg mb-8">Join businesses that respond faster, convert more, and scale without hiring.</p>
          <Link href="/contact" className="bg-xenteck-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition inline-block">Get Started Today</Link>
        </div>
      </section>
    </>
  );
}
import Head from 'next/head';
import Link from 'next/link';
import HeroLanding from '../components/HeroLanding';

export default function Home() {
  const services = [
    { 
      title: "Speed-to-Lead", 
      description: "Sub-5-second SMS response to every form fill. 391% higher conversion rate.", 
      href: "/services/speed-to-lead", 
      features: ["Instant SMS response", "24/7 automation", "CRM integration"],
      icon: (
        <svg className="w-10 h-10 text-xenteck-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      title: "AI Voice Agent", 
      description: "Never miss a call. AI answers, qualifies, and books meetings while you sleep.", 
      href: "/services/voice-agent", 
      features: ["24/7 call handling", "Lead qualification", "Appointment booking"],
      icon: (
        <svg className="w-10 h-10 text-xenteck-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    { 
      title: "Pipeline Co-Pilot", 
      description: "AI that monitors your deals, predicts outcomes, and tells you what to do next.", 
      href: "/services/pipeline-copilot", 
      features: ["Deal intelligence", "Next-action prompts", "Risk alerts"],
      icon: (
        <svg className="w-10 h-10 text-xenteck-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    { 
      title: "Agentic SDR", 
      description: "Autonomous outbound prospecting. AI finds, researches, and emails your ideal customers.", 
      href: "/services/agentic-sdr", 
      features: ["Lead discovery", "Personalized outreach", "Auto follow-up"],
      icon: (
        <svg className="w-10 h-10 text-xenteck-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <Head>
        <title>XenTeck | AI Automation That Never Sleeps</title>
        <meta name="description" content="Revenue Defense Systems - AI-powered automation that captures every lead in under 5 seconds." />
      </Head>
      
      {/* Full-screen Hero */}
      <HeroLanding />

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-xenteck-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Your Revenue Defense System</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Four AI-powered solutions working together to capture, qualify, and convert every opportunity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Link href={service.href} key={index}>
                <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-8 card-hover cursor-pointer h-full group">
                  <div className="mb-5 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-5">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-gray-500 text-sm flex items-center">
                        <svg className="w-4 h-4 text-xenteck-blue mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-xenteck-blue/10 via-transparent to-xenteck-blue/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Stop Losing Leads?</h2>
          <p className="text-gray-400 text-xl mb-10">Join businesses that respond faster, convert more, and scale without hiring.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-xenteck-blue hover:bg-blue-500 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,102,255,0.4)]">
            Book Your Demo
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

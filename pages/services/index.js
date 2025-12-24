import Head from 'next/head';
import ServiceCard from '../../components/ServiceCard';

export default function Services() {
  const services = [
    { title: "Speed-to-Lead", description: "Sub-5-second SMS response to every form fill. Research shows 391% higher conversion when you respond in under 1 minute. 78% of deals go to the first responder.", icon: "\u26A1", href: "/services/speed-to-lead", features: ["Instant SMS response", "Personalized AI messages", "CRM integration", "Performance guarantee"] },
    { title: "AI Voice Agent", description: "Never miss a call again. Our AI answers your phone 24/7, qualifies leads in real-time, and books meetings directly on your calendar.", icon: "\uD83C\uDF99", href: "/services/voice-agent", features: ["24/7 call answering", "Natural conversation", "Lead qualification", "Calendar booking"] },
    { title: "Pipeline Co-Pilot", description: "AI that lives inside your CRM, monitors every deal, predicts which will close, and tells you exactly what to do next.", icon: "\uD83D\uDCCA", href: "/services/pipeline-copilot", features: ["Deal health scoring", "Next-action recommendations", "Risk alerts", "Weekly briefings"] },
    { title: "Agentic SDR", description: "Autonomous outbound prospecting. AI identifies your ideal customers, researches them, writes personalized emails, and follows up automatically.", icon: "\uD83E\uDD16", href: "/services/agentic-sdr", features: ["Lead discovery", "Company research", "Personalized outreach", "Automated follow-up"] }
  ];

  return (
    <>
      <Head><title>Services | XenTeck</title></Head>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Revenue Defense Systems</h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">Four AI-powered solutions designed to capture every lead, respond instantly, and convert opportunities around the clock.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{services.map((s, i) => <ServiceCard key={i} {...s} />)}</div>
        </div>
      </section>
    </>
  );
}
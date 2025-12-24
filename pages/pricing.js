import Head from 'next/head';
import Link from 'next/link';

export default function Pricing() {
  const tiers = [
    { name: "Growth", price: "$997", setup: "$1,500", description: "Perfect for businesses ready to stop losing leads", features: ["Speed-to-Lead (SMS)", "Sub-5-second response guarantee", "CRM integration", "Performance dashboard", "Email support", "Up to 500 leads/month"], popular: false },
    { name: "Scale", price: "$1,997", setup: "$2,500", description: "Full coverage - SMS, voice, and pipeline intelligence", features: ["Everything in Growth", "AI Voice Agent (24/7)", "Pipeline Co-Pilot", "Lead qualification", "Appointment booking", "Priority support", "Up to 1,500 leads/month"], popular: true },
    { name: "Enterprise", price: "Custom", setup: "Custom", description: "Full stack including autonomous outbound", features: ["Everything in Scale", "Agentic SDR", "Custom integrations", "Dedicated success manager", "SLA guarantee", "Unlimited leads"], popular: false }
  ];

  return (
    <>
      <Head><title>Pricing | XenTeck</title></Head>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-gray-400 text-xl">No hidden fees. No long contracts. Just results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div key={index} className={`bg-xenteck-gray border rounded-xl p-8 relative ${tier.popular ? 'border-xenteck-blue' : 'border-gray-800'}`}>
                {tier.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"><span className="bg-xenteck-blue text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span></div>}
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-500 mb-6">{tier.description}</p>
                <div className="mb-6"><span className="text-4xl font-bold text-white">{tier.price}</span>{tier.price !== "Custom" && <span className="text-gray-500">/month</span>}</div>
                {tier.setup !== "Custom" && <p className="text-gray-500 text-sm mb-6">+ {tier.setup} one-time setup</p>}
                <ul className="space-y-3 mb-8">{tier.features.map((f, i) => <li key={i} className="flex items-center text-gray-300"><span className="text-xenteck-blue mr-2">\u2713</span>{f}</li>)}</ul>
                <Link href="/contact" className={`block text-center py-3 rounded-lg font-semibold transition ${tier.popular ? 'bg-xenteck-blue hover:bg-blue-600 text-white' : 'border border-gray-600 hover:border-gray-400 text-white'}`}>Get Started</Link>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center"><p className="text-gray-400 mb-4">Know someone who needs this?</p><p className="text-white text-lg">Earn <span className="text-xenteck-blue font-bold">$300</span> for every referral that becomes a client.</p></div>
        </div>
      </section>
    </>
  );
}
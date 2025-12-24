import Link from 'next/link';

export default function ServiceCard({ title, description, icon, href, features }) {
  return (
    <Link href={href}>
      <div className="bg-xenteck-gray border border-gray-800 rounded-xl p-6 card-hover cursor-pointer h-full">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        {features && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-gray-500 text-sm flex items-center">
                <span className="text-xenteck-blue mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
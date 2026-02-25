import React from 'react';
import Link from '@docusaurus/Link';

const features = [
  {
    title: 'Hooks & Middleware',
    description: 'Add cross-cutting concerns — logging, OpenTelemetry traces, validation, and metrics — through a standard hooks interface.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    color: 'purple',
  },
  {
    title: 'Evaluation Context',
    description: 'Pass rich contextual data (user ID, email, plan, location) for targeted flag evaluations across any provider.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    color: 'blue',
  },
  {
    title: 'Multi-Provider',
    description: 'Run multiple feature flag systems simultaneously through a single unified SDK. Perfect for migrations.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    color: 'green',
  },
  {
    title: 'Events & Reactivity',
    description: 'React to provider changes, flag configuration updates, and readiness events in real time with the event system.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: 'yellow',
  },
  {
    title: 'Domain Scoping',
    description: 'Isolate flag evaluation contexts for different domains and services within a single application.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
      </svg>
    ),
    color: 'indigo',
  },
  {
    title: 'Open Specification',
    description: 'Backed by a formal spec under the CNCF. Every SDK implements the same contract, ensuring consistent behavior.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    color: 'pink',
  },
];

const colorMap: Record<string, { bg: string; iconBg: string; iconText: string }> = {
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-950/20',
    iconBg: 'bg-purple-100 dark:bg-purple-900/50',
    iconText: 'text-purple-600 dark:text-purple-400',
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-950/20',
    iconBg: 'bg-blue-100 dark:bg-blue-900/50',
    iconText: 'text-blue-600 dark:text-blue-400',
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-950/20',
    iconBg: 'bg-green-100 dark:bg-green-900/50',
    iconText: 'text-green-600 dark:text-green-400',
  },
  yellow: {
    bg: 'bg-yellow-50 dark:bg-yellow-950/20',
    iconBg: 'bg-yellow-100 dark:bg-yellow-900/50',
    iconText: 'text-yellow-600 dark:text-yellow-400',
  },
  indigo: {
    bg: 'bg-indigo-50 dark:bg-indigo-950/20',
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/50',
    iconText: 'text-indigo-600 dark:text-indigo-400',
  },
  pink: {
    bg: 'bg-pink-50 dark:bg-pink-950/20',
    iconBg: 'bg-pink-100 dark:bg-pink-900/50',
    iconText: 'text-pink-600 dark:text-pink-400',
  },
};

function KeyFeatures() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-16 md:py-24 border-t border-gray-200 dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/40 rounded-full mb-4">
              Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tighter mb-4">
              More than just flag evaluation
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              OpenFeature provides a complete framework for feature flag management,
              with powerful primitives that work across all providers.
            </p>
          </div>

          {/* Feature cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const colors = colorMap[feature.color] || colorMap.purple;
              return (
                <div
                  key={feature.title}
                  className={`rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 hover:shadow-lg ${colors.bg}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.iconBg} ${colors.iconText} mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Link to full docs */}
          <div className="text-center mt-12" data-aos="fade-up">
            <Link
              to="/docs/reference/intro"
              className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
            >
              Explore all features in the docs &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;

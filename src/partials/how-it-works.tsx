import React from 'react';
import Link from '@docusaurus/Link';

const steps = [
  {
    number: '01',
    title: 'Install the SDK',
    description: 'Add the OpenFeature SDK for your language. Available for JavaScript, Java, Go, Python, .NET, PHP, Ruby, Kotlin, Swift, and more.',
    code: 'npm install @openfeature/server-sdk',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Set a Provider',
    description: 'Configure any provider — commercial (LaunchDarkly, Split, Statsig, etc.), open source (flagd, Flipt), or build your own.',
    code: 'OpenFeature.setProvider(new FlagdProvider());',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Evaluate Flags',
    description: 'Use the unified API to evaluate feature flags. Add hooks for logging, telemetry, and validation as needed.',
    code: 'const enabled = await client.getBooleanValue("my-flag", false);',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
      </svg>
    ),
  },
];

function HowItWorks() {
  return (
    <section className="relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900/50 pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="py-16 md:py-24">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">
              Quick Start
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tighter mb-4">
              Up and running in three steps
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Integrating OpenFeature into your application takes just a few minutes.
            </p>
          </div>

          {/* Steps */}
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:gap-12">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative flex flex-col md:flex-row items-start gap-6"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Step number & connector line */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-600 text-white font-bold text-lg shadow-lg shadow-purple-600/25">
                      {step.icon}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block w-px h-full bg-gradient-to-b from-purple-300 dark:from-purple-700 to-transparent mt-2" />
                    )}
                  </div>

                  {/* Step content */}
                  <div className="flex-1 pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/40 px-2 py-0.5 rounded">
                        STEP {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>
                    {/* Code snippet */}
                    <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">Terminal</span>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3">
                        <code className="text-sm font-mono text-purple-700 dark:text-purple-300">{step.code}</code>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12" data-aos="fade-up">
            <Link
              className="btn text-white hover:text-white bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-600/25 transition-all duration-200"
              to="/docs/tutorials/five-minutes-to-feature-flags"
            >
              Follow the Full Tutorial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

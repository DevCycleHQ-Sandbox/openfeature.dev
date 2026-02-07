import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

function HeroHome() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-full bg-gradient-to-b from-purple-100/40 via-transparent to-transparent dark:from-purple-900/20 dark:via-transparent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* CNCF Badge */}
          <div className="flex justify-center mb-6" data-aos="fade-down">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/40 border border-purple-200 dark:border-purple-700/50">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-purple-800 dark:text-purple-200">
                CNCF Incubating Project
              </span>
            </div>
          </div>

          {/* Main heading */}
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter mb-6"
              data-aos="fade-up"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 dark:from-purple-400 dark:via-purple-300 dark:to-blue-400">
                One API for Feature Flags.
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                Any Provider. Any Language.
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              OpenFeature is an open standard for feature flag management.
              Write your feature flags once with a vendor-agnostic API,
              then plug in any provider — no code rewrites needed.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="200">
              <Link
                className="btn text-white hover:text-white bg-purple-600 hover:bg-purple-700 w-full sm:w-auto shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 transition-all duration-200"
                to="/docs/tutorials/five-minutes-to-feature-flags"
              >
                Get Started in 5 Minutes
              </Link>
              <Link
                className="btn text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 w-full sm:w-auto transition-all duration-200"
                to="/docs/reference/intro"
              >
                Read the Docs
              </Link>
              <Link
                className="btn text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 w-full sm:w-auto transition-all duration-200"
                to="https://github.com/open-feature"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                View on GitHub
              </Link>
            </div>

            {/* Interactive code preview */}
            <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-purple-900/10 dark:shadow-purple-900/30 border border-gray-200 dark:border-gray-700">
                {/* Code editor header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2 font-mono">app.ts</span>
                </div>
                {/* Code content */}
                <div className="bg-gray-50 dark:bg-gray-900 p-5 text-left font-mono text-sm leading-relaxed overflow-x-auto">
                  <div className="text-gray-500 dark:text-gray-500">{'// Set your provider — swap anytime, zero code changes'}</div>
                  <div>
                    <span className="text-purple-600 dark:text-purple-400">OpenFeature</span>
                    <span className="text-gray-700 dark:text-gray-300">.</span>
                    <span className="text-blue-600 dark:text-blue-400">setProvider</span>
                    <span className="text-gray-700 dark:text-gray-300">(</span>
                    <span className="text-purple-600 dark:text-purple-400">new</span>
                    <span className="text-yellow-600 dark:text-yellow-400"> MyProvider</span>
                    <span className="text-gray-700 dark:text-gray-300">());</span>
                  </div>
                  <div className="mt-3 text-gray-500 dark:text-gray-500">{'// Get a client and evaluate flags'}</div>
                  <div>
                    <span className="text-purple-600 dark:text-purple-400">const</span>
                    <span className="text-gray-700 dark:text-gray-300"> client = </span>
                    <span className="text-purple-600 dark:text-purple-400">OpenFeature</span>
                    <span className="text-gray-700 dark:text-gray-300">.</span>
                    <span className="text-blue-600 dark:text-blue-400">getClient</span>
                    <span className="text-gray-700 dark:text-gray-300">();</span>
                  </div>
                  <div className="mt-3">
                    <span className="text-purple-600 dark:text-purple-400">const</span>
                    <span className="text-gray-700 dark:text-gray-300"> showBanner = </span>
                    <span className="text-purple-600 dark:text-purple-400">await</span>
                    <span className="text-gray-700 dark:text-gray-300"> client.</span>
                    <span className="text-blue-600 dark:text-blue-400">getBooleanValue</span>
                    <span className="text-gray-700 dark:text-gray-300">(</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-600 dark:text-green-400">{'"new-banner"'}</span>
                    <span className="text-gray-700 dark:text-gray-300">, </span>
                    <span className="text-orange-600 dark:text-orange-400">false</span>
                  </div>
                  <div>
                    <span className="text-gray-700 dark:text-gray-300">);</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;

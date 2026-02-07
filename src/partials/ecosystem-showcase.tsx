import React from 'react';
import Link from '@docusaurus/Link';
import { PROVIDERS } from '@site/src/datasets/providers';
import { ECOSYSTEM_SDKS } from '@site/src/datasets/sdks/ecosystem';

const featuredProviders = PROVIDERS.filter((provider) => !provider.excludeFromLandingPage).slice(0, 18);
const sdks = ECOSYSTEM_SDKS.filter((sdk) => sdk.href.startsWith('/'));

function EcosystemShowcase() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-16 md:py-24 border-t border-gray-200 dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/40 rounded-full mb-4">
              Ecosystem
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tighter mb-4">
              Works with your favorite tools
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              30+ providers and 10+ language SDKs — and growing every month.
              Built with the industry, backed by the community.
            </p>
          </div>

          {/* Provider logos grid */}
          <div className="mb-16">
            <h3 className="text-center text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-8" data-aos="fade-up">
              Supported Providers
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              {featuredProviders.map((provider) => {
                const Icon = provider.logo;
                return (
                  <Link
                    key={provider.name}
                    to={encodeURI(`/ecosystem?instant_search[refinementList][vendor][0]=${provider.name}`)}
                    title={provider.name}
                    aria-label={provider.name}
                    className="group flex items-center justify-center w-16 h-16 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-md transition-all duration-200"
                  >
                    <Icon className="w-8 h-8 fill-gray-600 dark:fill-gray-400 group-hover:fill-purple-600 dark:group-hover:fill-purple-400 transition-colors duration-200" />
                  </Link>
                );
              })}
            </div>
            <div className="text-center mt-6" data-aos="fade-up" data-aos-delay="200">
              <Link
                to="/ecosystem"
                className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
              >
                View all providers &rarr;
              </Link>
            </div>
          </div>

          {/* SDK language grid */}
          <div>
            <h3 className="text-center text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-8" data-aos="fade-up">
              Official SDKs
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              {sdks.map((sdk) => {
                const Icon = sdk.logo;
                return (
                  <Link
                    key={`${sdk.title}-${sdk.href}`}
                    to={sdk.href}
                    title={sdk.title}
                    aria-label={sdk.title}
                    className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-md transition-all duration-200 w-24"
                  >
                    <Icon className="w-8 h-8 fill-gray-600 dark:fill-gray-400 group-hover:fill-purple-600 dark:group-hover:fill-purple-400 transition-colors duration-200" />
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-center leading-tight">
                      {sdk.title.replace(' SDK', '')}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EcosystemShowcase;

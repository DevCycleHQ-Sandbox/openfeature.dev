import React from 'react';
import Link from '@docusaurus/Link';

function CTASection() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tighter mb-4">
              Ready to standardize your feature flags?
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-8">
              Join hundreds of teams already using OpenFeature. Get started with the tutorial,
              explore the specification, or connect with the community.
            </p>

            {/* CTA cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <Link
                to="/docs/tutorials/five-minutes-to-feature-flags"
                className="group rounded-xl p-6 border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 bg-purple-50/50 dark:bg-purple-950/20 transition-all duration-200 hover:shadow-lg no-underline"
              >
                <div className="text-3xl mb-3">
                  <svg className="w-8 h-8 mx-auto text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">Tutorial</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">5-minute quick start guide</p>
              </Link>

              <Link
                to="/specification"
                className="group rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 bg-blue-50/50 dark:bg-blue-950/20 transition-all duration-200 hover:shadow-lg no-underline"
              >
                <div className="text-3xl mb-3">
                  <svg className="w-8 h-8 mx-auto text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">Specification</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Read the open standard</p>
              </Link>

              <Link
                to="/community"
                className="group rounded-xl p-6 border-2 border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 bg-green-50/50 dark:bg-green-950/20 transition-all duration-200 hover:shadow-lg no-underline"
              >
                <div className="text-3xl mb-3">
                  <svg className="w-8 h-8 mx-auto text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">Community</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Join us on Slack &amp; GitHub</p>
              </Link>
            </div>

            {/* Secondary links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link
                to="https://cloud-native.slack.com/archives/C0344AANLA1"
                className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Join Slack
              </Link>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <Link
                to="https://github.com/open-feature"
                className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                GitHub
              </Link>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <Link
                to="https://twitter.com/openfeature"
                className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Twitter
              </Link>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <Link
                to="/blog"
                className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;

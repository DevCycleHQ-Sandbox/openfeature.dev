import React from 'react';
import Link from '@docusaurus/Link';
import CncfIconWhite from '@site/static/img/cncf-white.svg';
import LogoSvg from '@site/static/img/logo-no-fill.svg';

const stats = [
  { value: '30+', label: 'Providers' },
  { value: '11+', label: 'Language SDKs' },
  { value: '50+', label: 'Contributors' },
  { value: '5K+', label: 'GitHub Stars' },
];

function SocialProof() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="py-16 md:py-24">
          {/* Logo & CNCF */}
          <div className="text-center mb-12" data-aos="fade-up">
            <LogoSvg className="w-16 h-16 mx-auto mb-6 fill-white opacity-80" />
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tighter mb-4 text-white">
              Trusted by the cloud native community
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              OpenFeature is a{' '}
              <Link to="https://www.cncf.io/projects/openfeature/" className="text-purple-400 hover:text-purple-300 underline">
                CNCF Incubating project
              </Link>
              , the same foundation behind Kubernetes, Prometheus, and Envoy.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CNCF logo */}
          <div className="flex justify-center" data-aos="fade-up" data-aos-delay="200">
            <CncfIconWhite style={{ width: 280 }} className="opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialProof;

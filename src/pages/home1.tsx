import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import '../css/style.css';

const pillarCards = [
  {
    title: 'Ship faster without rewrites',
    description:
      'Adopt one stable API across your services and apps so teams can release safely while changing vendors at their own pace.',
    linkLabel: 'Read the spec',
    linkTo: '/specification',
  },
  {
    title: 'Connect to your existing stack',
    description:
      'Use community-built providers and hooks to integrate your current tools, observability pipelines, and rollout workflows.',
    linkLabel: 'Explore ecosystem',
    linkTo: '/ecosystem',
  },
  {
    title: 'Standardize across teams',
    description:
      'Give backend, frontend, and platform teams a shared language for feature flags so onboarding and governance become easier.',
    linkLabel: 'View docs',
    linkTo: '/docs/reference/intro',
  },
];

const trustSignals = [
  { label: 'Project stage', value: 'CNCF Incubating' },
  { label: 'Interface style', value: 'Vendor-agnostic API' },
  { label: 'Adoption path', value: 'Incremental migration' },
];

export default function Home1(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Home Iteration 1"
      description={`Iteration 1 demo for ${siteConfig.title}`}
    >
      <main className="min-h-screen bg-gradient-to-b from-indigo-950 via-gray-950 to-black text-white">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
          <div className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-400/30">
            Home iteration 1
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
            A conversion-focused OpenFeature home page concept
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl">
            This concept emphasizes a clear value proposition, fast wayfinding, and a short
            path from discovery to implementation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              className="btn text-white hover:text-white bg-indigo-600 hover:bg-indigo-500 sm:w-auto w-full"
              to="/docs/tutorials/five-minutes-to-feature-flags"
            >
              Start in 5 minutes
            </Link>
            <Link
              className="btn text-white hover:text-white bg-gray-700 hover:bg-gray-600 sm:w-auto w-full"
              to="/community"
            >
              Join the community
            </Link>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
          <div className="grid gap-6 md:grid-cols-3">
            {trustSignals.map((signal) => (
              <div key={signal.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm uppercase tracking-wide text-indigo-200">{signal.label}</div>
                <div className="mt-2 text-2xl font-semibold text-white">{signal.value}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
          <div className="grid gap-6 md:grid-cols-3">
            {pillarCards.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-7 flex flex-col"
              >
                <h2 className="text-2xl font-semibold">{pillar.title}</h2>
                <p className="mt-4 text-gray-300 grow">{pillar.description}</p>
                <Link className="mt-6 text-indigo-300 hover:text-indigo-200 font-semibold" to={pillar.linkTo}>
                  {pillar.linkLabel} →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

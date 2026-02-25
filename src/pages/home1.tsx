import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

const metricItems = [
  { label: 'SDKs and integrations', value: '30+' },
  { label: 'Providers and hooks', value: '80+' },
  { label: 'Community contributors', value: '500+' },
];

const journeyItems = [
  {
    title: 'Adopt once',
    detail: 'Integrate the OpenFeature API in your app and keep provider selection decoupled from product code.',
  },
  {
    title: 'Switch safely',
    detail: 'Move between in-house and vendor tooling without rewriting evaluation logic.',
  },
  {
    title: 'Scale confidently',
    detail: 'Share flagging patterns across teams, languages, and environments with one consistent contract.',
  },
];

export default function Home1(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Home iteration 1" description={siteConfig.customFields.description as string}>
      <main className="min-h-screen bg-slate-950 text-slate-100">
        <section className="mx-auto max-w-6xl px-4 pb-14 pt-20 sm:px-6 md:pt-28">
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950 p-8 md:p-12">
            <p className="mb-4 inline-flex rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-200">
              Home iteration 1
            </p>
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
              Build flags once. Run them everywhere.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              OpenFeature gives teams a single feature flagging contract that works across providers, SDKs, and
              environments.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="btn border-0 bg-violet-500 text-white hover:bg-violet-400 hover:text-white"
                to="/docs/reference/intro"
              >
                Explore docs
              </Link>
              <Link className="btn border border-slate-600 bg-slate-900 text-slate-100 hover:text-white" to="/ecosystem">
                Browse ecosystem
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-3 sm:px-6">
          {metricItems.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <p className="text-3xl font-bold text-violet-300">{metric.value}</p>
              <p className="mt-2 text-sm text-slate-300">{metric.label}</p>
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="mb-8 text-3xl font-semibold">A migration-friendly path for every team</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {journeyItems.map((journey) => (
              <article key={journey.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">{journey.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{journey.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          <div className="rounded-3xl border border-violet-700/30 bg-violet-900/20 p-8 md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Start with a five-minute walkthrough</h2>
              <p className="mt-2 text-slate-300">
                Use the quick tutorial to wire your first provider and start evaluating flags.
              </p>
            </div>
            <Link
              className="btn mt-5 border-0 bg-violet-500 text-white hover:bg-violet-400 hover:text-white md:mt-0"
              to="/docs/tutorials/five-minutes-to-feature-flags"
            >
              Start tutorial
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

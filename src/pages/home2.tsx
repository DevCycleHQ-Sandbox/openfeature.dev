import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import '../css/style.css';

const adoptionSteps = [
  {
    step: '01',
    title: 'Unify your feature flag interface',
    description:
      'Create a shared contract across services so teams can ship independently while reducing integration friction.',
  },
  {
    step: '02',
    title: 'Attach providers and hooks',
    description:
      'Connect observability, governance, and your preferred vendor without changing business logic throughout the codebase.',
  },
  {
    step: '03',
    title: 'Roll out with confidence',
    description:
      'Use progressive delivery and clear targeting to reduce release risk and avoid expensive rollback cycles.',
  },
  {
    step: '04',
    title: 'Scale standards org-wide',
    description:
      'Give every team consistent patterns for evaluation context, hooks, and flag lifecycle management.',
  },
];

const kpiCards = [
  { label: 'Migration effort', value: 'Low-risk path' },
  { label: 'Architecture fit', value: 'Client + server SDKs' },
  { label: 'Governance model', value: 'Community standard' },
];

export default function Home2(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Home Iteration 2"
      description={`Iteration 2 demo for ${siteConfig.title}`}
    >
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-14">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <div className="inline-flex rounded-full border border-emerald-300 bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-900 dark:border-emerald-600/40 dark:bg-emerald-900/30 dark:text-emerald-300">
                Home iteration 2
              </div>
              <h1 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                A narrative-driven homepage focused on the adoption journey
              </h1>
              <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
                This concept tells the OpenFeature story as a sequence of implementation steps for
                platform and application teams.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  className="btn text-white hover:text-white bg-emerald-600 hover:bg-emerald-500 sm:w-auto w-full"
                  to="/docs/reference/concepts/01-evaluation-api"
                >
                  See evaluation API
                </Link>
                <Link
                  className="btn text-white hover:text-white bg-slate-800 hover:bg-slate-700 sm:w-auto w-full"
                  to="/docs/reference/technologies/index"
                >
                  Browse technologies
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {kpiCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {card.label}
                  </div>
                  <div className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{card.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-10 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Implementation timeline</h2>
            <div className="mt-8 grid gap-6">
              {adoptionSteps.map((item) => (
                <article
                  key={item.step}
                  className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 dark:border-slate-800 dark:bg-slate-950/70"
                >
                  <div className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">{item.step}</div>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

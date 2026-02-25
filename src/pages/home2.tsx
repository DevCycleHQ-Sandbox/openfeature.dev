import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

const highlightItems = [
  {
    title: 'Unified flag API',
    detail: 'One app integration model across languages and runtimes, regardless of provider backend.',
  },
  {
    title: 'Portable evaluation',
    detail: 'Keep targeting and rollout strategy stable while changing infrastructure around it.',
  },
  {
    title: 'CNCF ecosystem',
    detail: 'Adopt standards-first tooling with community governance and implementation transparency.',
  },
];

const releaseSteps = [
  { id: '01', title: 'Model flag behavior', detail: 'Define context and expected variants for each rollout path.' },
  { id: '02', title: 'Connect a provider', detail: 'Bind your chosen vendor or in-house engine through OpenFeature.' },
  { id: '03', title: 'Ship with confidence', detail: 'Use hooks, events, and observability to validate releases.' },
];

export default function Home2(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Home iteration 2" description={siteConfig.customFields.description as string}>
      <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <section className="mx-auto max-w-6xl px-4 pb-12 pt-16 sm:px-6 md:pt-24">
          <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:grid-cols-2 md:p-12">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-300">
                Home iteration 2
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">Standardize feature delivery across teams</h1>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                Turn fragmented feature-flag integrations into one shared contract that product, platform, and
                application teams all understand.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  className="btn border-0 bg-violet-600 text-white hover:bg-violet-500 hover:text-white"
                  to="/docs/reference/intro"
                >
                  Read the reference
                </Link>
                <Link className="btn border border-slate-300 bg-transparent text-slate-900 dark:text-slate-100" to="/community">
                  Join the community
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-950">
              <h2 className="text-lg font-semibold">Release playbook</h2>
              <ol className="mt-4 space-y-4">
                {releaseSteps.map((step) => (
                  <li key={step.id} className="flex gap-4">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700 dark:bg-violet-900/50 dark:text-violet-200">
                      {step.id}
                    </span>
                    <div>
                      <p className="font-semibold">{step.title}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {highlightItems.map((highlight) => (
              <article key={highlight.title} className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
                <h2 className="text-xl font-semibold">{highlight.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{highlight.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          <div className="rounded-3xl bg-violet-600 p-8 text-white md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Want real-world integrations?</h2>
              <p className="mt-2 text-violet-100">Explore SDKs, providers, and tooling in the ecosystem catalog.</p>
            </div>
            <Link
              className="btn mt-5 border-0 bg-white text-violet-700 hover:bg-violet-100 hover:text-violet-800 md:mt-0"
              to="/ecosystem"
            >
              View ecosystem
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

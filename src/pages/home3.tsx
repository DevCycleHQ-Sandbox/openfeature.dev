import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import '../css/style.css';

const audienceTracks = [
  {
    title: 'Application engineers',
    body: 'Integrate feature evaluation in a few lines and keep application code stable over time.',
    linkLabel: 'SDK docs',
    linkTo: '/docs/reference/technologies/index',
  },
  {
    title: 'Platform teams',
    body: 'Set standards for providers, hooks, and evaluation context that scale across services.',
    linkLabel: 'Concepts',
    linkTo: '/docs/reference/concepts/01-evaluation-api',
  },
  {
    title: 'Tool vendors',
    body: 'Offer first-class OpenFeature compatibility and meet developers where they already build.',
    linkLabel: 'Community',
    linkTo: '/community',
  },
];

const quickStartItems = [
  'Install the SDK for your language',
  'Set a provider for your chosen backend',
  'Evaluate flags with consistent typed methods',
  'Layer in hooks for telemetry and policy',
];

const codeSample = `OpenFeature.setProvider(new MyProvider());

const client = OpenFeature.getClient();

const withNewOnboarding = await client.getBooleanValue(
  "with-new-onboarding",
  false
);
`;

export default function Home3(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Home Iteration 3"
      description={`Iteration 3 demo for ${siteConfig.title}`}
    >
      <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,_#3f3f46_0%,_#09090b_38%,_#020617_100%)] text-slate-100">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-14">
          <div className="rounded-3xl border border-sky-400/25 bg-slate-900/50 backdrop-blur p-8 md:p-12">
            <div className="inline-flex rounded-full border border-sky-300/30 bg-sky-500/20 px-3 py-1 text-sm font-semibold text-sky-200">
              Home iteration 3
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
              A developer-console inspired homepage concept
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-3xl">
              This concept combines persona-based navigation with implementation proof points and a
              visible quick-start flow.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                className="btn text-white hover:text-white bg-sky-600 hover:bg-sky-500 sm:w-auto w-full"
                to="/docs/reference/intro"
              >
                Open docs
              </Link>
              <Link
                className="btn text-white hover:text-white bg-violet-600 hover:bg-violet-500 sm:w-auto w-full"
                to="/docs/tutorials/five-minutes-to-feature-flags"
              >
                Launch tutorial
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-10">
          <div className="grid gap-6 md:grid-cols-3">
            {audienceTracks.map((track) => (
              <article
                key={track.title}
                className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6"
              >
                <h2 className="text-2xl font-semibold text-white">{track.title}</h2>
                <p className="mt-4 text-slate-300">{track.body}</p>
                <Link className="mt-6 inline-block font-semibold text-sky-300 hover:text-sky-200" to={track.linkTo}>
                  {track.linkLabel} →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-white">Quick start track</h3>
              <ul className="mt-5 space-y-3">
                {quickStartItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-200">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-white">API preview</h3>
              <pre className="mt-5 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm text-sky-200 border border-slate-800">
                <code>{codeSample}</code>
              </pre>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

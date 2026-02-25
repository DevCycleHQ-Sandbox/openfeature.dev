import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

const scenarioItems = [
  {
    team: 'Platform engineering',
    outcome: 'Ships a reusable flagging contract to every service without vendor lock-in.',
  },
  {
    team: 'Application teams',
    outcome: 'Moves from release branches to progressive rollout controls in normal workflows.',
  },
  {
    team: 'Security and compliance',
    outcome: 'Tracks behavior through consistent evaluation APIs and centralized policy hooks.',
  },
];

const codeExample = `import { OpenFeature } from '@openfeature/server-sdk';

const client = OpenFeature.getClient();
const enabled = await client.getBooleanValue('beta-checkout', false, {
  targetingKey: 'user-123',
});
`;

export default function Home3(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Home iteration 3" description={siteConfig.customFields.description as string}>
      <main className="min-h-screen bg-slate-900 text-slate-100">
        <section className="mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6 md:pt-24">
          <div className="rounded-3xl border border-slate-700 bg-slate-950 p-8 md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-300">Home iteration 3</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              A developer-first homepage concept with docs-ready context
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-300">
              This version emphasizes implementation clarity by pairing value messaging with an immediate SDK example.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                className="btn border-0 bg-cyan-400 text-slate-900 hover:bg-cyan-300 hover:text-slate-900"
                to="/docs/reference/intro"
              >
                Open docs
              </Link>
              <Link className="btn border border-slate-500 bg-transparent text-slate-100 hover:text-white" to="/specification">
                Read specification
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 lg:col-span-2">
              <h2 className="text-xl font-semibold text-cyan-300">Who this helps</h2>
              <ul className="mt-5 space-y-5">
                {scenarioItems.map((scenario) => (
                  <li key={scenario.team}>
                    <p className="font-semibold">{scenario.team}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{scenario.outcome}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 lg:col-span-3">
              <div className="flex items-center justify-between border-b border-slate-700 px-5 py-3">
                <p className="text-sm font-medium text-slate-300">Server SDK example</p>
                <Link className="text-sm text-cyan-300 hover:text-cyan-200" to="/docs/reference/technologies/server/javascript">
                  JavaScript SDK
                </Link>
              </div>
              <pre className="m-0 overflow-x-auto px-5 py-6 text-sm leading-6 text-slate-100">
                <code>{codeExample}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              className="rounded-2xl border border-slate-700 bg-slate-950 p-6 text-slate-100 no-underline hover:text-white"
              to="/docs/reference/concepts/hooks"
            >
              <p className="text-lg font-semibold text-cyan-300">Hooks</p>
              <p className="mt-2 text-sm text-slate-300">Extend evaluation flow with lifecycle callbacks and policy checks.</p>
            </Link>
            <Link
              className="rounded-2xl border border-slate-700 bg-slate-950 p-6 text-slate-100 no-underline hover:text-white"
              to="/docs/reference/concepts/provider"
            >
              <p className="text-lg font-semibold text-cyan-300">Providers</p>
              <p className="mt-2 text-sm text-slate-300">Connect your preferred feature management backend through one API.</p>
            </Link>
            <Link
              className="rounded-2xl border border-slate-700 bg-slate-950 p-6 text-slate-100 no-underline hover:text-white"
              to="/blog"
            >
              <p className="text-lg font-semibold text-cyan-300">Stories</p>
              <p className="mt-2 text-sm text-slate-300">Learn how teams roll out safely with standards-based flagging.</p>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

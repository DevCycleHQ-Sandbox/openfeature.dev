import React from 'react';

function ValueProposition() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-16 md:py-24">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/40 rounded-full mb-4">
              The Problem &amp; The Solution
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tighter mb-4">
              Stop rewriting feature flag code
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Switching feature flag vendors means touching every evaluation in your codebase.
              OpenFeature gives you a single API that works with any backend.
            </p>
          </div>

          {/* Before/After comparison */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Without OpenFeature */}
            <div
              className="relative rounded-2xl border-2 border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-950/10 p-8"
              data-aos="fade-right"
            >
              <div className="absolute -top-3 left-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold bg-red-100 dark:bg-red-900/60 text-red-700 dark:text-red-300">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  Without OpenFeature
                </span>
              </div>
              <div className="mt-2 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 shrink-0 rounded-full bg-red-200 dark:bg-red-800 flex items-center justify-center">
                    <svg className="w-3 h-3 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Tightly coupled to one vendor&apos;s SDK throughout your codebase</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 shrink-0 rounded-full bg-red-200 dark:bg-red-800 flex items-center justify-center">
                    <svg className="w-3 h-3 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Switching vendors = rewriting every flag evaluation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 shrink-0 rounded-full bg-red-200 dark:bg-red-800 flex items-center justify-center">
                    <svg className="w-3 h-3 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">No standard hooks for logging, telemetry, or validation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 shrink-0 rounded-full bg-red-200 dark:bg-red-800 flex items-center justify-center">
                    <svg className="w-3 h-3 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Inconsistent APIs across different languages and teams</p>
                </div>
              </div>
            </div>

            {/* With OpenFeature */}
            <div
              className="relative rounded-2xl border-2 border-green-200 dark:border-green-900/50 bg-green-50/50 dark:bg-green-950/10 p-8"
              data-aos="fade-left"
            >
              <div className="absolute -top-3 left-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold bg-green-100 dark:bg-green-900/60 text-green-700 dark:text-green-300">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  With OpenFeature
                </span>
              </div>
              <div className="mt-2 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 shrink-0 rounded-full bg-green-200 dark:bg-green-800 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">One standard API — swap providers with a single line change</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 shrink-0 rounded-full bg-green-200 dark:bg-green-800 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Built-in hooks for OpenTelemetry, validation, and more</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 shrink-0 rounded-full bg-green-200 dark:bg-green-800 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Consistent API across 10+ languages and frameworks</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 shrink-0 rounded-full bg-green-200 dark:bg-green-800 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Run multiple providers simultaneously with multi-provider</p>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture diagram */}
          <div className="max-w-4xl mx-auto mt-20" data-aos="fade-up">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">The Abstraction Layer</h3>
              <p className="text-gray-500 dark:text-gray-400">OpenFeature sits between your app and any feature flag backend</p>
            </div>
            <div className="relative">
              {/* Architecture visual */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4 md:gap-0">
                {/* Your App */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-full max-w-[200px] rounded-xl bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 p-5 text-center">
                    <div className="text-3xl mb-2">{'</>'}</div>
                    <div className="font-bold text-gray-800 dark:text-gray-200">Your Application</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Feature flag evaluations</div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center px-2">
                  <svg className="w-8 h-8 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </div>
                <div className="flex md:hidden items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </div>

                {/* OpenFeature SDK */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-full max-w-[200px] rounded-xl bg-purple-100 dark:bg-purple-900/40 border-2 border-purple-400 dark:border-purple-600 p-5 text-center shadow-lg shadow-purple-200/50 dark:shadow-purple-900/30">
                    <div className="text-3xl mb-2">
                      <svg className="w-8 h-8 mx-auto fill-purple-600 dark:fill-purple-400" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                    </div>
                    <div className="font-bold text-purple-800 dark:text-purple-200">OpenFeature SDK</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400 mt-1">Vendor-agnostic API</div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center px-2">
                  <svg className="w-8 h-8 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </div>
                <div className="flex md:hidden items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </div>

                {/* Providers */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-full max-w-[200px] rounded-xl bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 p-5 text-center">
                    <div className="text-3xl mb-2">
                      <svg className="w-8 h-8 mx-auto text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                      </svg>
                    </div>
                    <div className="font-bold text-gray-800 dark:text-gray-200">Any Provider</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">flagd, LaunchDarkly, Split, CloudBees, and 20+ more</div>
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

export default ValueProposition;

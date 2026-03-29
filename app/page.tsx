export default function Home() {
  return (
    <div className="bg-background text-on-surface selection:bg-primary/30 overflow-x-hidden min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full border-b border-outline-variant/15 bg-[#0e0e0f]/60 backdrop-blur-xl z-50">
        <div className="flex justify-between items-center px-8 h-16 w-full max-w-screen-2xl mx-auto">
          <div className="text-2xl font-bold text-white tracking-tighter font-headline">Zyroth</div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-white border-b-2 border-[#c11f68] pb-1 font-body text-sm" href="#">Infrastructure</a>
            <a className="text-on-surface-variant hover:text-white transition-colors font-body text-sm" href="#">Runtime</a>
            <a className="text-on-surface-variant hover:text-white transition-colors font-body text-sm" href="#">Docs</a>
            <a className="text-on-surface-variant hover:text-white transition-colors font-body text-sm" href="#">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-on-surface-variant hover:text-white transition-colors text-sm font-medium">Sign In</button>
            <button className="bg-linear-to-br from-[#c11f68] to-[#ab23a6] text-white px-5 py-2 text-sm font-bold rounded-sm hover:scale-[0.98] transition-transform duration-300">Deploy Now</button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary-dim text-xs font-bold tracking-widest uppercase mb-6 border border-outline-variant/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              UNIVERSAL AGENT PROTOCOL
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter leading-[0.9] mb-8">
              Run AI Agents <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#c11f68] to-secondary">Smarter, Faster, Cheaper.</span>
            </h1>
            <p className="text-on-surface-variant text-xl max-w-xl leading-relaxed mb-10 font-body">
              The Kubernetes for AI Agents. Make multi-agent AI systems as easy to deploy, manage, and scale as microservices.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-8 py-4 font-bold rounded-sm hover:bg-white/90 transition-all">Start Building</button>
              <button className="border border-outline-variant/30 text-white px-8 py-4 font-bold rounded-sm hover:bg-surface-container transition-all">View Documentation</button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-2 bg-linear-to-br from-[#c11f68]/20 to-transparent blur-3xl rounded-full"></div>
            <div className="relative glass-panel rounded-sm border border-outline-variant/20 overflow-hidden shadow-2xl">
              <div className="bg-surface-container-highest px-4 py-2 flex items-center gap-2 border-b border-outline-variant/20">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-error-dim"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                </div>
                <div className="text-[10px] text-on-surface-variant font-mono uppercase tracking-widest ml-4">execute_main.ts</div>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="flex gap-4">
                  <span className="text-outline/40">01</span>
                  <span><span className="text-[#c11f68]">import</span> {"{ Hub }"} <span className="text-[#c11f68]">from</span> <span className="text-primary-container">&quot;@zyroth/core&quot;</span>;</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-outline/40">02</span>
                  <span></span>
                </div>
                <div className="flex gap-4">
                  <span className="text-outline/40">03</span>
                  <span><span className="text-secondary">const</span> client = <span className="text-secondary">new</span> <span className="text-primary">Hub</span>();</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-outline/40">04</span>
                  <span></span>
                </div>
                <div className="flex gap-4">
                  <span className="text-outline/40">05</span>
                  <span><span className="text-[#c11f68]">await</span> client.<span className="text-primary">call</span>({"{ "}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-outline/40">06</span>
                  <span className="ml-4">agent: <span className="text-primary-container">&quot;data-analyzer&quot;</span>,</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-outline/40">07</span>
                  <span className="ml-4">task: <span className="text-primary-container">&quot;analyze_sales_data&quot;</span>,</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-outline/40">08</span>
                  <span className="ml-4">maxCost: <span className="text-secondary">0.50</span>,</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-outline/40">09</span>
                  <span className="ml-4">timeout: <span className="text-secondary">30000</span></span>
                </div>
                <div className="flex gap-4">
                  <span className="text-outline/40">10</span>
                  <span>{"}); "}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Row */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/15 bg-surface-container-low">
            <div className="p-8 border-r border-outline-variant/15 flex flex-col justify-between">
              <div>
                <div className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-2">Agents Orchestrated</div>
                <div className="text-4xl font-headline font-bold">1.2M <span className="text-lg text-on-surface-variant">Agents</span></div>
              </div>
              <div className="mt-8 h-12 flex items-end gap-1">
                <div className="flex-1 bg-primary/20 h-4"></div>
                <div className="flex-1 bg-primary/20 h-6"></div>
                <div className="flex-1 bg-primary/20 h-5"></div>
                <div className="flex-1 bg-primary/20 h-8"></div>
                <div className="flex-1 bg-primary/40 h-10"></div>
                <div className="flex-1 bg-primary h-12"></div>
              </div>
            </div>
            <div className="p-8 border-r border-outline-variant/15 flex flex-col justify-between">
              <div>
                <div className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-2">Cost Optimization</div>
                <div className="text-4xl font-headline font-bold text-primary-container">30% <span className="text-lg text-on-surface-variant">Avg Reduction</span></div>
              </div>
              <div className="mt-8 h-12 flex items-end gap-1">
                <div className="flex-1 bg-[#c11f68]/20 h-8"></div>
                <div className="flex-1 bg-[#c11f68]/20 h-10"></div>
                <div className="flex-1 bg-[#c11f68]/20 h-7"></div>
                <div className="flex-1 bg-[#c11f68]/20 h-9"></div>
                <div className="flex-1 bg-[#c11f68]/40 h-11"></div>
                <div className="flex-1 bg-[#c11f68] h-12"></div>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-2">Mean Routing Latency</div>
                <div className="text-4xl font-headline font-bold">12ms <span className="text-lg text-on-surface-variant">Overhead</span></div>
              </div>
              <div className="mt-8 h-12 flex items-end gap-1">
                <div className="flex-1 bg-secondary/20 h-6"></div>
                <div className="flex-1 bg-secondary/20 h-5"></div>
                <div className="flex-1 bg-secondary/20 h-4"></div>
                <div className="flex-1 bg-secondary/20 h-3"></div>
                <div className="flex-1 bg-secondary/40 h-2"></div>
                <div className="flex-1 bg-secondary h-1"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Routing Engine Section */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-32">
          <div className="mb-12">
            <h2 className="text-4xl font-headline font-bold tracking-tighter mb-4">Smart Routing Engine</h2>
            <p className="text-on-surface-variant max-w-2xl">Real-time inference performance benchmarks across global model providers. Zyroth automatically chooses the optimal path based on your specified constraints.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-surface-container text-left">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20">Provider</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20">Model</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20">Latency (p99)</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20">Reliability</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20">Route Decision</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="px-6 py-5 flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/10 rounded-sm flex items-center justify-center text-[10px] font-bold">OA</div>
                    <span className="font-medium">OpenAI</span>
                  </td>
                  <td className="px-6 py-5 text-on-surface-variant font-mono text-sm">gpt-4o</td>
                  <td className="px-6 py-5 text-secondary">2.3s</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-16 bg-surface-container-high overflow-hidden">
                        <div className="h-full bg-primary w-[99.9%]"></div>
                      </div>
                      <span className="text-xs">99.9%</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-surface-container-highest border border-outline-variant/30 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Bypassed</span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="px-6 py-5 flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/10 rounded-sm flex items-center justify-center text-[10px] font-bold">AN</div>
                    <span className="font-medium">Anthropic</span>
                  </td>
                  <td className="px-6 py-5 text-on-surface-variant font-mono text-sm">claude-3-5-sonnet</td>
                  <td className="px-6 py-5 text-secondary">1.8s</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-16 bg-surface-container-high overflow-hidden">
                        <div className="h-full bg-primary w-[99.7%]"></div>
                      </div>
                      <span className="text-xs">99.7%</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-primary/10 border border-primary/30 text-[10px] font-bold uppercase tracking-widest text-primary-container">Optimized</span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="px-6 py-5 flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/10 rounded-sm flex items-center justify-center text-[10px] font-bold">LC</div>
                    <span className="font-medium">Local Node</span>
                  </td>
                  <td className="px-6 py-5 text-on-surface-variant font-mono text-sm">llama-3-70b</td>
                  <td className="px-6 py-5 text-secondary">5.2s</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-16 bg-surface-container-high overflow-hidden">
                        <div className="h-full bg-primary w-[98.4%]"></div>
                      </div>
                      <span className="text-xs">98.4%</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-surface-container-highest border border-outline-variant/30 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Bypassed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cost Savings Section */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-32 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="glass-panel p-10 border border-outline-variant/15 flex flex-col gap-6">
              <div className="flex justify-between items-end">
                <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Orchestration Efficiency</div>
                <div className="text-4xl font-headline font-bold text-[#c11f68]">100%</div>
              </div>
              <div className="space-y-4">
                <div className="h-10 bg-surface-container-highest relative">
                  <div className="absolute inset-y-0 left-0 bg-outline-variant/30 w-full"></div>
                  <div className="absolute inset-y-0 left-0 bg-on-surface-variant w-full transition-all"></div>
                  <div className="absolute right-4 inset-y-0 flex items-center text-[10px] font-bold uppercase">Agent Sprawl</div>
                </div>
                <div className="h-10 bg-surface-container-highest relative">
                  <div className="absolute inset-y-0 left-0 bg-[#c11f68]/30 w-full"></div>
                  <div className="absolute inset-y-0 left-0 bg-[#c11f68] w-full transition-all"></div>
                  <div className="absolute right-4 inset-y-0 flex items-center text-[10px] font-bold uppercase">Unified Platform</div>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant font-mono mt-4">
                * Based on resolving agent fragmentation via the UAP protocol.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-headline font-bold tracking-tighter mb-6">Universal & Framework Agnostic</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Stop paying for redundant context and untrackable agents. Our Universal Agent Protocol (UAP) unites LangChain, AutoGPT, and CrewAI into a single governable runtime.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#c11f68]">check_circle</span>
                <span className="text-sm font-medium">Framework Agnostic Execution</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#c11f68]">check_circle</span>
                <span className="text-sm font-medium">Built-in Distributed Tracing</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#c11f68]">check_circle</span>
                <span className="text-sm font-medium">Automated PII Compliance (GDPR/HIPAA)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* The Routing Engine Visual */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-32 py-20 bg-surface-container-lowest/50">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold tracking-tighter mb-4">The Routing Engine</h2>
            <p className="text-on-surface-variant mx-auto max-w-xl">Deep architectural mapping of our deterministic decision lifecycle.</p>
          </div>
          <div className="flex flex-col items-center max-w-3xl mx-auto space-y-0">
            {/* Step 1 */}
            <div className="w-full flex flex-col items-center">
              <div className="glass-panel border border-outline-variant/30 px-12 py-6 text-center w-64 group hover:border-[#c11f68]/50 transition-all">
                <div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Step 01</div>
                <div className="font-headline font-bold">Input Analysis</div>
              </div>
              <div className="h-16 w-px bg-linear-to-b from-outline-variant/50 to-transparent"></div>
            </div>
            {/* Step 2 */}
            <div className="w-full flex flex-col items-center">
              <div className="h-16 w-px bg-linear-to-b from-transparent to-outline-variant/50"></div>
              <div className="glass-panel border border-outline-variant/30 px-12 py-6 text-center w-64 group hover:border-[#c11f68]/50 transition-all">
                <div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Step 02</div>
                <div className="font-headline font-bold">Policy Check</div>
              </div>
              <div className="h-16 w-px bg-linear-to-b from-outline-variant/50 to-transparent"></div>
            </div>
            {/* Step 3 */}
            <div className="w-full flex flex-col items-center">
              <div className="h-16 w-px bg-linear-to-b from-transparent to-[#c11f68]"></div>
              <div className="magenta-bg px-12 py-6 text-center w-64 shadow-[0_0_30px_rgba(193,31,104,0.3)]">
                <div className="text-[10px] text-white/70 font-bold uppercase tracking-widest mb-1">Step 03</div>
                <div className="font-headline font-bold text-white">Dynamic Routing</div>
              </div>
              <div className="h-16 w-px bg-linear-to-b from-[#c11f68] to-transparent"></div>
            </div>
            {/* Step 4 */}
            <div className="w-full flex flex-col items-center">
              <div className="h-16 w-px bg-linear-to-b from-transparent to-outline-variant/50"></div>
              <div className="glass-panel border border-outline-variant/30 px-12 py-6 text-center w-64 group hover:border-[#c11f68]/50 transition-all">
                <div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Step 04</div>
                <div className="font-headline font-bold">Final Output</div>
              </div>
            </div>
          </div>
        </section>

        {/* Universal Connectivity */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-32">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant">Compatible Stacks</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-outline-variant/10 border border-outline-variant/10">
            <div className="bg-background p-8 flex flex-col items-center justify-center grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
              <div className="text-sm font-bold tracking-tight">LangChain</div>
              <div className="text-[8px] uppercase mt-1 opacity-50">Orchestration</div>
            </div>
            <div className="bg-background p-8 flex flex-col items-center justify-center grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
              <div className="text-sm font-bold tracking-tight">CrewAI</div>
              <div className="text-[8px] uppercase mt-1 opacity-50">Multi-Agent</div>
            </div>
            <div className="bg-background p-8 flex flex-col items-center justify-center grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
              <div className="text-sm font-bold tracking-tight">AutoGPT</div>
              <div className="text-[8px] uppercase mt-1 opacity-50">Autonomous</div>
            </div>
            <div className="bg-background p-8 flex flex-col items-center justify-center grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
              <div className="text-sm font-bold tracking-tight">OpenAI</div>
              <div className="text-[8px] uppercase mt-1 opacity-50">Models</div>
            </div>
            <div className="bg-background p-8 flex flex-col items-center justify-center grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
              <div className="text-sm font-bold tracking-tight">Anthropic</div>
              <div className="text-[8px] uppercase mt-1 opacity-50">Models</div>
            </div>
            <div className="bg-background p-8 flex flex-col items-center justify-center grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
              <div className="text-sm font-bold tracking-tight">TimescaleDB</div>
              <div className="text-[8px] uppercase mt-1 opacity-50">Telemetry</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-32">
          <div className="relative bg-surface-container-low border border-outline-variant/20 p-16 md:p-24 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <svg className="h-full w-full stroke-primary" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,50 Q25,0 50,50 T100,50" fill="none" strokeWidth="0.1"></path>
                <path d="M0,60 Q25,10 50,60 T100,60" fill="none" strokeWidth="0.1"></path>
                <path d="M0,40 Q25,-10 50,40 T100,40" fill="none" strokeWidth="0.1"></path>
              </svg>
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-8 leading-[0.9]">Join the <br />Infra-Revolution.</h2>
              <p className="text-on-surface-variant text-lg mb-12 max-w-lg">Scale your agentic intelligence without the orchestration overhead. Start free, scale to billions.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#c11f68] text-white px-10 py-5 font-bold rounded-sm hover:scale-[0.98] transition-transform">Get Started Now</button>
                <button className="bg-surface-container-highest text-white px-10 py-5 font-bold rounded-sm border border-outline-variant/30">Talk to Engineering</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-outline-variant/15 pt-20 pb-10 bg-[#000000]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 w-full max-w-screen-2xl mx-auto">
          <div className="col-span-2 md:col-span-1">
            <div className="text-lg font-black text-white mb-6">Zyroth</div>
            <p className="text-on-surface-variant font-body text-xs leading-relaxed max-w-[200px]">
              Programmable infrastructure for the next generation of sovereign intelligence.
            </p>
          </div>
          <div>
            <div className="font-body text-sm uppercase tracking-widest text-white font-bold mb-6">Product</div>
            <div className="flex flex-col gap-4">
              <a className="text-on-surface-variant hover:text-[#ff003d] transition-colors text-sm uppercase tracking-widest" href="#">Changelog</a>
              <a className="text-on-surface-variant hover:text-[#ff003d] transition-colors text-sm uppercase tracking-widest" href="#">Status</a>
              <a className="text-on-surface-variant hover:text-[#ff003d] transition-colors text-sm uppercase tracking-widest" href="#">Docs</a>
            </div>
          </div>
          <div>
            <div className="font-body text-sm uppercase tracking-widest text-white font-bold mb-6">Resources</div>
            <div className="flex flex-col gap-4">
              <a className="text-on-surface-variant hover:text-[#ff003d] transition-colors text-sm uppercase tracking-widest" href="#">API Reference</a>
              <a className="text-on-surface-variant hover:text-[#ff003d] transition-colors text-sm uppercase tracking-widest" href="#">Security</a>
              <a className="text-on-surface-variant hover:text-[#ff003d] transition-colors text-sm uppercase tracking-widest" href="#">Case Studies</a>
            </div>
          </div>
          <div>
            <div className="font-body text-sm uppercase tracking-widest text-white font-bold mb-6">Legal</div>
            <div className="flex flex-col gap-4">
              <a className="text-on-surface-variant hover:text-[#ff003d] transition-colors text-sm uppercase tracking-widest" href="#">Terms</a>
              <a className="text-on-surface-variant hover:text-[#ff003d] transition-colors text-sm uppercase tracking-widest" href="#">Privacy</a>
            </div>
          </div>
        </div>
        <div className="mt-20 px-8 w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-on-surface-variant font-body text-xs uppercase tracking-widest">© 2024 Zyroth Intelligence. Built for the Sovereign Developer.</div>
          <div className="flex gap-6">
            <span className="text-[#c11f68] material-symbols-outlined cursor-pointer hover:opacity-70">language</span>
            <span className="text-[#c11f68] material-symbols-outlined cursor-pointer hover:opacity-70">terminal</span>
            <span className="text-[#c11f68] material-symbols-outlined cursor-pointer hover:opacity-70">shield</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

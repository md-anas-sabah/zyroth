import Link from "next/link";
import { Globe, Terminal, Shield, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-background text-on-surface selection:bg-primary/30 overflow-x-hidden min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full border-b border-outline-variant/15 bg-[#0e0e0f]/60 backdrop-blur-xl z-50">
        <div className="flex justify-between items-center px-8 h-16 w-full max-w-screen-2xl mx-auto">
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="Zyroth Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold text-white tracking-tighter font-headline">Zyroth</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-white border-b-2 border-[#c11f68] pb-1 font-body text-sm" href="#">Features</a>
            <Link href="/pricing" className="text-on-surface-variant hover:text-white transition-colors font-body text-sm">Pricing</Link>
            <a className="text-on-surface-variant hover:text-white transition-colors font-body text-sm" href="#">Docs</a>
            <a className="text-on-surface-variant hover:text-white transition-colors font-body text-sm" href="#">Blog</a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-on-surface-variant hover:text-white transition-colors text-sm font-medium">Sign In</Link>
            <Link href="/auth/signup" className="bg-linear-to-br from-[#c11f68] to-[#ab23a6] text-white px-5 py-2 text-sm font-bold rounded-sm hover:scale-[0.98] transition-transform duration-300">Start Free</Link>
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
              <Link href="/auth/signup" className="bg-white text-black px-8 py-4 font-bold rounded-sm hover:bg-white/90 transition-all text-center">Start Free Trial</Link>
              <Link href="/pricing" className="border border-outline-variant/30 text-white px-8 py-4 font-bold rounded-sm hover:bg-surface-container transition-all">See Pricing</Link>
            </div>
            <div className="mt-4 text-sm text-on-surface-variant">
              No credit card required • 1,000 free executions/month
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

        {/* Pain Points Section */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-32">
          <div className="text-center mb-12">
            <h2 className="text-sm uppercase tracking-widest text-on-surface-variant mb-3">The Problem With AI Agents Today</h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">Most multi-agent systems never make it to production. Here&apos;s why.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden border border-outline-variant/20 bg-surface-container-low p-8 hover:border-error/30 transition-all group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="text-5xl font-headline font-bold text-error mb-4">95%</div>
                <div className="text-xl font-bold mb-3">GenAI Pilots Fail</div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Most multi-agent systems never make it to production due to cost, complexity, and lack of orchestration tools.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden border border-outline-variant/20 bg-surface-container-low p-8 hover:border-error/30 transition-all group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="text-5xl font-headline font-bold text-error mb-4">$240K</div>
                <div className="text-xl font-bold mb-3">Wasted Monthly</div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Companies spend on LLM APIs without visibility into which agents are expensive or why workflows cost 10x more.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden border border-outline-variant/20 bg-surface-container-low p-8 hover:border-error/30 transition-all group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="text-5xl font-headline font-bold text-error mb-4">7+ Days</div>
                <div className="text-xl font-bold mb-3">To Debug Failures</div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  No visibility into multi-agent workflows means debugging takes forever. Logs scattered across services.
                </p>
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

        {/* How It Works Section */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold tracking-tighter mb-4">How It Works</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Get started in minutes. Deploy enterprise-grade agent orchestration without the complexity.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-sm bg-primary/10 border border-primary/30 mb-6">
                <span className="text-2xl font-headline font-bold text-primary">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Connect Your Agents</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Register your existing agents from LangChain, CrewAI, AutoGPT, or custom frameworks. Our Universal Agent Protocol works with everything.
              </p>
              <div className="mt-6 p-4 bg-surface-container-low border border-outline-variant/20 font-mono text-xs">
                <div className="text-primary">await</div> hub.register({'{'}
                <div className="ml-4">name: &quot;email-classifier&quot;,</div>
                <div className="ml-4">framework: &quot;langchain&quot;</div>
                {'}'});
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-sm bg-primary/10 border border-primary/30 mb-6">
                <span className="text-2xl font-headline font-bold text-primary">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Build Workflows Visually</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Drag-and-drop canvas lets you orchestrate complex multi-agent workflows with conditional logic, loops, and error handling. No code required.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <div className="flex-1 h-12 bg-surface-container-low border border-outline-variant/20 flex items-center justify-center text-xs">Agent A</div>
                <div className="text-primary">→</div>
                <div className="flex-1 h-12 bg-surface-container-low border border-outline-variant/20 flex items-center justify-center text-xs">Agent B</div>
                <div className="text-primary">→</div>
                <div className="flex-1 h-12 bg-surface-container-low border border-outline-variant/20 flex items-center justify-center text-xs">Done</div>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-sm bg-primary/10 border border-primary/30 mb-6">
                <span className="text-2xl font-headline font-bold text-primary">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Monitor & Optimize</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Real-time dashboards show cost, performance, and errors. Our AI automatically routes tasks to the cheapest, fastest model and saves you 30-50%.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex justify-between p-3 bg-surface-container-low border border-outline-variant/20 text-xs">
                  <span>Today&apos;s Cost</span>
                  <span className="text-primary font-bold">$124.50</span>
                </div>
                <div className="flex justify-between p-3 bg-surface-container-low border border-outline-variant/20 text-xs">
                  <span>Savings</span>
                  <span className="text-[#00ff88] font-bold">-35%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Canvas Preview */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-primary/30">
                VISUAL ORCHESTRATION
              </div>
              <h2 className="text-4xl font-headline font-bold tracking-tighter mb-6">
                Build Complex Workflows in Minutes, Not Weeks
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Our drag-and-drop canvas lets you orchestrate multi-agent workflows visually.
                Like Zapier, but built specifically for AI agents with cost optimization built-in.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold mb-1">Visual workflow builder with real-time preview</div>
                    <div className="text-sm text-on-surface-variant">See your agent connections and data flow in real-time</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold mb-1">Conditional logic, loops, and error handling</div>
                    <div className="text-sm text-on-surface-variant">Build sophisticated workflows without writing code</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold mb-1">One-click deploy to production</div>
                    <div className="text-sm text-on-surface-variant">Test locally, deploy globally with zero downtime</div>
                  </div>
                </li>
              </ul>
              <Link href="/auth/signup" className="inline-block bg-primary text-white px-6 py-3 font-bold rounded-sm hover:opacity-90 transition-all">
                Try Workflow Builder →
              </Link>
            </div>
            <div className="border border-outline-variant/20 bg-surface-container-low p-6 rounded-sm">
              <div className="aspect-video bg-surface-container-highest border border-outline-variant/20 rounded-sm flex items-center justify-center relative overflow-hidden">
                {/* Workflow Canvas Demo Placeholder */}
                <div className="absolute inset-0 p-8">
                  <div className="flex flex-col gap-4 h-full">
                    <div className="flex items-center gap-4">
                      <div className="w-32 h-20 bg-primary/20 border-2 border-primary rounded flex items-center justify-center text-xs font-bold">
                        Email Parser
                      </div>
                      <div className="flex-1 h-0.5 bg-primary"></div>
                      <div className="w-32 h-20 bg-secondary/20 border-2 border-secondary rounded flex items-center justify-center text-xs font-bold">
                        Classifier
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-0.5 h-12 bg-secondary"></div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 h-20 bg-[#00ff88]/20 border-2 border-[#00ff88] rounded flex items-center justify-center text-xs font-bold">
                        Ticket Creator
                      </div>
                      <div className="flex-1 h-0.5 bg-[#00ff88]"></div>
                      <div className="w-32 h-20 bg-[#00eefc]/20 border-2 border-[#00eefc] rounded flex items-center justify-center text-xs font-bold">
                        Auto Respond
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm border border-outline-variant/30 text-xs font-bold">
                  Interactive Demo Available
                </div>
              </div>
              <div className="mt-4 text-xs text-on-surface-variant text-center">
                Example: Customer support automation workflow
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
                <CheckCircle className="w-5 h-5 text-[#c11f68]" />
                <span className="text-sm font-medium">Framework Agnostic Execution</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#c11f68]" />
                <span className="text-sm font-medium">Built-in Distributed Tracing</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#c11f68]" />
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

        {/* Comparison Table */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold tracking-tighter mb-4">Why Choose Zyroth?</h2>
            <p className="text-on-surface-variant text-lg">The only platform that makes multi-agent AI cost-effective AND enterprise-ready</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-surface-container">
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-widest text-primary border-b border-outline-variant/20">Zyroth</th>
                  <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20">LangSmith</th>
                  <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20">Superagent</th>
                  <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20">DIY</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="px-6 py-4 font-medium">Framework Support</td>
                  <td className="px-6 py-4 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">ALL FRAMEWORKS</div>
                  </td>
                  <td className="px-6 py-4 text-center text-on-surface-variant text-sm">LangChain only</td>
                  <td className="px-6 py-4 text-center text-on-surface-variant text-sm">All frameworks</td>
                  <td className="px-6 py-4 text-center text-on-surface-variant text-sm">Custom build</td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="px-6 py-4 font-medium">Cost Optimization</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center text-on-surface-variant">—</td>
                  <td className="px-6 py-4 text-center text-on-surface-variant">—</td>
                  <td className="px-6 py-4 text-center text-on-surface-variant">—</td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="px-6 py-4 font-medium">Visual Workflow Builder</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-on-surface-variant mx-auto opacity-50" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-on-surface-variant mx-auto opacity-50" />
                  </td>
                  <td className="px-6 py-4 text-center text-on-surface-variant">—</td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="px-6 py-4 font-medium">Compliance (SOC2/HIPAA)</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center text-on-surface-variant text-sm">Basic</td>
                  <td className="px-6 py-4 text-center text-on-surface-variant">—</td>
                  <td className="px-6 py-4 text-center text-on-surface-variant text-sm">DIY</td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="px-6 py-4 font-medium">Managed Service</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-on-surface-variant mx-auto opacity-50" />
                  </td>
                  <td className="px-6 py-4 text-center text-on-surface-variant">—</td>
                  <td className="px-6 py-4 text-center text-on-surface-variant">—</td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="px-6 py-4 font-medium">Starting Price</td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-primary font-bold">$0 → $99/mo</div>
                  </td>
                  <td className="px-6 py-4 text-center text-on-surface-variant">$39/mo</td>
                  <td className="px-6 py-4 text-center text-on-surface-variant">Free (self-host)</td>
                  <td className="px-6 py-4 text-center text-on-surface-variant">$$$$ (dev time)</td>
                </tr>
              </tbody>
            </table>
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
              <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-8 leading-[0.9]">Ready to Orchestrate Smarter?</h2>
              <p className="text-on-surface-variant text-lg mb-12 max-w-lg">Join teams saving 30-50% on AI costs while scaling to millions of agent executions. Start free, no credit card required.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/auth/signup" className="bg-[#c11f68] text-white px-10 py-5 font-bold rounded-sm hover:scale-[0.98] transition-transform text-center">Start Free Trial</Link>
                <Link href="/pricing" className="bg-surface-container-highest text-white px-10 py-5 font-bold rounded-sm border border-outline-variant/30 hover:bg-surface-container transition-all">View Pricing</Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>1,000 free executions</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-outline-variant/15 pt-20 pb-10 bg-[#000000]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 w-full max-w-screen-2xl mx-auto">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="Zyroth Logo" className="w-6 h-6 grayscale opacity-80" />
              <div className="text-lg font-black text-white">Zyroth</div>
            </div>
            <p className="text-on-surface-variant font-body text-xs leading-relaxed max-w-[200px]">
              Programmable infrastructure for the next generation of sovereign intelligence.
            </p>
          </div>
          <div>
            <div className="font-body text-sm uppercase tracking-widest text-white font-bold mb-6">Product</div>
            <div className="flex flex-col gap-4">
              <Link href="/pricing" className="text-on-surface-variant hover:text-[#c11f68] transition-colors text-sm uppercase tracking-widest">Pricing</Link>
              <a className="text-on-surface-variant hover:text-[#c11f68] transition-colors text-sm uppercase tracking-widest" href="#">Changelog</a>
              <a className="text-on-surface-variant hover:text-[#c11f68] transition-colors text-sm uppercase tracking-widest" href="#">Status</a>
              <a className="text-on-surface-variant hover:text-[#c11f68] transition-colors text-sm uppercase tracking-widest" href="#">Roadmap</a>
            </div>
          </div>
          <div>
            <div className="font-body text-sm uppercase tracking-widest text-white font-bold mb-6">Developers</div>
            <div className="flex flex-col gap-4">
              <a className="text-on-surface-variant hover:text-[#c11f68] transition-colors text-sm uppercase tracking-widest" href="#">Documentation</a>
              <a className="text-on-surface-variant hover:text-[#c11f68] transition-colors text-sm uppercase tracking-widest" href="#">API Reference</a>
              <a className="text-on-surface-variant hover:text-[#c11f68] transition-colors text-sm uppercase tracking-widest" href="#">SDK & CLI</a>
              <a className="text-on-surface-variant hover:text-[#c11f68] transition-colors text-sm uppercase tracking-widest" href="#">GitHub</a>
            </div>
          </div>
          <div>
            <div className="font-body text-sm uppercase tracking-widest text-white font-bold mb-6">Company</div>
            <div className="flex flex-col gap-4">
              <a className="text-on-surface-variant hover:text-[#c11f68] transition-colors text-sm uppercase tracking-widest" href="#">About</a>
              <a className="text-on-surface-variant hover:text-[#c11f68] transition-colors text-sm uppercase tracking-widest" href="#">Blog</a>
              <a className="text-on-surface-variant hover:text-[#c11f68] transition-colors text-sm uppercase tracking-widest" href="#">Careers</a>
              <a className="text-on-surface-variant hover:text-[#c11f68] transition-colors text-sm uppercase tracking-widest" href="#">Contact</a>
            </div>
          </div>
          <div>
            <div className="font-body text-sm uppercase tracking-widest text-white font-bold mb-6">Compare</div>
            <div className="flex flex-col gap-4">
              <a className="text-on-surface-variant hover:text-[#c11f68] transition-colors text-sm uppercase tracking-widest" href="#">vs LangSmith</a>
              <a className="text-on-surface-variant hover:text-[#c11f68] transition-colors text-sm uppercase tracking-widest" href="#">vs Superagent</a>
              <a className="text-on-surface-variant hover:text-[#c11f68] transition-colors text-sm uppercase tracking-widest" href="#">vs DIY</a>
              <a className="text-on-surface-variant hover:text-[#c11f68] transition-colors text-sm uppercase tracking-widest" href="#">Security</a>
            </div>
          </div>
        </div>
        <div className="mt-20 px-8 w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-on-surface-variant font-body text-xs uppercase tracking-widest">© 2024 Zyroth Intelligence. Built for the Sovereign Developer.</div>
          <div className="flex gap-6">
            <Globe className="w-5 h-5 text-[#c11f68] cursor-pointer hover:opacity-70" />
            <Terminal className="w-5 h-5 text-[#c11f68] cursor-pointer hover:opacity-70" />
            <Shield className="w-5 h-5 text-[#c11f68] cursor-pointer hover:opacity-70" />
          </div>
        </div>
      </footer>
    </div>
  );
}

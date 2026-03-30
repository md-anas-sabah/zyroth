import Link from "next/link";
import { ArrowLeft, Bell } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full border-b border-outline-variant/15 bg-[#0e0e0f]/60 backdrop-blur-xl z-50">
        <div className="flex justify-between items-center px-8 h-16 w-full max-w-screen-2xl mx-auto">
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="Zyroth Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold text-white tracking-tighter font-headline">Zyroth</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-on-surface-variant hover:text-white transition-colors font-body text-sm">Features</Link>
            <Link href="/pricing" className="text-white border-b-2 border-[#c11f68] pb-1 font-body text-sm">Pricing</Link>
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
        {/* Back to Home Link */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </section>

        {/* Coming Soon Section */}
        <section className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#c11f68]/20 blur-3xl rounded-full"></div>
                <div className="relative w-24 h-24 rounded-full bg-surface-container border border-outline-variant/30 flex items-center justify-center">
                  <Bell className="w-12 h-12 text-[#c11f68]" />
                </div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-6 leading-[0.9]">
              Pricing Coming Soon
            </h1>

            {/* Description */}
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto leading-relaxed mb-12">
              We&apos;re finalizing our pricing plans to ensure they deliver maximum value for teams of all sizes.
              Get notified when pricing is available.
            </p>

            {/* Email Notification Form */}
            <div className="max-w-md mx-auto mb-16">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-surface-container border border-outline-variant/30 rounded-sm text-white placeholder:text-on-surface-variant focus:outline-none focus:border-[#c11f68] transition-colors"
                />
                <button className="bg-[#c11f68] text-white px-6 py-3 font-bold rounded-sm hover:opacity-90 transition-all whitespace-nowrap">
                  Notify Me
                </button>
              </div>
              <p className="text-xs text-on-surface-variant mt-3 text-left">
                No spam. Unsubscribe anytime. We&apos;ll only email you when pricing is live.
              </p>
            </div>

            {/* What to Expect */}
            <div className="border-t border-outline-variant/20 pt-12">
              <h2 className="text-2xl font-bold mb-8">What to Expect</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-surface-container-low border border-outline-variant/20 p-6 rounded-sm hover:border-[#c11f68]/30 transition-all">
                  <div className="text-4xl font-headline font-bold text-[#c11f68] mb-3">Free Tier</div>
                  <p className="text-sm text-on-surface-variant">
                    Get started with generous free limits for individuals and small teams.
                  </p>
                </div>
                <div className="bg-surface-container-low border border-outline-variant/20 p-6 rounded-sm hover:border-[#c11f68]/30 transition-all">
                  <div className="text-4xl font-headline font-bold text-[#c11f68] mb-3">Flexible Plans</div>
                  <p className="text-sm text-on-surface-variant">
                    Pay-as-you-grow pricing that scales with your agent executions and team size.
                  </p>
                </div>
                <div className="bg-surface-container-low border border-outline-variant/20 p-6 rounded-sm hover:border-[#c11f68]/30 transition-all">
                  <div className="text-4xl font-headline font-bold text-[#c11f68] mb-3">Enterprise</div>
                  <p className="text-sm text-on-surface-variant">
                    Custom solutions for large organizations with dedicated support and SLAs.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16">
              <p className="text-on-surface-variant mb-6">
                Ready to start orchestrating? Sign up now and get early access.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/auth/signup" className="bg-white text-black px-8 py-4 font-bold rounded-sm hover:bg-white/90 transition-all">
                  Start Free Trial
                </Link>
                <Link href="/" className="border border-outline-variant/30 text-white px-8 py-4 font-bold rounded-sm hover:bg-surface-container transition-all">
                  Explore Features
                </Link>
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
        </div>
        <div className="mt-20 px-8 w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-on-surface-variant font-body text-xs uppercase tracking-widest">© 2024 Zyroth Intelligence. Built for the Sovereign Developer.</div>
        </div>
      </footer>
    </div>
  );
}

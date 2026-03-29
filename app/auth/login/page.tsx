import Link from 'next/link';
import { Mail, Lock, ArrowRight, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="bg-[#0e0e0f] text-[#e5e2e3] font-inter min-h-screen selection:bg-[#c11f68] selection:text-[#ffdce4] antialiased overflow-hidden flex flex-col">
      <style>{`
        .glass-panel {
            background: rgba(32, 31, 32, 0.4);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
        }
        .magenta-glow:focus-within {
            box-shadow: 0 0 15px -3px rgba(193, 31, 104, 0.2);
        }
        .carbon-texture {
            background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtrmIHSgJaeVll4bL4_zpSbnBW_q6Fsvq8MOpBYry-Slqhge9XjAVWAmLXhw1La2_Eb3ZgsMq5r46evQ-4jnKyfsNRtupaIUNYVqEWhMiSiBZstdECwsrauX7jtPRnpYMgqGv3qV3GeXYL6ViUUOoVpn_IALfLjEw61j2st7K4H5qK6Bfa9pZ59C0NxhVMKo__mKGPXj-2vKL6Bt4ZN1X5aNbB_korQOhl4DzKwumYlsMX3csbBA_dCHYflPlSGrkblzLM5e0xhNX9');
            opacity: 0.03;
        }
      `}</style>

      {/* Background Decoration */}
      <div className="fixed inset-0 z-0 pointer-events-none carbon-texture"></div>

      {/* Top Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <img src="/logo.png" alt="Zyroth Logo" className="w-8 h-8" />
          <span className="text-xl font-bold tracking-tighter text-[#e5e2e3] font-headline uppercase">Zyroth</span>
        </Link>
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-medium tracking-[0.2em] text-[#e5e2e3]/30 uppercase font-body">System Status: Operational</span>
          <ShieldCheck className="w-4 h-4 text-[#79dc7c]" />
        </div>
      </header>

      <main className="relative grow flex items-center justify-center p-6 z-10">
        {/* Atmospheric Background Element */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#c11f68]/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#007725]/5 rounded-full blur-[100px]"></div>
        </div>

        {/* Authentication Canvas */}
        <div className="w-full max-w-[440px] relative">
          {/* Headline Section */}
          <div className="mb-10 space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter text-[#e5e2e3] leading-none">
              Initialize <br />
              <span className="text-[#ffb1c7]">Console.</span>
            </h1>
            <p className="text-[11px] font-medium tracking-widest text-[#e5e2e3]/40 uppercase font-body">
              Authentication Required // Infrastructure-Chic v1.0
            </p>
          </div>

          {/* Login Card */}
          <div className="glass-panel border border-[#584047]/15 p-8 md:p-10 shadow-2xl">
            <form className="space-y-6">
              {/* Email Field */}
              <div className="space-y-1.5 magenta-glow transition-all">
                <label className="text-[10px] font-bold tracking-widest text-[#e5e2e3]/50 uppercase font-body" htmlFor="email">Identity</label>
                <div className="relative">
                  <input
                    className="w-full bg-transparent border-b border-[#584047]/30 focus:border-[#ffb1c7] border-t-0 border-l-0 border-r-0 text-[#e5e2e3] placeholder:text-[#e5e2e3]/20 py-4 px-0 focus:ring-0 transition-colors font-body text-sm tracking-wide outline-none"
                    id="email"
                    name="email"
                    placeholder="agent@hub.internal"
                    type="email"
                  />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 group-focus-within:opacity-100 transition-opacity">
                    <Mail className="w-4 h-4 text-[#e5e2e3]" />
                  </div>
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-1.5 magenta-glow transition-all">
                <div className="flex justify-between items-end">
                  <label className="text-[10px] font-bold tracking-widest text-[#e5e2e3]/50 uppercase font-body" htmlFor="password">Security Key</label>
                  <a className="text-[10px] font-medium tracking-wide text-[#ffb1c7]/60 hover:text-[#ffb1c7] transition-colors font-body" href="#">Recover Access?</a>
                </div>
                <div className="relative">
                  <input
                    className="w-full bg-transparent border-b border-[#584047]/30 focus:border-[#ffb1c7] border-t-0 border-l-0 border-r-0 text-[#e5e2e3] placeholder:text-[#e5e2e3]/20 py-4 px-0 focus:ring-0 transition-colors font-body text-sm tracking-wide outline-none"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    type="password"
                  />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 group-focus-within:opacity-100 transition-opacity">
                    <Lock className="w-4 h-4 text-[#e5e2e3]" />
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 space-y-6">
                <button
                  className="w-full bg-linear-to-r from-[#c11f68] to-[#8e0048] text-white font-headline font-bold text-sm tracking-[0.15em] uppercase py-4 shadow-lg hover:brightness-110 active:scale-[0.98] transition-all group flex items-center justify-center gap-2"
                  type="submit"
                >
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="relative flex items-center gap-4 py-2">
                  <div className="grow h-px bg-[#584047]/10"></div>
                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#e5e2e3]/20 uppercase font-body">External Providers</span>
                  <div className="grow h-px bg-[#584047]/10"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-[#1c1b1c] hover:bg-[#2a2a2b] border border-[#584047]/10 py-3 flex items-center justify-center gap-3 transition-all group" type="button">
                    <svg className="w-4 h-4 text-[#e5e2e3]/60 group-hover:text-[#e5e2e3] transition-colors" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    <span className="text-[10px] font-bold tracking-widest uppercase">GitHub</span>
                  </button>
                  <button className="bg-[#1c1b1c] hover:bg-[#2a2a2b] border border-[#584047]/10 py-3 flex items-center justify-center gap-3 transition-all group" type="button">
                    <svg className="w-4 h-4 text-[#e5e2e3]/60 group-hover:text-[#e5e2e3] transition-colors" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 12h4" />
                      <path d="M16 12a4 4 0 1 1-4-4" />
                    </svg>
                    <span className="text-[10px] font-bold tracking-widest uppercase">Google</span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Footer Toggle */}
          <div className="mt-8 text-center">
            <p className="text-xs text-[#e5e2e3]/40 font-body tracking-wide">
              Don&apos;t have an account? 
              <Link href="/auth/signup" className="text-[#ffb1c7] font-bold hover:underline underline-offset-4 ml-1">Sign Up</Link>
            </p>
          </div>
        </div>
      </main>

      {/* Branding Footer */}
      <footer className="p-8 flex justify-between items-end z-10 w-full mt-auto">
        <div className="space-y-1">
          <p className="text-[9px] font-bold tracking-widest text-[#e5e2e3]/20 uppercase font-body">Protocol 80.4.11</p>
          <p className="text-[9px] font-medium tracking-widest text-[#e5e2e3]/10 uppercase font-body">© 2024 Zyroth. Kinetic Monolith Architecture.</p>
        </div>
        <div className="flex gap-4">
          <a className="text-[10px] font-bold tracking-widest text-[#e5e2e3]/30 hover:text-[#ffb1c7] transition-colors uppercase font-body" href="#">Terms</a>
          <a className="text-[10px] font-bold tracking-widest text-[#e5e2e3]/30 hover:text-[#ffb1c7] transition-colors uppercase font-body" href="#">Privacy</a>
        </div>
      </footer>
    </div>
  );
}

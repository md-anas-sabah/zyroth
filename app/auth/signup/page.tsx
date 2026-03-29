import Link from 'next/link';
import { User, Mail, Lock, Eye, ArrowRight } from 'lucide-react';

export default function SignupPage() {
  return (
    <div className="bg-[#0e0e0f] text-[#e5e2e3] font-inter min-h-screen selection:bg-[#c11f68] selection:text-[#ffdce4] antialiased overflow-hidden flex flex-col">
      <style>{`
        .glass-card {
            background: rgba(32, 31, 32, 0.6);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
        }
        .text-glow:focus {
            box-shadow: 0 0 15px rgba(193, 31, 104, 0.15);
        }
      `}</style>

      {/* Top Navigation */}
      <header className="fixed top-0 z-50 w-full bg-[#0e0e0f]/80 backdrop-blur-md border-b border-[#584047]/15">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-[1440px] mx-auto">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Zyroth Logo" className="w-8 h-8" />
            <span className="text-xl font-bold tracking-tighter text-[#e5e2e3] font-headline uppercase leading-none">Zyroth</span>
            <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#c11f68] bg-[#c11f68]/10 px-1.5 py-0.5 rounded-sm">Auth</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-[11px] font-medium tracking-[0.05em] uppercase text-[#e5e2e3]/60 hover:text-[#c11f68] transition-colors duration-200" href="#">Docs</a>
            <a className="text-[11px] font-medium tracking-[0.05em] uppercase text-[#e5e2e3]/60 hover:text-[#c11f68] transition-colors duration-200" href="#">System Status</a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="grow flex items-center justify-center px-4 pt-20 pb-12 relative overflow-hidden z-10">
        {/* Abstract Background Detail */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden opacity-20">
          <div className="absolute top-[20%] left-[10%] w-160 h-160 bg-[#c11f68]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[10%] w-120 h-120 bg-[#007725]/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="w-full max-w-[440px] relative z-10">
          {/* Glassmorphic Form Card */}
          <div className="glass-card p-8 md:p-10 border border-[#584047]/20 shadow-2xl">
            <div className="mb-10 text-center md:text-left">
              <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-2">Initialize Instance</h1>
              <p className="text-[#dfbec6] text-sm tracking-wide">Enter the collective to deploy your first agent.</p>
            </div>

            <form className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-[10px] font-medium tracking-widest uppercase text-[#dfbec6] flex items-center gap-2">
                  <User className="w-3.5 h-3.5" />
                  Full Identity
                </label>
                <input
                  className="w-full bg-[#1c1b1c] border-0 border-b border-[#584047]/30 px-4 py-3 text-on-surface placeholder:text-[#dfbec6]/30 focus:ring-0 focus:border-[#ffb1c7] text-sm transition-all text-glow outline-none"
                  placeholder="Hideo Kojima"
                  type="text"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-[10px] font-medium tracking-widest uppercase text-[#dfbec6] flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" />
                  Neural Link (Email)
                </label>
                <input
                  className="w-full bg-[#1c1b1c] border-0 border-b border-[#584047]/30 px-4 py-3 text-on-surface placeholder:text-[#dfbec6]/30 focus:ring-0 focus:border-[#ffb1c7] text-sm transition-all text-glow outline-none"
                  placeholder="operator@zyroth.com"
                  type="email"
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className="text-[10px] font-medium tracking-widest uppercase text-[#dfbec6] flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5" />
                  Access Protocol
                </label>
                <div className="relative">
                  <input
                    className="w-full bg-[#1c1b1c] border-0 border-b border-[#584047]/30 px-4 py-3 text-on-surface placeholder:text-[#dfbec6]/30 focus:ring-0 focus:border-[#ffb1c7] text-sm transition-all text-glow outline-none"
                    placeholder="••••••••••••"
                    type="password"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#dfbec6]/40 hover:text-[#ffb1c7] transition-colors" type="button">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Password Requirements */}
              <div className="flex flex-wrap gap-4 pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#79dc7c]"></span>
                  <span className="text-[10px] text-[#dfbec6]/60 uppercase tracking-widest">Min 12 Chars</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#584047]"></span>
                  <span className="text-[10px] text-[#dfbec6]/60 uppercase tracking-widest">Entropy Check</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                className="w-full mt-4 bg-linear-to-r from-[#c11f68] to-[#b61360] text-white py-4 px-6 text-[11px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-[#c11f68]/20 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                type="submit"
              >
                Create Account
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Alternate Login */}
            <div className="mt-10 pt-8 border-t border-[#584047]/10">
              <p className="text-[10px] text-center text-[#dfbec6]/40 uppercase tracking-[0.2em] mb-6">Authorize via External Grid</p>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 bg-[#1c1b1c] hover:bg-[#2a2a2b] py-3 border border-[#584047]/10 transition-colors group" type="button">
                  <svg className="w-4 h-4 text-[#e5e2e3]/60 group-hover:text-[#e5e2e3] transition-colors" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 12h4" />
                    <path d="M16 12a4 4 0 1 1-4-4" />
                  </svg>
                  <span className="text-[10px] font-medium uppercase tracking-widest text-[#e5e2e3]/80">Google</span>
                </button>
                <button className="flex items-center justify-center gap-3 bg-[#1c1b1c] hover:bg-[#2a2a2b] py-3 border border-[#584047]/10 transition-colors group" type="button">
                  <svg className="w-4 h-4 text-[#e5e2e3]/60 group-hover:text-[#e5e2e3] transition-colors" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <span className="text-[10px] font-medium uppercase tracking-widest text-[#e5e2e3]/80">GitHub</span>
                </button>
              </div>
            </div>

            {/* Account Toggle */}
            <div className="mt-8 text-center">
              <p className="text-xs text-[#dfbec6] tracking-wide">
                Already have an account? 
                <Link href="/auth/login" className="text-[#ffb1c7] font-semibold hover:underline ml-1">Sign In</Link>
              </p>
            </div>
          </div>

          <p className="mt-8 text-center text-[10px] text-[#dfbec6]/30 uppercase tracking-[0.15em] leading-relaxed max-w-[300px] mx-auto">
            By initializing you agree to our 
            <a className="hover:text-on-surface transition-colors mx-1" href="#">Operational Protocols</a> 
            &amp; 
            <a className="hover:text-on-surface transition-colors mx-1" href="#">Data Residency Laws</a>.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-between items-center px-12 py-8 w-full z-10 mt-auto">
        <div className="font-body text-[10px] uppercase tracking-widest text-[#e5e2e3]/30">
          © 2024 Zyroth. Kinetic Monolith Architecture.
        </div>
        <div className="flex gap-6">
          <a className="font-body text-[10px] uppercase tracking-widest text-[#e5e2e3]/30 hover:text-[#c11f68] transition-opacity" href="#">Privacy</a>
          <a className="font-body text-[10px] uppercase tracking-widest text-[#e5e2e3]/30 hover:text-[#c11f68] transition-opacity" href="#">Security</a>
          <a className="font-body text-[10px] uppercase tracking-widest text-[#e5e2e3]/30 hover:text-[#c11f68] transition-opacity" href="#">Status</a>
        </div>
      </footer>

      {/* Decoration Lines */}
      <div className="hidden lg:block fixed left-12 top-1/2 -translate-y-1/2 w-px h-32 bg-linear-to-b from-transparent via-[#584047]/30 to-transparent pointer-events-none"></div>
      <div className="hidden lg:block fixed right-12 top-1/2 -translate-y-1/2 w-px h-32 bg-linear-to-b from-transparent via-[#584047]/30 to-transparent pointer-events-none"></div>
    </div>
  );
}

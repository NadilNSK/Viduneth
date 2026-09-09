import React from 'react';

const SignIn: React.FC = () => {
  return (
    <div className="w-full">
      




<main className="w-full flex-1 flex flex-col items-center justify-center px-4 py-8 relative z-10" data-purpose="auth-container">

<div className="mb-5 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-slate-500">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-slate-200/80 badge-blur text-slate-700 shadow-sm">
<svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
<path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd" />
</svg>
        Secure TLS LMS Access
      </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-slate-200/80 badge-blur text-slate-700 shadow-sm">
<span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
        G.C.E. A/L &amp; O/L Sri Lanka
      </span>
<span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-slate-200/80 badge-blur text-slate-700 shadow-sm">
        ⚡ Instant VIDU AI Class Sync
      </span>
</div>

<div className="w-full max-w-[490px] bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-card relative overflow-hidden transition-all duration-300">

<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-36 bg-gradient-to-b from-sky-400/20 to-transparent blur-2xl pointer-events-none"></div>

<div className="flex justify-center mb-6" data-purpose="brand-logo-emblem"><div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[3px] bg-gradient-to-tr from-sky-500 via-sky-400 to-indigo-500 shadow-lg shadow-sky-500/15 flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform duration-300"><div className="w-full h-full rounded-full bg-white flex items-center justify-center p-1.5 overflow-hidden"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG_agg61wl2AA_tJER5HJcEcZ-j0aUYfCS8KZhtTsMG13uhBrpKHddmFX0aaDSG444EclrqOlyVZCAYcWPr4cZsIcWgKTITBT72tAXVXiFOaiCVmYA8hDYof51XnvOPcRgfsRbvH9C-mdg1CFme1bURTunoJUprITOT61Y1iG891MMeptLkq8rb5iBChYclEGFLaHcJNibfwmLp70F7wSpuI-fuSQsUV1LqVj1Pgr5F0vj73sc6q5Et5gSeCfSJQ69" alt="Viduneth Education Center Logo" className="w-full h-full object-contain rounded-full" /></div><div className="absolute inset-0 rounded-full border border-sky-400/40 animate-ping pointer-events-none opacity-40"></div></div></div>

<div className="text-center mb-7">
<h1 className="text-2xl sm:text-[26px] font-extrabold tracking-tight text-slate-900">
          Sign in to Viduneth
        </h1>
<p className="text-sm sm:text-[14.5px] text-slate-500 mt-2 max-w-sm mx-auto leading-relaxed">
          Use your Google account — the same one you use for class.
        </p>
</div>

<div className="mb-5" data-purpose="google-sso-action">
<button className="w-full py-3.5 px-6 rounded-full border border-slate-300 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-semibold text-[15px] flex items-center justify-center gap-3.5 shadow-sm hover:shadow transition-all duration-200 group focus:outline-none focus:ring-4 focus:ring-sky-500/15" type="button">

<svg className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
</svg>
<span className="tracking-tight">Continue with Google</span>
</button>
</div>

<p className="text-xs text-center text-slate-500 mb-6 leading-relaxed">
        New here? Sign in with Google and we'll walk you through registration.
      </p>

<div className="relative my-6" data-purpose="divider">
<div aria-hidden="true" className="absolute inset-0 flex items-center">
<div className="w-full border-t border-slate-200"></div>
</div>

</div>

<form className="space-y-4" data-purpose="direct-credentials-form" id="student-login-form" onSubmit={(e) => e.preventDefault()}>
<div>

<div className="relative rounded-xl shadow-sm">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
</div>

</div>
</div>
<div>

<div className="relative rounded-xl shadow-sm">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
</div>


</div>
</div>

</form>


</div>
</main>



<footer className="w-full py-5 px-6 border-t border-slate-200/50 bg-white/40 backdrop-blur-sm z-10 text-center" data-purpose="bottom-hotline-footer">
<div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-600">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-sky-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
</svg>
<span className="">Student Support Hotline:</span>
<a className="font-bold text-slate-900 hover:text-sky-600 transition-colors tracking-wide underline sm:no-underline" href="tel:0720566566">
          071 169 10 76</a>
</div>
<span className="hidden sm:inline text-slate-300">•</span>
<div className="flex items-center gap-1.5 text-xs text-slate-500">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="">Sinhala &amp; English Support Available (8 AM - 9 PM)</span>
</div>
<span className="hidden sm:inline text-slate-300">•</span>
<a className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700" href="https://wa.me/94720566566" rel="noopener noreferrer" target="_blank">
<span className="">WhatsApp Quick Chat</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
</a>
</div>
</footer>















    </div>
  );
};

export default SignIn;

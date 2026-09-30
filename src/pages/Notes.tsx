import React from 'react';

const Notes: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex-1 flex max-w-[1720px] w-full mx-auto p-4 md:p-6 lg:p-8 gap-6 relative">
        <aside aria-label="Portal Navigation" className="sticky top-20 self-start z-30"><div className="w-16 bg-white shadow-xl shadow-slate-200/60 rounded-full py-4 px-2 flex flex-col items-center gap-3 border border-slate-100">
  
  <a href="/dashboard" title="Dashboard" className="w-11 h-11 rounded-2xl bg-[#0284c7] hover:bg-[#0369a1] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-sky-500/20">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  </a>
  
  <a href="/my-classes" title="My Classes" className="w-11 h-11 rounded-2xl bg-[#10b981] hover:bg-[#059669] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/40 ring-2 ring-emerald-400 ring-offset-2 ring-offset-white relative">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
    </svg>
    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white"></span>
  </a>
  
  <a href="/notices" title="Notices" className="w-11 h-11 rounded-2xl bg-[#f97316] hover:bg-[#ea580c] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-orange-500/20">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
    </svg>
  </a>
  
  <a href="/store" title="Store &amp; Tutes" className="w-11 h-11 rounded-2xl bg-[#8b5cf6] hover:bg-[#7c3aed] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-violet-500/20">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z" />
    </svg>
  </a>
  
  <a href="/analytics" title="Mark Analyze" className="w-11 h-11 rounded-2xl bg-[#ec4899] hover:bg-[#db2777] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-pink-500/20">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
    </svg>
  </a>
  
  <a href="/notes" title="My Notes &amp; Resources" className="w-11 h-11 rounded-2xl bg-[#22c55e] hover:bg-[#16a34a] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-green-500/20">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    </svg>
  </a>
  
  <a href="/profile" title="My Profile" className="w-11 h-11 rounded-2xl bg-[#eab308] hover:bg-[#ca8a04] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-amber-500/20">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  </a>
  
  <div className="h-4"></div>
  
  <a href="/sign-in" title="Log Out" className="w-11 h-11 rounded-2xl bg-[#ef4444] hover:bg-[#dc2626] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-red-500/20">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    </svg>
  </a>
</div></aside>

        <main className="flex-1 min-w-0 space-y-6">
          <div className="flex flex-col gap-6">
            <section className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                <h2 className="text-xl font-bold text-slate-800">My Notes & Resources</h2>
                <p className="text-slate-500 mt-2">Find all your downloaded notes and resources here.</p>
                
                <div className="mt-6 p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <p className="text-center text-slate-400">No notes available yet.</p>
                </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Notes;

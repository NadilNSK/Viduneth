import React from 'react';

const Dashboard: React.FC = () => {
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

<section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0b2554] via-[#0f346c] to-[#1e40af] text-white p-6 md:p-8 shadow-xl border border-blue-900/30" data-purpose="hero-banner">

<div className="absolute -right-12 -top-12 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute right-1/4 -bottom-16 w-60 h-60 bg-pink-500/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
<div className="space-y-3 max-w-2xl">

<h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-pink-300">Nadil Nandinu</span>&nbsp;👋
            </h1>

<div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-blue-200/90">
<span className="flex items-center gap-1.5"><i className="fa-solid fa-chalkboard-user text-cyan-300"></i> Master Jayantha Sisirakumara</span>
<span className="w-1 h-1 rounded-full bg-blue-300"></span>

<span className="w-1 h-1 rounded-full bg-blue-300"></span>

</div>
</div>


</div>
</section>


<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4" data-purpose="academic-metrics">

<div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between">
<span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Attendance Rate</span>
<div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg">
<i className="fa-solid fa-clipboard-check"></i>
</div>
</div>
<div className="mt-2">
<div className="text-2xl font-black text-slate-800">96.4%</div>
<div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold mt-1">
<i className="fa-solid fa-arrow-trend-up"></i>
<span className="">+2.1% from last month</span>
</div>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
<div className="bg-emerald-500 h-full rounded-full" style={{ width: '96.4%' }}></div>
</div>
</div>

<div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between">
<span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tutes &amp; Papers</span>
<div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg">
<i className="fa-solid fa-file-circle-check"></i>
</div>
</div>
<div className="mt-2">
<div className="text-2xl font-black text-slate-800">28 <span className="text-sm font-semibold text-slate-400">/ 32 Done</span></div>
<div className="flex items-center gap-1.5 text-xs text-amber-600 font-semibold mt-1">
<i className="fa-regular fa-clock"></i>
<span className="">Paper #14 due in 3 days</span>
</div>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
<div className="bg-blue-500 h-full rounded-full" style={{ width: '87.5%' }}></div>
</div>
</div>



<div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between">
<span className="text-xs font-bold text-slate-400 uppercase tracking-wider">VIDU AI Doubts Solved</span>
<div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg">
<i className="fa-solid fa-robot"></i>
</div>
</div>
<div className="mt-2">
<div className="text-2xl font-black text-slate-800">142 <span className="text-sm font-semibold text-slate-400">Queries</span></div>
<div className="flex items-center gap-1.5 text-xs text-purple-600 font-semibold mt-1">
<i className="fa-solid fa-bolt"></i>
<span className="">Instant physics step-solutions</span>
</div>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
<div className="bg-purple-500 h-full rounded-full" style={{ width: '74%' }}></div>
</div>
</div>
</section>


<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 space-y-6">

<section className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm" data-purpose="enrolled-classes" id="classes">
<div className="flex items-center justify-between mb-5">
<div>
<h2 className="text-lg font-bold text-slate-900">Enrolled Classes (2025 O/L)</h2>
<p className="text-xs text-slate-500">Live lecture schedules, recorded libraries &amp; downloadable theory materials</p>
</div>
<a className="text-xs font-bold text-cyan-600 hover:text-cyan-700 flex items-center gap-1 hover:underline" href="#all-classes">
<span className="">View Full Schedule</span>
<i className="fa-solid fa-chevron-right text-[10px]"></i>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="border border-slate-200/80 rounded-2xl p-4 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/5 transition-all flex flex-col justify-between group bg-slate-50/50 hover:bg-white">
<div>
<div className="flex items-center justify-between mb-3">
<span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-cyan-100 text-cyan-800">Theory &amp; Paper</span>
<span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Today 4:00 PM
                    </span>
</div>
<h3 className="font-bold text-slate-900 group-hover:text-cyan-600 transition-colors text-sm">Mathematics</h3>
<p className="text-xs text-slate-500 mt-0.5">Master Jayantha Sisirakumara</p>
<div className="mt-4 pt-3 border-t border-slate-200/60">
<div className="flex justify-between text-xs text-slate-500 mb-1">
<span className="">Syllabus Covered</span>
<span className="font-bold text-slate-700">82%</span>
</div>
<div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
<div className="bg-cyan-500 h-full rounded-full" style={{ width: '82%' }}></div>
</div>
</div>
</div>
<div className="mt-4 pt-3 flex items-center gap-2">
<a className="flex-1 text-center py-2 px-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs shadow-xs transition-colors" href="#class-maths">
                    Enter Class
                  </a>
<button className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 text-xs" title="Download latest Tute PDF">
<i className="fa-solid fa-file-pdf"></i>
</button>
</div>
</div>

<div className="border border-slate-200/80 rounded-2xl p-4 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all flex flex-col justify-between group bg-slate-50/50 hover:bg-white">
<div>
<div className="flex items-center justify-between mb-3">
<span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800">Masterclass</span>
<span className="text-[11px] font-medium text-slate-500">Saturday 8:00 AM</span>
</div>
<h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-sm">English Language</h3>
<p className="text-xs text-slate-500 mt-0.5">Ms. Hansika</p>
<div className="mt-4 pt-3 border-t border-slate-200/60">
<div className="flex justify-between text-xs text-slate-500 mb-1">
<span className="">Syllabus Covered</span>
<span className="font-bold text-slate-700">75%</span>
</div>
<div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
<div className="bg-blue-600 h-full rounded-full" style={{ width: '75%' }}></div>
</div>
</div>
</div>
<div className="mt-4 pt-3 flex items-center gap-2">
<a className="flex-1 text-center py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs shadow-xs transition-colors" href="#class-physics">
                    Enter Class
                  </a>
<button className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 text-xs" title="Download latest Tute PDF">
<i className="fa-solid fa-file-pdf"></i>
</button>
</div>
</div>

<div className="border border-slate-200/80 rounded-2xl p-4 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/5 transition-all flex flex-col justify-between group bg-slate-50/50 hover:bg-white">
<div>
<div className="flex items-center justify-between mb-3">
<span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">Revision Kit</span>
<span className="text-[11px] font-medium text-slate-500">Sunday 1:00 PM</span>
</div>
<h3 className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors text-sm">ICT (Information Technology)</h3>
<p className="text-xs text-slate-500 mt-0.5">Master Neminda</p>
<div className="mt-4 pt-3 border-t border-slate-200/60">
<div className="flex justify-between text-xs text-slate-500 mb-1">
<span className="">Syllabus Covered</span>
<span className="font-bold text-slate-700">68%</span>
</div>
<div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full rounded-full" style={{ width: '68%' }}></div>
</div>
</div>
</div>
<div className="mt-4 pt-3 flex items-center gap-2">
<a className="flex-1 text-center py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs shadow-xs transition-colors" href="#class-chemistry">
                    Enter Class
                  </a>
<button className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 text-xs" title="Download latest Tute PDF">
<i className="fa-solid fa-file-pdf"></i>
</button>
</div>
</div>
</div>
</section>


<section className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm" data-purpose="mark-analytics-preview" id="analytics">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
<div>
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
<h2 className="text-lg font-bold text-slate-900">Mark Analyze &amp; Term Exam Diagnostics</h2>
</div>
<p className="text-xs text-slate-500">Continuous Paper Marking &amp; Term Exam Performance Graph</p>
</div>
<div className="flex items-center gap-2">
<span className="px-3 py-1 rounded-lg text-xs font-bold bg-pink-50 text-pink-700 border border-pink-200/60">
                  Latest Paper Score: 92/100 (A+)
                </span>
</div>
</div>

<div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
<div className="flex items-end justify-between h-44 gap-2 pt-6 px-2">

<div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
<div className="w-full bg-pink-200 group-hover:bg-pink-300 rounded-t-md transition-all relative" style={{ height: '68%' }}>
<span className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-0.5 px-1.5 rounded pointer-events-none transition-opacity">68%</span>
</div>
<span className="text-[10px] font-bold text-slate-500">P1</span>
</div>

<div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
<div className="w-full bg-pink-200 group-hover:bg-pink-300 rounded-t-md transition-all relative" style={{ height: '71%' }}>
<span className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-0.5 px-1.5 rounded pointer-events-none transition-opacity">71%</span>
</div>
<span className="text-[10px] font-bold text-slate-500">P2</span>
</div>

<div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
<div className="w-full bg-pink-200 group-hover:bg-pink-300 rounded-t-md transition-all relative" style={{ height: '70%' }}>
<span className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-0.5 px-1.5 rounded pointer-events-none transition-opacity">70%</span>
</div>
<span className="text-[10px] font-bold text-slate-500">P3</span>
</div>

<div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
<div className="w-full bg-pink-300 group-hover:bg-pink-400 rounded-t-md transition-all relative" style={{ height: '76%' }}>
<span className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-0.5 px-1.5 rounded pointer-events-none transition-opacity">76%</span>
</div>
<span className="text-[10px] font-bold text-slate-500">P4</span>
</div>

<div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
<div className="w-full bg-pink-300 group-hover:bg-pink-400 rounded-t-md transition-all relative" style={{ height: '79%' }}>
<span className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-0.5 px-1.5 rounded pointer-events-none transition-opacity">79%</span>
</div>
<span className="text-[10px] font-bold text-slate-500">P5</span>
</div>

<div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
<div className="w-full bg-pink-400 group-hover:bg-pink-500 rounded-t-md transition-all relative" style={{ height: '82%' }}>
<span className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-0.5 px-1.5 rounded pointer-events-none transition-opacity">82%</span>
</div>
<span className="text-[10px] font-bold text-slate-500">P6</span>
</div>

<div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
<div className="w-full bg-pink-400 group-hover:bg-pink-500 rounded-t-md transition-all relative" style={{ height: '85%' }}>
<span className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-0.5 px-1.5 rounded pointer-events-none transition-opacity">85%</span>
</div>
<span className="text-[10px] font-bold text-slate-500">P7</span>
</div>

<div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
<div className="w-full bg-pink-500 group-hover:bg-pink-600 rounded-t-md transition-all relative" style={{ height: '88%' }}>
<span className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-0.5 px-1.5 rounded pointer-events-none transition-opacity">88%</span>
</div>
<span className="text-[10px] font-bold text-slate-500">P8</span>
</div>

<div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
<div className="w-full bg-pink-500 group-hover:bg-pink-600 rounded-t-md transition-all relative" style={{ height: '89%' }}>
<span className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-0.5 px-1.5 rounded pointer-events-none transition-opacity">89%</span>
</div>
<span className="text-[10px] font-bold text-slate-500">P9</span>
</div>

<div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
<div className="w-full bg-pink-600 group-hover:bg-pink-700 rounded-t-md shadow-md shadow-pink-500/30 transition-all relative" style={{ height: '92%' }}>
<span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-pink-600 text-white text-[10px] font-black py-0.5 px-1.5 rounded shadow-xs">92%</span>
</div>
<span className="text-[10px] font-black text-pink-600">P10</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
<div className="p-3 bg-white border border-slate-200/80 rounded-xl">
<div className="flex justify-between text-xs font-semibold mb-1">
<span className="text-slate-700">ICT</span>
<span className="text-pink-600 font-bold">88%</span>
</div>
<div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
<div className="bg-pink-500 h-full rounded-full" style={{ width: '88%' }}></div>
</div>
</div>
<div className="p-3 bg-white border border-slate-200/80 rounded-xl">
<div className="flex justify-between text-xs font-semibold mb-1">
<span className="text-slate-700">Mathematics</span>
<span className="text-pink-600 font-bold">84%</span>
</div>
<div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
<div className="bg-pink-500 h-full rounded-full" style={{ width: '84%' }}></div>
</div>
</div>
<div className="p-3 bg-white border border-slate-200/80 rounded-xl">
<div className="flex justify-between text-xs font-semibold mb-1">
<span className="text-slate-700">English</span>
<span className="text-pink-600 font-bold">91%</span>
</div>
<div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
<div className="bg-pink-500 h-full rounded-full" style={{ width: '91%' }}></div>
</div>
</div>
</div>
<div className="mt-4 text-right">
<a className="text-xs font-bold text-pink-600 hover:text-pink-700 inline-flex items-center gap-1.5" href="#full-report">

<i className="fa-solid fa-arrow-right text-[11px]"></i>
</a>
</div>
</section>

</div>

<div className="lg:col-span-4 space-y-6">

<div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-5 border border-indigo-900/50 shadow-lg relative overflow-hidden" data-purpose="vidu-ai-fast-widget">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center text-xs font-bold text-white shadow-md">
<i className="fa-solid fa-brain"></i>
</div>
<div>
<h3 className="text-sm font-bold">VIDU AI Doubt Solver</h3>
<p className="text-[10px] text-indigo-300">Trained on 25 years of Sri Lankan A/L past papers</p>
</div>
</div>
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/30 text-indigo-200 border border-indigo-400/20">24/7 Active</span>
</div>

<div className="relative mt-3">
<input className="w-full bg-white/10 hover:bg-white/15 focus:bg-white/20 text-xs text-white placeholder-slate-400 px-3.5 py-2.5 rounded-xl border border-white/15 focus:border-cyan-400 outline-none pr-10 transition-all" placeholder="Ask any Physics / Maths question..." type="text" />
<button className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white flex items-center justify-center text-xs shadow-xs transition-colors">
<i className="fa-solid fa-paper-plane"></i>
</button>
</div>

<div className="mt-3 flex flex-wrap gap-1.5">
<button className="text-[10px] bg-white/5 hover:bg-white/10 border border-white/10 px-2.5 py-1 rounded-lg text-slate-300 transition-colors">
                ⚡ Bernoulli's theorem derivation
              </button>
<button className="text-[10px] bg-white/5 hover:bg-white/10 border border-white/10 px-2.5 py-1 rounded-lg text-slate-300 transition-colors">
                ∫ x·e^(2x) dx step-by-step
              </button>
</div>
</div>


<section className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm" data-purpose="notices-broadcasts" id="notices">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
<h3 className="font-bold text-slate-900 text-sm">Notices &amp; Circulars</h3>
</div>
<span className="text-[10px] font-bold bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full border border-orange-200/50">3 New</span>
</div>
<div className="space-y-3">

<div className="p-3 rounded-xl bg-orange-50/40 border border-orange-100 hover:border-orange-300 transition-colors">
<div className="flex items-start justify-between gap-2">
<h4 className="text-xs font-bold text-slate-800">Paper #15 Printed kit Dispatched</h4>
<span className="text-[10px] text-orange-600 font-bold whitespace-nowrap">Today</span>
</div>
<p className="text-[11px] text-slate-500 mt-1">Sent via Domex Courier. Track package using your registered student mobile number.</p>
</div>

<div className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition-colors">
<div className="flex items-start justify-between gap-2">
<h4 className="text-xs font-bold text-slate-800">Rotational Dynamics Seminar</h4>
<span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">Friday</span>
</div>
<p className="text-[11px] text-slate-500 mt-1">Special free revision session for all 2025 batch students with Dr. Janaka at 6:30 PM.</p>
</div>

<div className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition-colors">
<div className="flex items-start justify-between gap-2">
<h4 className="text-xs font-bold text-slate-800">Mock Exam Hall Admission Cards</h4>
<span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">15 Mar</span>
</div>
<p className="text-[11px] text-slate-500 mt-1">Download digital QR admission for Colombo and Kandy examination halls.</p>
</div>
</div>
</section>





<section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-5 border border-indigo-100 shadow-sm" data-purpose="merchandise-store" id="store">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
<h3 className="font-bold text-slate-900 text-sm">Viduneth Official Store</h3>
</div>
<span className="text-[10px] font-bold text-indigo-700 bg-white px-2 py-0.5 rounded-full border border-indigo-200">Gems Store</span>
</div>
<p className="text-xs text-slate-600 mb-3">Exchange your earned test study gems for official Viduneth merchandise.</p>
<div className="bg-white p-3 rounded-2xl border border-indigo-100/80 flex items-center justify-between gap-3 shadow-xs">
<div className="flex items-center gap-3">
<div className="w-11 h-11 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-lg">
<i className="fa-solid fa-shirt"></i>
</div>
<div>
<h4 className="text-xs font-bold text-slate-800">Viduneth 2025 Edition Polo</h4>
<p className="text-[11px] font-bold text-amber-600">350 V-Gems 💎</p>
</div>
</div>
<button className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors">
                Redeem
              </button>
</div>
</section>

</div>
</div>

</main>

</div>


<footer className="border-t border-slate-200 bg-white py-6 px-4 text-center text-xs text-slate-400 mt-12" data-purpose="page-footer">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="flex items-center gap-2">
<span className="font-bold text-slate-700">Viduneth Education Center</span>
<span className="">— Advanced Level Learning Management Portal</span>
</div>
<div>
<span className="">Hotline: +94 11 289 4455 · Technical Support 24/7 · Version 4.8.2-LK</span>
</div>
</div>
</footer>






    </div>
  );
};

export default Dashboard;

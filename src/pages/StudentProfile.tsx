import React from 'react';

const StudentProfile: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col antialiased selection:bg-blue-600 selection:text-white">
      {/* Custom Styles for Scrollbars & Refined Accents */}
      <style>
        {`
          .custom-shadow {
            box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.02);
          }
          .custom-scroll::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scroll::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scroll::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 9999px;
          }
        `}
      </style>

      {/* BEGIN: TopHeader */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 lg:px-8 py-2.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Center Brand Info */}
          <div className="flex items-center gap-3">
            <img alt="Viduneth Education Center Logo" className="h-10 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnEvNsIp_OZ5gFpeUPLM26DfF0pp1KosTVJ7-mci0QbkIQdmHno8MgvA2sNvDfSXipi7AEL5kJL5bfGN6Pg4gfLlmuodVOtAw4udvjMR35juP5U5r8e742DrIAuoyLryourPPBuK28GccVn5ShOr2DY9VLRCmbUXEgUMat8Q-k7Q0d8_LnRqLmtNoiV1yCIhyn7UF-pl-og-DX5dULyGBpWsNv90WGbeMnwQTucRwnitFjB2BART18yO-J2lWASXK2"/>
            <div className="hidden sm:block border-l border-slate-200 pl-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Portal</span>
              <p className="text-sm font-bold text-slate-800 tracking-tight">Viduneth LMS &amp; Exam Center</p>
            </div>
          </div>
          {/* Center Title */}
          <div className="flex items-center gap-2">
            <span className="text-xl">🏖️</span>
            <h1 className="text-lg lg:text-xl font-bold text-slate-800">My Profile</h1>
          </div>
          {/* Right User & Live Status Badges */}
          <div className="flex items-center gap-3">
            {/* Live Online Pill */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Live Session Online
            </div>
            {/* Notification Bell */}
            <button aria-label="Notifications" className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors relative" type="button">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full border-2 border-white"></span>
            </button>
            {/* User Chip */}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-800 font-bold text-xs flex items-center justify-center border border-cyan-200">
                JJ
              </div>
              <div className="hidden lg:block text-left">
                <div className="text-xs font-bold text-slate-800 leading-tight">Jayali Janulya</div>
                <div className="text-[10px] font-medium text-slate-500">STU-2851970</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* END: TopHeader */}

      {/* Main Container Layout */}
      <div className="max-w-7xl mx-auto w-full px-3 sm:px-6 lg:px-8 py-6 flex gap-6 items-start">
        {/* BEGIN: LeftVerticalNavigation */}
        {/* Floating Vertical Colorful Navigation matching reference image 9 */}
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
        {/* END: LeftVerticalNavigation */}

        {/* BEGIN: MainContentGrid */}
        <main className="flex-1 w-full flex flex-col gap-6" data-purpose="profile-body-content">
          {/* TOP ROW: Profile Overview & Quick Action Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Identity Card (Left) */}
            <div className="md:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/80 custom-shadow flex flex-col items-center justify-center text-center">
              <div className="w-28 h-28 rounded-full bg-cyan-100/70 border-4 border-cyan-50 flex items-center justify-center shadow-inner mb-4">
                <span className="text-3xl font-bold text-cyan-600 tracking-wide">JJ</span>
              </div>
              <h2 className="text-xl font-bold text-slate-800">Jayali Janulya</h2>
              <p className="text-sm font-medium text-slate-500 mt-0.5">Student ID: 2851970</p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                Active 2028 A/L Student
              </div>
            </div>
            {/* Top Right Action Badges (Middle & Right Cards) */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Contact Support Card (Teal Gradient/Solid) */}
              <div className="rounded-3xl p-6 bg-[#00897b] text-white custom-shadow relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg leading-tight">Contact Support</h3>
                    <p className="text-teal-100 text-sm mt-1 font-medium">Chat with us 👋</p>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center text-white backdrop-blur-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="inline-flex items-center text-xs font-medium bg-emerald-950/20 px-2.5 py-1 rounded-lg text-emerald-100">
                    ✓ 24/7 Active
                  </span>
                  <a className="text-xs font-semibold bg-white text-teal-800 px-3 py-1.5 rounded-xl hover:bg-teal-50 transition-colors shadow-sm" href="#support-chat">
                    Start Chat
                  </a>
                </div>
              </div>
              {/* NIC Verification Card (Vibrant Amber/Orange) */}
              <div className="rounded-3xl p-6 bg-[#f59e0b] text-white custom-shadow relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-amber-100 font-semibold">NIC Verification</span>
                    <h3 className="font-bold text-lg leading-tight mt-0.5">Verification Pending...</h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2H9.17A3.001 3.001 0 0112 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="inline-flex items-center text-xs font-medium text-amber-950 bg-black/10 px-2.5 py-1 rounded-lg">
                    ⏳ Pending Approval
                  </span>
                  <button className="text-xs font-semibold bg-white text-amber-700 px-3 py-1.5 rounded-xl hover:bg-amber-50 transition-colors shadow-sm" type="button">
                    Re-upload NIC
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2: Left Column (Marks Summary) + Right Column (Student Info Form) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* BEGIN: PaperMarksSummaryCard */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/80 custom-shadow flex flex-col justify-between" data-purpose="paper-marks-summary">
              <div>
                <h3 className="text-base font-bold text-slate-800">Paper Marks - Best</h3>
                <p className="text-xs text-slate-400 mt-0.5">Top achieved rank in physics paper test</p>
                <div className="flex items-center justify-center py-6">
                  {/* Shield / Ribbon Graphic */}
                  <div className="relative flex items-center justify-center w-20 h-24 bg-gradient-to-b from-amber-400 to-amber-500 text-white rounded-t-2xl rounded-b-[40px] shadow-lg shadow-amber-200">
                    <svg className="w-10 h-10 drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l8 3.6v6.4c0 5-3.4 9.7-8 11-4.6-1.3-8-6-8-11V5.6L12 2z"></path>
                    </svg>
                    <div className="absolute -bottom-2 bg-yellow-600 text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full border border-yellow-200">
                      TOP RANK
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-center border-t border-slate-100 pt-4">
                  <div className="p-2 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="text-xs text-slate-500 font-medium">Best Rank</div>
                    <div className="text-xl font-extrabold text-slate-800 mt-0.5">2327</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">out of 2,785</div>
                    <div className="text-[10px] text-blue-600 font-medium mt-1">2028 TRAINING PAPER 01</div>
                  </div>
                  <div className="p-2 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="text-xs text-slate-500 font-medium">Best Marks</div>
                    <div className="text-xl font-extrabold text-emerald-600 mt-0.5">18 <span className="text-xs text-slate-400 font-normal">/ 20</span></div>
                    <div className="text-[10px] text-slate-400 mt-0.5">90.0% Grade A</div>
                    <div className="text-[10px] text-blue-600 font-medium mt-1">2028 TRAINING PAPER 01</div>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-center text-slate-400 mt-5 pt-3 border-t border-slate-100">
                This Details From your Paper Marks Analyze
              </p>
            </div>
            {/* END: PaperMarksSummaryCard */}

            {/* BEGIN: StudentInfoOnlineCard */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 custom-shadow" data-purpose="student-info-form">
              <div className="border-b border-slate-100 pb-3 mb-5">
                <h3 className="text-base font-bold text-slate-800">Student Info — Online</h3>
              </div>
              <form action="#" className="space-y-4" method="POST" onSubmit={(e) => e.preventDefault()}>
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="full_name">Name</label>
                  <input className="w-full text-sm text-slate-800 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all" id="full_name" name="full_name" type="text" defaultValue="Jayali Janulya" />
                </div>
                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="email_address">Email Address</label>
                  <input className="w-full text-sm text-slate-800 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all" id="email_address" name="email_address" type="email" defaultValue="jayanthasisirakumara100@gmail.com" />
                </div>
                {/* First & Last Name Two Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="first_name">First Name</label>
                    <input className="w-full text-sm text-slate-800 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all" id="first_name" name="first_name" type="text" defaultValue="Jayali" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="last_name">Last Name</label>
                    <input className="w-full text-sm text-slate-800 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all" id="last_name" name="last_name" type="text" defaultValue="Janulya" />
                  </div>
                </div>
                {/* Telegram Username & ID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="tg_username">TG Username</label>
                    <input className="w-full text-sm text-slate-800 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all" id="tg_username" name="tg_username" placeholder="@Username" type="text" defaultValue="@janulya_j" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="telegram_id">Telegram ID</label>
                    <input className="w-full text-sm text-slate-800 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all" id="telegram_id" name="telegram_id" placeholder="Telegram ID" type="text" defaultValue="TG-9482104" />
                  </div>
                </div>
                {/* Toggle Switch & Save Button */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Toggle Notice Switch */}
                  <label className="relative flex items-center gap-3 cursor-pointer select-none">
                    <input defaultChecked className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0284c7]"></div>
                    <span className="text-xs font-medium text-slate-700">Notify me about new Notices</span>
                  </label>
                  {/* Save Changes Button */}
                  <button className="inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95 self-end sm:self-auto" type="submit">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    Save
                  </button>
                </div>
              </form>
            </div>
            {/* END: StudentInfoOnlineCard */}
          </div>

          {/* BEGIN: ContactInformationCard */}
          <section className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 custom-shadow" data-purpose="contact-information-section">
            <div className="border-b border-slate-100 pb-3 mb-5">
              <h3 className="text-base font-bold text-slate-800">Contact Information</h3>
            </div>
            <form action="#" className="space-y-4" method="POST" onSubmit={(e) => e.preventDefault()}>
              {/* Mobile Number & Second Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="mobile_number">Mobile Number</label>
                  <input className="w-full text-sm text-slate-800 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all" id="mobile_number" name="mobile_number" type="text" defaultValue="+94711691076" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="second_number">Second Number</label>
                  <input className="w-full text-sm text-slate-800 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all" id="second_number" name="second_number" type="text" defaultValue="+94711691076" />
                </div>
              </div>
              {/* Guardian Name & Guardian Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="guardian_name">Guardian Name</label>
                  <input className="w-full text-sm text-slate-800 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all" id="guardian_name" name="guardian_name" type="text" defaultValue="Jayantha Sisirakumara" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="guardian_phone">Guardian Phone</label>
                  <input className="w-full text-sm text-slate-800 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all" id="guardian_phone" name="guardian_phone" type="text" defaultValue="+94711691076" />
                </div>
              </div>
              {/* Address Line 1 */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="address_line_1">Address Line 1</label>
                <input className="w-full text-sm text-slate-800 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all" id="address_line_1" name="address_line_1" type="text" defaultValue="No:84,4th lane" />
              </div>
              {/* Address Line 2 */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="address_line_2">Address Line 2</label>
                <input className="w-full text-sm text-slate-800 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all" id="address_line_2" name="address_line_2" type="text" defaultValue="Pilominawatta-Dodangoda" />
              </div>
              {/* Institute (Locked with note) */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="institute">Institute</label>
                <input className="w-full text-sm text-slate-500 bg-slate-100 rounded-xl border border-slate-200 px-3.5 py-2.5 cursor-not-allowed" id="institute" name="institute" readOnly type="text" defaultValue="Online" />
                <p className="text-xs text-slate-500 mt-1.5">
                  To change your assigned Institute or District, please contact <a className="text-blue-600 font-semibold hover:underline" href="#hotline">@APHotline</a> with your registered email and verified student ID.
                </p>
              </div>
              {/* District & Paper Center */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="district">District</label>
                  <input className="w-full text-sm text-slate-800 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all" id="district" name="district" type="text" defaultValue="Kalutara" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="paper_center">Paper Center</label>
                  <select defaultValue="Online" className="w-full text-sm text-slate-800 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all" id="paper_center" name="paper_center">
                    <option value="Sipli">සිප්ලී ආයතනය - මතුගම (Sipli Institute - Mathugama)</option>
                    <option value="Online">Online Submission (Postal Delivery)</option>
                    <option value="Panadura">Viduneth Hall - Panadura</option>
                    <option value="Kalutara">Susipwan Institute - Kalutara</option>
                  </select>
                </div>
              </div>
              {/* Contact Save Button */}
              <div className="pt-3 flex justify-end">
                <button className="inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95" type="submit">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  Save
                </button>
              </div>
            </form>
          </section>
          {/* END: ContactInformationCard */}

          {/* BEGIN: OtherInfoAndAcademicNotes */}
          <section className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 custom-shadow" data-purpose="other-info-section">
            <div className="border-b border-slate-100 pb-3 mb-5">
              <h3 className="text-base font-bold text-slate-800">Other Info</h3>
            </div>
            <form action="#" className="space-y-4" method="POST" onSubmit={(e) => e.preventDefault()}>
              {/* School Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="school_name">School Name</label>
                <input className="w-full text-sm text-slate-800 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all" id="school_name" name="school_name" type="text" defaultValue="Ananda Sastralaya Mathugama" />
              </div>
              {/* Medium & Exam Year */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="medium_select">Media (Medium)</label>
                  <select defaultValue="Sinhala" className="w-full text-sm text-slate-800 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all" id="medium_select" name="medium_select">
                    <option value="Sinhala">සිංහල (Sinhala)</option>
                    <option value="English">English</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="exam_year_select">Exam Year</label>
                  <select defaultValue="2028_AL" className="w-full text-sm text-slate-800 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all" id="exam_year_select" name="exam_year_select">
                    <option value="2028_AL">2028 A/L</option>
                    <option value="2027_AL">2027 A/L</option>
                    <option value="2026_AL">2026 A/L</option>
                    <option value="2025_AL">2025 A/L</option>
                  </select>
                </div>
              </div>
              {/* About Note Textarea */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="about_note">About Note</label>
                <textarea className="w-full text-sm text-slate-800 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all resize-y" id="about_note" name="about_note" placeholder="Write your study goals, paper target ranks or special requests here..." rows={4}></textarea>
              </div>
              {/* Save Button */}
              <div className="pt-2 flex justify-end">
                <button className="inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95" type="submit">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  Save
                </button>
              </div>
            </form>
          </section>
          {/* END: OtherInfoAndAcademicNotes */}

          {/* BEGIN: SmartIDPassCard */}
          <section className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 custom-shadow" data-purpose="smart-id-pass">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-6">
              <span className="text-blue-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2H9.17A3.001 3.001 0 0112 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </span>
              <h3 className="text-base font-bold text-slate-800">Smart ID</h3>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Styled Digital QR Pass Box matching Reference 2 */}
              <div className="flex flex-col items-center">
                <div className="p-4 bg-white rounded-3xl border-2 border-slate-200/90 shadow-sm flex flex-col items-center justify-center">
                  {/* Clean Scalable SVG QR Code Simulation */}
                  <svg className="w-44 h-44 text-slate-900" fill="currentColor" viewBox="0 0 100 100">
                    <rect fill="none" height="26" rx="4" stroke="currentColor" strokeWidth="4" width="26" x="5" y="5"></rect>
                    <rect fill="currentColor" height="12" rx="2" width="12" x="12" y="12"></rect>
                    <rect fill="none" height="26" rx="4" stroke="currentColor" strokeWidth="4" width="26" x="69" y="5"></rect>
                    <rect fill="currentColor" height="12" rx="2" width="12" x="76" y="12"></rect>
                    <rect fill="none" height="26" rx="4" stroke="currentColor" strokeWidth="4" width="26" x="5" y="69"></rect>
                    <rect fill="currentColor" height="12" rx="2" width="12" x="12" y="76"></rect>
                    <circle cx="42" cy="10" r="3"></circle>
                    <circle cx="50" cy="18" r="3"></circle>
                    <circle cx="58" cy="10" r="3"></circle>
                    <circle cx="42" cy="26" r="3"></circle>
                    <circle cx="58" cy="26" r="3"></circle>
                    <circle cx="10" cy="42" r="3"></circle>
                    <circle cx="20" cy="50" r="3"></circle>
                    <circle cx="26" cy="42" r="3"></circle>
                    <circle cx="40" cy="42" r="3.5"></circle>
                    <circle cx="50" cy="42" r="2.5"></circle>
                    <circle cx="60" cy="42" r="3.5"></circle>
                    <circle cx="45" cy="52" r="3"></circle>
                    <circle cx="55" cy="52" r="3"></circle>
                    <circle cx="40" cy="62" r="3.5"></circle>
                    <circle cx="50" cy="62" r="2.5"></circle>
                    <circle cx="60" cy="62" r="3.5"></circle>
                    <circle cx="74" cy="42" r="3"></circle>
                    <circle cx="82" cy="50" r="3"></circle>
                    <circle cx="90" cy="42" r="3"></circle>
                    <circle cx="74" cy="58" r="3"></circle>
                    <circle cx="86" cy="62" r="3"></circle>
                    <circle cx="42" cy="74" r="3"></circle>
                    <circle cx="52" cy="82" r="3"></circle>
                    <circle cx="62" cy="74" r="3"></circle>
                    <circle cx="42" cy="90" r="3"></circle>
                    <circle cx="58" cy="90" r="3"></circle>
                    <circle cx="74" cy="80" r="3"></circle>
                    <circle cx="82" cy="88" r="3"></circle>
                    <circle cx="90" cy="76" r="3"></circle>
                  </svg>
                </div>
                <button className="mt-2.5 text-xs text-slate-500 hover:text-slate-800 font-medium flex items-center gap-1.5 transition-colors" type="button">
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  Tap for simple QR
                </button>
              </div>
              {/* Metadata List matching reference */}
              <div className="flex-1 w-full space-y-4">
                <div className="flex items-center gap-3 py-2 border-b border-slate-100">
                  <span className="text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-600 w-28">Student ID:</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">2851970</span>
                </div>
                <div className="flex items-center gap-3 py-2 border-b border-slate-100">
                  <span className="text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-600 w-28">Exam Year:</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">2028 A/L</span>
                </div>
                <div className="flex items-center gap-3 py-2 border-b border-slate-100">
                  <span className="text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-600 w-28">Institute:</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">Online</span>
                </div>
                <div className="flex items-center gap-3 py-2">
                  <span className="text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-600 w-28">Joined At:</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">2026-03-05</span>
                </div>
              </div>
            </div>
          </section>
          {/* END: SmartIDPassCard */}

          {/* BEGIN: TelegramIntegrationCard */}
          <section className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 custom-shadow" data-purpose="telegram-integration">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#0088cc]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"></path>
                </svg>
              </span>
              <h3 className="text-base font-bold text-slate-800">Telegram</h3>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
              <p className="text-xs sm:text-sm text-slate-500">
                Link your Telegram to get instant payment &amp; tracking alerts.
              </p>
              <a className="inline-flex items-center justify-center gap-2 bg-[#0088cc] hover:bg-[#0077b5] text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95 whitespace-nowrap self-start sm:self-auto" href="#connect-telegram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                </svg>
                Connect Telegram
              </a>
            </div>
          </section>
          {/* END: TelegramIntegrationCard */}

          {/* BEGIN: FooterBranding */}
          <footer className="pt-4 pb-8 text-center" data-purpose="site-footer">
            <p className="text-xs font-medium text-slate-500">
              ජීවිතයට Physics — Anuradha Perera
            </p>
            <p className="text-[10px] text-slate-400 mt-1">
              Copyright © Single Developers &lt;/&gt;
            </p>
          </footer>
          {/* END: FooterBranding */}
        </main>
        {/* END: MainContentGrid */}
      </div>
    </div>
  );
};

export default StudentProfile;

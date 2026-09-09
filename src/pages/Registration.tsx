import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Registration: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="w-full">
      

<header className="w-full max-w-4xl mx-auto flex items-center justify-between py-3 mb-6" data-purpose="top-navigation">

<a className="flex items-center gap-3 group" href="#">
<img alt="Viduneth Education Center Logo" className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC88mZFnQzgAvQCvg6vByJ_jWSpJqwMpYFJ_B-CLkF6RSzPPwshmZHbkg5Avs57HGA4p7_dbGJasXBKE1V8wwfZ-6INh1rDn6ajlxFBnLLi2LldWIOZUtVk--ATfEM-j1SYban4JVg2jB7hgICzfpqga-S-14TCxO-drjTNmRDmNDME17T_EO-qVP69_u1xBmU1U2ohoFVPyl5BtU_TmbeeAjYH4C_GsfyhWeRqH4rUSocAylZ149_UTV2lryAEoIHyIgfGy6Tc3AKp" />
</a>

<a className="text-sm font-semibold text-slate-500 hover:text-brand-600 transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/80" href="#">
<span aria-hidden="true" className="">←</span> Back to home
    </a>
</header>


<main className="w-full max-w-4xl mx-auto flex-1 mb-10" data-purpose="registration-wrapper">
<div className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft border border-slate-100/80">

<div className="flex items-start gap-4 mb-8">

<div aria-hidden="true" className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center text-3xl sm:text-4xl select-none">
          🐥🎓
        </div>
<div className="pt-0.5">
<h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Register New Student
          </h1>
<p className="text-slate-500 text-sm sm:text-base mt-1">
            Fill the form below — it only takes a minute.
          </p>
</div>
</div>

<form action="#" className="space-y-6" data-purpose="student-registration-form" method="POST" onSubmit={handleRegister}>


<section className="rounded-2xl border border-slate-200/75 bg-slate-50/40 p-5 sm:p-6 space-y-4" data-purpose="section-personal-info">

<div className="flex items-center gap-2 text-sky-600 font-semibold text-sm">
<svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" />
</svg>
<span className="text-slate-800 text-base font-semibold">Personal Information</span>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="first-name">First Name</label>
<input className="form-input-custom w-full rounded-xl px-4 py-2.5 text-sm text-slate-800 shadow-input" id="first-name" name="first-name" placeholder="First Name" required type="text" />
</div>
<div>
<label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="last-name">Last Name</label>
<input className="form-input-custom w-full rounded-xl px-4 py-2.5 text-sm text-slate-800 shadow-input" id="last-name" name="last-name" placeholder="Last Name" required type="text" />
</div>
</div>

<div>
<label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-1.5" htmlFor="email">
<svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
              Email (Google account)
            </label>
<input className="form-input-custom w-full rounded-xl px-4 py-2.5 text-sm text-slate-700 bg-slate-100/60 shadow-input border-slate-200" id="email" name="email" readOnly type="email" value="nadilnandinuuni@gmail.com" />
<p className="text-xs text-slate-500 mt-1.5">
              Not your account? 
              <button className="text-brand-600 font-semibold hover:underline cursor-pointer" type="button">Change Gmail</button>
</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-1.5" htmlFor="phone-number">
<svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
                Phone Number
              </label>
<input className="form-input-custom w-full rounded-xl px-4 py-2.5 text-sm text-slate-800 shadow-input" id="phone-number" name="phone-number" placeholder="07XXXXXXXX" required type="tel" />
</div>
<div>
<label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-1.5" htmlFor="whatsapp-number">
<svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
                WhatsApp Number
              </label>
<input className="form-input-custom w-full rounded-xl px-4 py-2.5 text-sm text-slate-800 shadow-input" id="whatsapp-number" name="whatsapp-number" placeholder="07XXXXXXXX" required type="tel" />
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-1.5" htmlFor="nic">
<svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
                NIC Card Number
              </label>
<input className="form-input-custom w-full rounded-xl px-4 py-2.5 text-sm text-slate-800 shadow-input" id="nic" name="nic" placeholder="200012345678 or 200123456V" type="text" />
</div>
<div>
<label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-1.5" htmlFor="dob">
<svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M8 7V3m8 7V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
                Date of Birth
              </label>
<input className="form-input-custom w-full rounded-xl px-4 py-2.5 text-sm text-slate-800 shadow-input" id="dob" name="dob" type="date" />
</div>
</div>
</section>



<section className="rounded-2xl border border-slate-200/75 bg-slate-50/40 p-5 sm:p-6 space-y-4" data-purpose="section-school-info">

<div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
<svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" />
</svg>
<span className="text-slate-800 text-base font-semibold">School Information</span>
</div>

<div>
<label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="school-name">School Name</label>
<input className="form-input-custom w-full rounded-xl px-4 py-2.5 text-sm text-slate-800 shadow-input" id="school-name" name="school-name" placeholder="e.g. Royal College, Colombo" required type="text" />
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="exam-year">Exam Year</label>
<select className="form-input-custom w-full rounded-xl px-4 py-2.5 text-sm text-slate-800 shadow-input" id="exam-year" name="exam-year" required>
<option disabled defaultValue="" value="">Select A/L year</option>
<option value="2024">2024 A/L</option>
<option value="2025">2025 A/L</option>
<option value="2026">2026 A/L</option>
<option value="2027">2027 A/L</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="medium">Medium</label>
<select className="form-input-custom w-full rounded-xl px-4 py-2.5 text-sm text-slate-800 shadow-input" id="medium" name="medium" required>
<option disabled defaultValue="" value="">Select medium</option>
<option value="sinhala">Sinhala Medium</option>
<option value="english">English Medium</option>
<option value="tamil">Tamil Medium</option>
</select>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="stream">Stream</label>
<select className="form-input-custom w-full rounded-xl px-4 py-2.5 text-sm text-slate-800 shadow-input" id="stream" name="stream" required>
<option disabled defaultValue="" value="">Select stream</option>
<option value="physical">Physical Science (Maths)</option>
<option value="biological">Biological Science (Bio)</option>
<option value="technology">Technology</option>
<option value="commerce">Commerce</option>
<option value="arts">Arts</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="institute">Institute</label>
<select className="form-input-custom w-full rounded-xl px-4 py-2.5 text-sm text-slate-800 shadow-input" id="institute" name="institute" required>
<option disabled defaultValue="" value="">Where do you attend?</option>
<option value="kalutara">Kalutara Viduneth Center</option>
<option value="colombo">Colombo Physical Branch</option>
<option value="online">Online / Islandwide LMS</option>
</select>
</div>
</div>
</section>



<section className="rounded-2xl border border-slate-200/75 bg-slate-50/40 p-5 sm:p-6 space-y-4" data-purpose="section-delivery-info">

<div className="flex items-center gap-2 text-amber-500 font-semibold text-sm">
<svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
</svg>
<span className="text-slate-800 text-base font-semibold">Delivery Information</span>
<span className="text-xs text-slate-400 font-normal ml-1">(For tutes, model papers &amp; revision kits)</span>
</div>

<div>
<label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="address-1">Address Line 1</label>
<input className="form-input-custom w-full rounded-xl px-4 py-2.5 text-sm text-slate-800 shadow-input" id="address-1" name="address-1" placeholder="No 000, Road Name" required type="text" />
</div>

<div>
<label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="address-2">Address Line 2</label>
<input className="form-input-custom w-full rounded-xl px-4 py-2.5 text-sm text-slate-800 shadow-input" id="address-2" name="address-2" placeholder="City Name" required type="text" />
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="district">District</label>
<select className="form-input-custom w-full rounded-xl px-4 py-2.5 text-sm text-slate-800 shadow-input" id="district" name="district" required>
<option disabled defaultValue="" value="">Select district</option>
<option value="colombo">Colombo</option>
<option value="gampaha">Gampaha</option>
<option value="kalutara">Kalutara</option>
<option value="kandy">Kandy</option>
<option value="matale">Matale</option>
<option value="nuwara-eliya">Nuwara Eliya</option>
<option value="galle">Galle</option>
<option value="matara">Matara</option>
<option value="hambantota">Hambantota</option>
<option value="kurunegala">Kurunegala</option>
<option value="puttalam">Puttalam</option>
<option value="anuradhapura">Anuradhapura</option>
<option value="polonnaruwa">Polonnaruwa</option>
<option value="badulla">Badulla</option>
<option value="monaragala">Monaragala</option>
<option value="ratnapura">Ratnapura</option>
<option value="kegalle">Kegalle</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="postal-code">Postal Code</label>
<input className="form-input-custom w-full rounded-xl px-4 py-2.5 text-sm text-slate-800 shadow-input" id="postal-code" name="postal-code" placeholder="Postal code / Zip code" type="text" />
</div>
</div>
</section>



<section className="rounded-2xl border border-slate-200/75 bg-slate-50/40 p-5 sm:p-6 space-y-4" data-purpose="section-guardian-info">

<div className="flex items-center gap-2 text-fuchsia-600 font-semibold text-sm">
<svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" />
</svg>
<span className="text-slate-800 text-base font-semibold">Guardian Information</span>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="guardian-name">Guardian Name</label>
<input className="form-input-custom w-full rounded-xl px-4 py-2.5 text-sm text-slate-800 shadow-input" id="guardian-name" name="guardian-name" placeholder="Parent or guardian" required type="text" />
</div>
<div>
<label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-1.5" htmlFor="guardian-phone">
<svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
                Guardian Phone
              </label>
<input className="form-input-custom w-full rounded-xl px-4 py-2.5 text-sm text-slate-800 shadow-input" id="guardian-phone" name="guardian-phone" placeholder="07XXXXXXXX" required type="tel" />
</div>
</div>
</section>



<div className="pt-2">
<label className="flex items-start gap-3 cursor-pointer group select-none">
<input className="mt-0.5 rounded text-brand-600 focus:ring-brand-500 border-slate-300 w-4 h-4 transition" name="terms" required type="checkbox" />
<span className="text-sm text-slate-600 font-normal">
              I agree to the <a className="text-brand-600 font-medium hover:underline" href="#">Terms &amp; Conditions</a>.
            </span>
</label>
</div>

<div>
<button className="w-full bg-[#0084ff] hover:bg-blue-600 active:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-full shadow-md transition-all duration-200 flex items-center justify-center gap-2 text-base tracking-wide" type="submit">
<span className="">Register Account</span>
<svg className="w-4 h-4 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
</svg>
</button>
</div>

<p className="text-center text-sm text-slate-500 pt-1">
          Already have an account? 
          <Link to="/sign-in" className="text-brand-600 font-medium hover:underline">Sign in</Link>
</p>

</form>
</div>
</main>


<footer className="w-full max-w-4xl mx-auto text-center text-xs text-slate-400 py-3" data-purpose="site-footer">
<p className="">Hotline: <span className="text-slate-600 font-medium">0720566566</span> · Powered by Single Developers &lt;/&gt;</p>
</footer>




    </div>
  );
};

export default Registration;

// src/components/Contact.jsx
import React from "react";
import { PROFILE_DATA } from "../utils/data";

import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";

// Left side card for email / phone / website
const ContactInfoCard = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center gap-5 bg-gradient-to-br from-blue-950 to-slate-900 rounded-2xl border border-blue-800/40 px-4 py-3 mb-5 shadow-[0_0_25px_rgba(15,23,42,0.9)]">
      <div className="w-10 h-10 text-xl text-cyan-300 flex items-center justify-center bg-sky-950 rounded-xl border border-cyan-700">
        <Icon />
      </div>
      <p className="text-slate-200 text-sm md:text-base truncate">{text}</p>
    </div>
  );
};

const Contact = () => {
  return (
    <section
      className="max-w-screen-xl mx-auto px-6 pb-20 pt-10"
      id="contact"
    >
      {/* Heading */}
      <h5 className="text-primary text-2xl md:text-4xl font-semibold text-center pb-8 md:pb-14">
        Contact
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-10">
        {/* LEFT: Contact info cards */}
        <div>
          <ContactInfoCard icon={IoMdMail} text={PROFILE_DATA.email} />
          <ContactInfoCard icon={IoPhonePortraitOutline} text={PROFILE_DATA.phone} />
          <ContactInfoCard icon={MdOutlineWeb} text={PROFILE_DATA.website} />
        </div>

        {/* RIGHT: Contact form */}
        <div>
          <h5 className="text-cyan-300 text-lg font-semibold mb-4">
            Contact Form
          </h5>

          <form className="flex flex-col gap-4">
            {/* Full Name */}
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              autoComplete="off"
              className="w-full bg-slate-900/60 border border-sky-500/30 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/60 transition"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              className="w-full bg-slate-900/60 border border-sky-500/30 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/60 transition"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              className="w-full bg-slate-900/60 border border-sky-500/30 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/60 transition resize-none"
            />

            {/* Submit button */}
            <button
              type="submit"
              className="mt-2 w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold py-3 rounded-xl shadow-[0_0_25px_rgba(56,189,248,0.6)] hover:scale-[1.02] active:scale-[0.99] transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

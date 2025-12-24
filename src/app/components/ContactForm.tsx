'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can use EmailJS, Formspree, or a custom backend here
    alert(`Thank you, ${form.name}! Your message has been sent.`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-white">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-3 border border-white rounded-lg shadow-sm focus:border-pink-400 focus:shadow-[0_0_20px_rgba(236,72,153,0.5),0_0_40px_rgba(236,72,153,0.2)] "
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-white">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-3 border border-white rounded-lg shadow-sm focus:border-pink-400 focus:shadow-[0_0_20px_rgba(236,72,153,0.5),0_0_40px_rgba(236,72,153,0.2)] "
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-white">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          required
          className="mt-1 block w-full p-3 border border-white rounded-lg shadow-sm focus:border-pink-400 focus:shadow-[0_0_20px_rgba(236,72,153,0.5),0_0_40px_rgba(236,72,153,0.2)] "
        />
      </div>
      <div>
        <button
          type="submit"
                              className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-lg text-white font-semibold transition-all duration-300 border border-white/30 flex items-center gap-2 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.5),0_0_40px_rgba(236,72,153,0.2)]"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

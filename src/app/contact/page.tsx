'use client';

import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">Get in Touch</h1>
        <p className="text-lg text-white mb-8">
          Feel free to reach out for collaborations, opportunities, or just a friendly hello!
        </p>
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactPage;

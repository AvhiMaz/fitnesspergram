import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mzbnwezk");

  if (state.succeeded) {
      return <p className="text-green-500 text-center text-2xl">Your message has been delivered ✅</p>;
  }

  return (
      <form onSubmit={handleSubmit} action="https://formspree.io/f/mzbnwezk" method="POST" className="max-w-md mx-auto">
        <label htmlFor="email" className="block mb-2 text-yellow-400">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className="w-full px-4 py-2 border rounded-md mb-4 text-black"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="text-red-500"
        />

        <label htmlFor="phone" className="block mb-2 text-yellow-400">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel" 
          name="phone"
          className="w-full px-4 py-2 border rounded-md mb-4 text-black"
        />
        <ValidationError 
          prefix="Phone" 
          field="phone"
          errors={state.errors}
          className="text-red-500"
        />

        <label htmlFor="message" className="block mb-2 text-yellow-400">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full px-4 py-2 border rounded-md mb-4 text-black"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-red-500"
        />

        <button type="submit" disabled={state.submitting} className="bg-yellow-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </form>
  );
}

function Submission() {
  return (
    <ContactForm />
  );
}

export default Submission;

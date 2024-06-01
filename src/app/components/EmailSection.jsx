"use client";
import React, { useState } from "react";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/email', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, subject, message }),
        });
        const data = await res.json();
        console.log(data);
        setEmailSubmitted(true);
    }

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-15 py-10 gap-4 relative"
    >
      <div className="z-10">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh', // Adjusted for better scalability on cellphones
          }}
        >
          <Image
            src="/images/updated/email-image.png"
            alt="hero image"
            className="absolute transform -translate-x-1 -translate-y-1 top-1 left-1 md:py-24" // Adjusted for better scalability on cellphones
            width={500}
            height={400}
          />
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your name
              </label>
              <input
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                type="text" 
                name="name" 
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Name"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                type="email" 
                name="email" 
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:border-[#008DBA]" // Added focus styles
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                value={subject} 
                onChange={(e) => setSubject(e.target.value)} 
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:border-[#008DBA]" // Added focus styles
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:border-[#008DBA]" // Added focus styles
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-[#008bba7c] hover:bg-[#008DBA] transition-colors duration-300 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;

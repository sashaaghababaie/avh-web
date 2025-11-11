"use client";
import {
  BiSolidPlaneTakeOff,
  BiSolidMessageSquareDetail,
} from "react-icons/bi";
import { IoIosChatboxes, IoIosMail } from "react-icons/io";

import { useState } from "react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log("Form submitted:", formData);
    // TODO: Add email sending functionality
    alert("Form submitted! Email functionality will be added later.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="min-h-screen pt-16 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1920&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-4">
          Contact Us
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 text-center mb-12 md:mb-16">
          Get in touch with us. We&apos;d love to hear from you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="p-px bg-linear-to-b from-brand to-neutral-200 rounded-tr-4xl rounded-bl-4xl shadow-md h-full"
        >
          <div className="bg-linear-to-b from-gray-100 to-gray-50 p-10 rounded-tr-4xl rounded-bl-4xl h-full flex flex-col">
            <div className="space-y-6">
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="flex items-center text-sm font-medium text-black mb-2"
                >
                  <IoIosMail className="text-2xl mr-1 text-brand" />
                  <span className="font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full text-neutral-600 px-4 py-3 border border-neutral-300 rounded-tr-2xl rounded-bl-2xl focus:ring-1 focus:ring-brand focus:border-brand outline-none transition-all"
                  placeholder="Enter you email"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="flex items-center text-sm font-medium text-black mb-2"
                >
                  <BiSolidMessageSquareDetail className="text-2xl mr-1 text-brand" />
                  <span className="font-semibold">Message</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full text-neutral-600 px-4 py-3 border border-neutral-300 rounded-tr-4xl rounded-bl-4xl focus:ring-1 focus:ring-brand focus:border-brand outline-none transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-brand hover:bg-brand/80 cursor-pointer text-white font-semibold py-3 px-6 rounded-tr-3xl rounded-bl-3xl transition-colors"
              >
                <span>Send</span>
                <BiSolidPlaneTakeOff className="text-white text-2xl ml-2" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

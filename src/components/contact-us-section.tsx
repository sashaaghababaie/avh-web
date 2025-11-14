"use client";

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { useInView } from "@/hooks/useInView";

export default function ContactUsSection() {
  const { ref: sectionRef, isInView: sectionInView } = useInView();

  return (
    <section
      id="contact-us"
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-black text-center mb-6 sm:mb-8 animate-on-scroll ${
            sectionInView ? "visible" : ""
          }`}
          style={{ transitionDelay: sectionInView ? "0.1s" : "0s" }}
        >
          Contact Us
        </h2>
        <p
          className={`text-base sm:text-lg md:text-xl text-neutral-600 text-center mb-6 sm:mb-8 max-w-2xl mx-auto animate-on-scroll ${
            sectionInView ? "visible" : ""
          }`}
          style={{ transitionDelay: sectionInView ? "0.2s" : "0s" }}
        >
          Get in touch with us. We&apos;d love to hear from you and answer any
          questions you may have about Aviation Hub.
        </p>
        <div
          className={`flex justify-center items-center animate-on-scroll ${
            sectionInView ? "visible" : ""
          }`}
          style={{ transitionDelay: sectionInView ? "0.2s" : "0s" }}
        >
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/avh-aviation-hub-676105388?trk=blended-typeahead"
            className="text-neutral-700 hover:text-brand transition-colors"
            aria-label="Visit our LinkedIn page"
          >
            <FaLinkedin className="text-4xl sm:text-5xl" />
          </Link>
        </div>
      </div>
    </section>
  );
}

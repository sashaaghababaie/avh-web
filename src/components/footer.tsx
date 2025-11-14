import Link from "next/link";
import { IoIosAirplane } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Logo Section */}
          <div className="flex flex-col">
            {/* <div className=""> */}
            <img
              src="/AVH LOGO_WHITE.webp"
              alt="Aviation Hub"
              className="w-14"
            />
            {/* </div> */}
            <h3 className="text-lg text-white/90 font-semibold mr-1">
              Aviation Hub
            </h3>

            <p className="text-neutral-400 text-sm">
              Your premier destination for aviation excellence
            </p>
          </div>

          {/* Navigation Links */}
          <div className="">
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <div className="border-[0.5px] border-neutral-600 w-40 mb-3" />
            <ul className="space-y-2">
              <li className="flex flex-col gap-2">
                <Link
                  href="#facilities"
                  className="text-neutral-400 hover:text-white transition-colors w-fit"
                >
                  Facilities
                </Link>

                <Link
                  href="#services"
                  className="text-neutral-400 hover:text-white transition-colors w-fit"
                >
                  Services
                </Link>

                <Link
                  href="#membership"
                  className="text-neutral-400 hover:text-white transition-colors w-fit"
                >
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="border-[0.5px] border-neutral-600 w-40 mb-3" />

            <Link
              href="#contact-us"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Contact Us
            </Link>

            <div className="mt-3 w-fit">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/avh-aviation-hub-676105388?trk=blended-typeahead"
                className="text-neutral-400 hover:text-brand transition-colors"
              >
                <FaLinkedin className="text-xl " />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div>
          <div className="flex items-center justify-center">
            <div className="w-full h-px bg-linear-to-r from-brand/0 to-brand/90 my-8 rounded-full" />
            <IoIosAirplane className="text-brand text-2xl ml-1" />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} Aviation Hub (AVH). All rights
              reserved.
            </p>
            <p className="text-neutral-400 text-sm">
              Powered by{" "}
              <span className="text-white font-semibold">BloomPoint</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

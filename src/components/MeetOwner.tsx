import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/SiteConfig";

const MeetOwner = () => {
  return (
    <section id="meet-team" className="py-12 md:py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-md">
          {/* LEFT — Full photo */}
          <div className="relative min-h-100 lg:min-h-145">
            <Image
              src="/images/team-image.jpeg"
              alt="Team"
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="bg-gray-50 flex flex-col justify-center px-8 md:px-12 py-10 gap-5">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Meet The Team
              </h2>
              <p className="text-lg md:text-xl font-semibold text-gray-700 mt-1">
                Our People Behind The Work
              </p>
            </div>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              &ldquo;Hi, we are the faces behind First 4 Contracts Ltd. We
              started First 4 Contracts Ltd to give homeowners an honest,
              professional roofing service they can rely on. With over 15 years
              of experience, we take pride in every roof we complete.&rdquo;
            </p>

            <ul className="flex flex-col gap-3">
              {siteConfig.ownerInfo.bulletPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#2563EB" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-gray-800 text-base md:text-lg font-medium">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <Link href="#quote-form" className="w-full mt-2">
              <button
                className="w-full py-4 rounded-full text-white font-bold text-lg md:text-xl transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#2563EB" }}
              >
                {siteConfig.cta.buttonPrimary}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOwner;

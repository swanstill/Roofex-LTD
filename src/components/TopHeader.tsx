import { siteConfig } from "@/config/SiteConfig";
import Image from "next/image";
import Link from "next/link";
import GoogleWidget from "./GoogleWidget";

const GOOGLE_REVIEW_URL = "https://share.google/eewd9ZEPoBsN6jB3G";
const GOOGLE_REVIEW_COUNT = "9";

const TopHeader = () => {
  return (
    <section className="flex flex-col gap-4 p-4 bg-white md:flex-row md:items-center md:justify-between md:px-16 md:py-4">
      {/* Row 1 on mobile: logo + Google badge */}
      <div className="flex min-w-0 items-center justify-between gap-2">
        <Image
          src={siteConfig.logoImage}
          alt={siteConfig.logoAltText}
          className="h-15 w-1/2 shrink-0 object-contain md:h-15 md:w-55"
          height={200}
          width={370}
          unoptimized
        />
        <Link
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          className="min-w-0 w-1/2 inset-0 md:hidden"
        >
          <GoogleWidget
            reviewCount={GOOGLE_REVIEW_COUNT}
            href={GOOGLE_REVIEW_URL}
          />
        </Link>
      </div>

      {/* Phone — desktop only */}
      <div className="hidden items-center gap-2 md:flex">
        <Image
          src="/images/headphone.svg"
          alt="Headphone"
          className="h-5 w-5 md:h-7.5 md:w-7.5"
          height={20}
          width={20}
        />
        <div className="flex flex-col">
          <span>Prefer to Talk? Call Us</span>
          <Link href={`tel:${siteConfig.phoneNumber}`} target="_blank">
            <span className="text-sm font-bold md:text-lg">
              {siteConfig.phoneNumber}
            </span>
          </Link>
        </div>
      </div>

      {/* Row 2 on mobile: Checkatrade + TrustATrader; all three badges on md+ */}
      <div className="flex w-full items-stretch gap-2 md:w-auto">
        <Link
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          className="hidden min-w-0  md:flex"
        >
          <GoogleWidget
            reviewCount={GOOGLE_REVIEW_COUNT}
            href={GOOGLE_REVIEW_URL}
            className="md:w-[180px]"
          />
        </Link>
        <Link
          href="https://www.checkatrade.com/trades/roofexltd"
          target="_blank"
          className="min-w-0 flex-1"
        >
          <div className="flex h-[60px] w-full items-center justify-center md:w-[180px]">
            <Image
              src="/icons/checkatrade-widget.png"
              alt="Checkatrade Reviews"
              width={180}
              height={60}
              className="h-full w-full object-contain"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </Link>
        <Link
          href="https://www.trustatrader.com/traders/first-4-contracts-limited-roofers-roofing-whitchurch-and-heath"
          target="_blank"
          className="min-w-0 flex-1"
        >
          <div className="flex h-[60px] w-full items-center justify-center md:w-[180px]">
            <Image
              src="/icons/trustatrader.png"
              alt="TrustATrader Reviews"
              width={180}
              height={60}
              className="h-full w-full object-contain"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default TopHeader;

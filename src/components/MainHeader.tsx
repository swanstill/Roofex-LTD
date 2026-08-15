import { siteConfig } from "@/config/SiteConfig";

const featureClass = "flex items-center gap-2";

const MainHeader = () => {
  return (
    <section
      className="text-white py-2 md:py-4 px-4 md:px-16 grid grid-cols-[1fr_140px] gap-4 items-start md:flex md:flex-wrap md:justify-between md:gap-0 md:items-center"
      style={{ backgroundColor: siteConfig.brand.secondary }}
    >
      <div className={`${featureClass} col-start-1 row-start-1 md:col-auto md:row-auto`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-building2-icon lucide-building-2 shrink-0"
        >
          <path d="M10 12h4" />
          <path d="M10 8h4" />
          <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
          <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
          <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
        </svg>
        <span className="text-sm md:text-base">{siteConfig.foundedYear}</span>
      </div>

      <div className={`${featureClass} col-start-2 row-start-1 w-[140px] md:w-auto md:col-auto md:row-auto`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shield-check-icon lucide-shield-check shrink-0"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
        <span className="text-sm md:text-base">{siteConfig.guaranteeYears}</span>
      </div>

      <div className={`${featureClass} col-start-1 row-start-2 md:col-auto md:row-auto`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-file-check-icon lucide-file-check shrink-0"
        >
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="m9 15 2 2 4-4" />
        </svg>
        <span className="text-sm md:text-base">{siteConfig.insurredInfo}</span>
      </div>

      <div className={`${featureClass} col-start-2 row-start-2 w-[140px] md:w-auto md:col-auto md:row-auto`}>
        <svg
          fill="currentColor"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          <path d="M14.6,21.3c-.3.226-.619.464-.89.7H16a1,1,0,0,1,0,2H12a1,1,0,0,1-1-1c0-1.5,1.275-2.456,2.4-3.3.75-.562,1.6-1.2,1.6-1.7a1,1,0,0,0-2,0,1,1,0,0,1-2,0,3,3,0,0,1,6,0C17,19.5,15.725,20.456,14.6,21.3ZM23,15a1,1,0,0,0-1,1v3H21a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v2a3,3,0,0,0,3,3h1v2a1,1,0,0,0,2,0V16A1,1,0,0,0,23,15ZM13,12V7a1,1,0,0,0-2,0v4H8a1,1,0,0,0,0,2h4A1,1,0,0,0,13,12ZM23,2a1,1,0,0,0-1,1V5.374A12,12,0,1,0,7.636,23.182,1.015,1.015,0,0,0,8,23.25a1,1,0,0,0,.364-1.932A10,10,0,1,1,20.636,7H18a1,1,0,0,0,0,2h3a3,3,0,0,0,3-3V3A1,1,0,0,0,23,2Z"></path>
        </svg>
        <span className="text-sm md:text-base">Emergency 24/7</span>
      </div>
    </section>
  );
};

export default MainHeader;

import { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  companyName: "Roofex LTD",
  logoImage: "/icons/logo.jpg",
  logoAltText: "Roofex LTD Logo",
  heroSloganPrimary:
    " We're Your Local Roofer",
  heroSloganSecondary: "Family-Run & Fully Accredited",
  locationPrimary: "In West Yorkshire",
  foundedYear: "20+ Years Experience",
  reviewScore: "5/5",
  reviewCount: "4160",
  guaranteeYears: "25 Year Guarantee",
  insurredInfo: "Fully Accredited",
  jobsCompleted: "4,160+ Projects Completed",
  phoneNumber: "+447915068323",
  emailAddress: "info@roofexltd.co.uk",
  ctaTextPrimary: "Get My Free Quote",
  ctaTextSecondary: "Call Us",
  heroImage: "/images/hero-image.jpeg",
  heroImageAltText: "Roofex LTD Hero Image",
  heroTitle:
    "We're Your Local Roofer",
  heroDescription:
    "Local roofing experts serving West Yorkshire with over 20 years of experience, 4,160+ jobs completed, and a 25-year guarantee on every roof.",
  galleryImages: [
    "/gallery/09090.jpeg",
    "/gallery/1413.jpeg",
    "/gallery/234.jpeg",
    "/gallery/2q24r43.jpeg",
    "/gallery/341431.jpeg",
    "/gallery/3545.jpeg",
    "/gallery/44.jpeg",
    "/gallery/47900.jpeg",
    "/gallery/5.jpeg",
    "/gallery/531776.jpeg",
    "/gallery/56w57627.jpeg",
    "/gallery/WhatsApp Image 2025-10-13 at 19.55.22.jpeg",
    "/gallery/WhatsApp Image 2025-10-13 at 19.55.27.jpeg",
  ],
  checkatradeRatingImage: "/images/checkatrade-badge.png",
  faqData: [
    {
      question: "How long does a roof replacement take?",
      answer:
        "Most roof replacements take around 3–5 days, depending on your property size and the type of roof. We’ll give you a clear timescale before work starts and keep you updated throughout.",
    },
    {
      question: "Do you handle cleanup after the job?",
      answer:
        "Yes — our team takes care of all waste and cleanup once your roof is finished. We always leave your home tidy, safe, and looking its best.",
    },
    {
      question: "Are you fully insured?",
      answer:
        "Absolutely. We’re fully insured and qualified, and every roofing job comes with a 25-year workmanship guarantee for complete peace of mind.",
    },
    {
      question: "What happens if it rains during the job?",
      answer:
        "If the weather changes, we use temporary waterproof coverings to keep your home protected. Work resumes as soon as conditions are safe and dry.",
    },
    {
      question: "Do you offer free quotes?",
      answer:
        "Yes — all our inspections and quotes are completely free and no-obligation. You’ll always know exactly what’s needed before any work begins.",
    },
  ],
  brand: {
    primary: "#C66B36",
    secondary: "#010203",
  },
  seo: {
    baseUrl: "https://roofexltd.uk",
    titleTemplate: "%s | Roofex LTD",
    defaultTitle:
      "We're Your Local Roofer in West Yorkshire",
    description:
      "Local roofing experts serving West Yorkshire with over 20 years of experience, 4,160+ jobs completed, and a 25-year guarantee on every roof.",
    ogImage: "/images/og-default.jpg",
    twitterHandle: "@roofexltd",
  },
  reviewsData: {
    source: "Google",
    sourceImage: "/images/google-reviews.png",
    reviewsUrl: "https://share.google/eewd9ZEPoBsN6jB3G",
    reviews: [
      {
        name: "Sapphire Doherty",
        serviceType: "Roof Repair",
        rating: 5,
        review:
          "The absolute best at what they do would recommend them to anyone! I had a horrible coming through to my kitchen, i had called several different companies to sort it out which just resulted in it worsening. Fortunately for me i had came across and contacted BD & son roofing and they sorted the problem entirely, so great full to bill and the team that the problem is resolved, they did an amazing job! So quick and left everything clean and tidy. Thanks again I couldn't be happier!",
        date: "a year ago",
        postalCode: "",
      },
      {
        name: "Daniel Riley",
        serviceType: "Roof Repairs",
        rating: 5,
        review:
          "I was suggested to BD & SON ltd roofing by a friend, I was in serious need off repairs , I received great customer service , reliability , genuine hard working people and not over priced, I can't praise these enough , highly recommend 👍",
        date: "a year ago",
        postalCode: "",
      },
      {
        name: "Bobby1 doherty",
        serviceType: "Chimney Leak Repair",
        rating: 5,
        review:
          "had a leak on my chimney for quite some time called at least five of the roofers to sort out the leak to still no avail. I called BD and some roof is Limited. They came out did a smoke test inside the chimney and found the problem straightaway. very competitive price prices extremely good workmanship couldn't recommend enough.",
        date: "a year ago",
        postalCode: "",
      },
      {
        name: "Lee M",
        serviceType: "Soffits & Fascias",
        rating: 5,
        review:
          "This company came to renew all my soffits and fascia's very polite set of lads knew exactly what they were doing very professional work done. Would highly recommend to anyone",
        date: "a year ago",
        postalCode: "",
      },
    ],
  },
  formData: {
    formHeading: "Get a Free No-Obligation Quote",
    formSteps: [
      "Property Type",
      "Service Type",
      "Timeframe",
      "Postcode",
      "Your Name",
      "Email",
      "Phone Number",
    ],
    steps: [
      {
        question: "What type of property do you have?",
        type: "radio",
        options: [
          { label: "Detached", icon: "/icons/house.svg" },
          { label: "Semi Detached", icon: "/icons/semi-detached.png" },
          { label: "Terraced", icon: "/icons/terraced.jpg" },
          { label: "Bungalow", icon: "/icons/bungalow.png" },
          { label: "Commercial Building", icon: "/icons/commercial.png" },
          { label: "Other", icon: "/icons/badge-question-mark.svg" },
        ],
      },
      {
        question: "How can we help?",
        type: "radio",
        options: [
          { label: "Roof Repair", icon: "/icons/house.svg" },
          { label: "Roof Replacement", icon: "/icons/house.svg" },
          { label: "Guttering/Soffits/Fascias", icon: "/icons/house.svg" },
          { label: "Chimney Work", icon: "/icons/house.svg" },
          { label: "Flat Roof", icon: "/icons/warehouse.svg" },
          { label: "Other", icon: "/icons/badge-question-mark.svg" },
        ],
      },
      {
        question: "How soon are you looking to get started?",
        type: "radio",
        options: [
          { label: "ASAP", icon: "/icons/badge-question-mark.svg" },
          { label: "This Month", icon: "/icons/badge-question-mark.svg" },
          { label: "2-3 Months", icon: "/icons/badge-question-mark.svg" },
        ],
      },
      {
        question: "What's your property postcode?",
        type: "text",
        placeholder: "Enter postcode",
      },
      {
        question: "What's your full name?",
        type: "name",
      },
      {
        question: "What's the best email to contact you on?",
        type: "text",
        placeholder: "Enter your email",
      },
      {
        question: "What phone number should we contact you on?",
        type: "text",
        placeholder: "Enter your phone number",
      },
    ],
  },
  howItWorks: {
    headline: "Getting Your Roof Sorted Is Easy",
    steps: [
      {
        icon: "/icons/receipt.svg",
        title: "Appointment",
        description:
          "Schedule in a time that works for you, so we can visit your property and assess what works needs to be done.",
      },
      {
        icon: "/icons/search-check.svg",
        title: "Provide Quote",
        description:
          "You'll be provided with a detailed quote of the work you need and how much it will cost to be completed.",
      },
      {
        icon: "/icons/clipboard-check.svg",
        title: "Job Completion",
        description:
          "We'll complete the job quickly and efficiently, keeping high standards with no mess left behind.",
      },
      {
        icon: "/icons/handshake.svg",
        title: "After Care",
        description:
          "We'll be checking in with you to answer any questions and make sure you're happy with your service.",
      },
    ],
  },
  workGallery: {
    headline: "Recent Projects Completed",
    caption: "Quality work delivered by Roofex LTD",
    images: [
      "/gallery/work-1.webp",
      "/gallery/work-2.webp",
      "/gallery/work-3.webp",
      "/gallery/work-4.webp",
      "/gallery/work-5.webp",
      "/gallery/work-6.webp",
      "/gallery/work-7.webp",
      "/gallery/work-8.webp",
      "/gallery/work-9.webp",
    ],
  },
  ownerInfo: {
    headline: "Meet Billyjoe Docherty",
    text: "“Hi, I'm Billyjoe and I've been roofing in West Yorkshire for over 20 years. If I wouldn't accept it on my own home, it doesn't go on yours.”",
    bulletPoints: [
      "4,160+ Projects Completed Locally",
      "5/5 Verified Google Reviews",
      "25-Year Guarantee & Fixed Pricing",
    ],
    ownerImage: "/images/team-image.jpeg",
  },
  cta: {
    headline: "Ready to Get Started?",
    subtitle: "Get your free, no-obligation roofing quote today.",
    buttonPrimary: "Get My Free Quote",
    buttonSecondary: "Call Us",
    buttonPrimaryUrl: "#quote-form",
    buttonSecondaryUrl: "tel:+447915068323",
    caption: "Honest pricing | No hidden fees | 25-Year guarantee",
  },
};

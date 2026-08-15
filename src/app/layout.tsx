import type { Metadata } from "next";
import "./globals.css";
import TopHeader from "@/components/TopHeader";
import { Inter, Poppins } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: "First 4 Contracts Ltd - Trusted Roofers in South Wales.",
  description: "First 4 Contracts Ltd - Trusted Roofers in South Wales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5S9NLGD3');`,
            }}
          />
        </>
      </head>
      <body className={`${inter.className} ${poppins.className}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-5S9NLGD3`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <TopHeader />
        {children}
      </body>
    </html>
  );
}

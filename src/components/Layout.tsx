import { ReactNode } from "react";
import { SEO } from "./SEO";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function Layout({ children, ...seoProps }: LayoutProps) {
  return (
    <>
      <SEO {...seoProps} />
      <main className="min-h-screen">{children}</main>
    </>
  );
}

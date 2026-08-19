import Link from "next/link";

interface GoogleWidgetProps {
  reviewCount: string;
  href: string;
  className?: string;
}

const GoogleWidget = ({ reviewCount, href, className }: GoogleWidgetProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={`flex h-[60px] w-full items-center justify-center rounded-md border border-gray-200 bg-white px-3 shadow-sm ${className ?? ""}`}
    >
      <div className="flex items-center gap-2">
        <span
          className="text-base font-medium leading-none"
          style={{ fontFamily: "Arial, sans-serif" }}
          aria-label="Google"
        >
          <span style={{ color: "#4285F4" }}>G</span>
          <span style={{ color: "#EA4335" }}>o</span>
          <span style={{ color: "#FBBC05" }}>o</span>
          <span style={{ color: "#4285F4" }}>g</span>
          <span style={{ color: "#34A853" }}>l</span>
          <span style={{ color: "#EA4335" }}>e</span>
        </span>
        <div className="flex items-center gap-1">
          <span className="text-amber-400" aria-hidden="true">
            {"★★★★★"}
          </span>
          <span className="text-xs font-semibold text-gray-700">
            {reviewCount} reviews
          </span>
        </div>
      </div>
    </Link>
  );
};

export default GoogleWidget;

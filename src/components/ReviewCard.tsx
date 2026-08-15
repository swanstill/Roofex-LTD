"use client";

interface ReviewCardProps {
  review: {
    name: string;
    rating: number;
    review: string;
    date: string;
    postalCode: string;
    serviceType: string;
  };
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const initial = review.name.charAt(0).toUpperCase();

  const avatarColors = [
    "#4285F4",
    "#EA4335",
    "#34A853",
    "#FBBC05",
    "#9C27B0",
    "#FF5722",
    "#00BCD4",
    "#607D8B",
  ];
  const colorIndex = review.name.charCodeAt(0) % avatarColors.length;
  const avatarColor = avatarColors[colorIndex];

  return (
    <div className="bg-white rounded-lg p-6 flex flex-col gap-4 shadow-sm border border-gray-100">
      <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
        &ldquo;{review.serviceType}&rdquo;
      </h3>

      <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-1 line-clamp-6">
        {review.review}
      </p>

      <hr className="border-gray-200" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0"
            style={{ backgroundColor: avatarColor }}
          >
            {initial}
          </div>

          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-gray-900 text-sm">
                {review.name}
              </span>

              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="#FBBC05"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
            <span className="text-gray-500 text-xs">{review.date}</span>
          </div>
        </div>

        <svg
          className="w-8 h-8 shrink-0"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#EA4335"
            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
          />
          <path
            fill="#4285F4"
            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
          />
          <path
            fill="#FBBC05"
            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
          />
          <path
            fill="#34A853"
            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
          />
          <path fill="none" d="M0 0h48v48H0z" />
        </svg>
      </div>
    </div>
  );
};

export default ReviewCard;

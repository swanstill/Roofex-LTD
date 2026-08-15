const StarsDisplay = ({ score }: { score: string }) => {
    const numScore = parseFloat(score);
    const totalStars = 10;
  
    const StarIcon = ({ fillPercentage }: { fillPercentage: number }) => {
      
      return (
        <svg 
          className="w-4 h-4 inline-block mr-0.5" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Empty star background */}
          <path
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            fill="#d1d5db"
          />
          {/* Filled star with clip path for partial fill */}
          <clipPath id={`clip-${fillPercentage}`}>
            <rect x="0" y="0" width={`${fillPercentage * 20}`} height="20" />
          </clipPath>
          <path
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            fill="#fbbf24"
            clipPath={`url(#clip-${fillPercentage})`}
          />
        </svg>
      );
    };
  
    return (
      <div className="grid grid-cols-5 gap-0">
        {Array.from({ length: totalStars }).map((_, index) => {
          const starPosition = index + 1;
          let fillPercentage = 0;
          
          if (starPosition <= numScore) {
            fillPercentage = 1;
          } else if (starPosition > numScore && starPosition - 1 < numScore) {
            fillPercentage = numScore - Math.floor(numScore);
          } else {
            fillPercentage = 0;
          }
          
          return <StarIcon key={index} fillPercentage={fillPercentage} />;
        })}
      </div>
    );
  };
  export default StarsDisplay

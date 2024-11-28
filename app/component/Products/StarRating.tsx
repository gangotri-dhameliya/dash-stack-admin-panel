import React, { useEffect, useState } from "react";

interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    setHoverRating(rating);
  }, [rating]);

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          starId={star}
          rating={rating}
          hoverRating={hoverRating}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => onRatingChange(star)}
        />
      ))}
      <span className="text-gray-600 text-sm ml-1"> (131)</span>
    </div>
  );
};

interface StarProps {
  starId: number;
  rating: number;
  hoverRating: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

const Star: React.FC<StarProps> = ({
  starId,
  rating,
  hoverRating,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  const isFilled = starId <= (hoverRating || rating);

  return (
    <svg
      className={`w-5 h-5 cursor-pointer ${
        isFilled ? "text-orange-400" : "text-gray-300"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049.245l2.317 6.888h7.255l-5.872 4.266 2.317 6.888-5.872-4.267-5.873 4.267 2.317-6.888-5.872-4.266h7.255l2.317-6.888z" />
    </svg>
  );
};

export default StarRating;

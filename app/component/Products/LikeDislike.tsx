import React, { useEffect, useState } from "react";

type Props = {
  liked: boolean;
  onToggleLike: (liked: boolean) => void;
};

const HeartButton: React.FC<Props> = ({ liked: initialLiked, onToggleLike }) => {
  const [liked, setLiked] = useState(initialLiked);

  const handleClick = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    onToggleLike(newLiked);
  };

  useEffect(() => {
    setLiked(initialLiked);
  }, [initialLiked]);

  return (
    <button
      className="bg-gray-100 px-3 my-1 outline-none border-none rounded-full hover:bg-gray-200"
      onClick={handleClick}
    >
      <svg
        width="20"
        height="17"
        viewBox="0 0 20 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99996 15.883L17.191 8.383C18.4871 7.08786 18.8083 5.10828 17.9882 3.46975V3.46975C17.3765 2.24665 16.2142 1.39215 14.8643 1.17313C13.5144 0.954121 12.1415 1.3973 11.1745 2.36425L9.99996 3.538L8.82546 2.36425C7.85842 1.3973 6.48554 0.954121 5.13566 1.17313C3.78577 1.39215 2.62343 2.24665 2.01171 3.46975V3.46975C1.19274 5.10758 1.51356 7.08571 2.80821 8.38075L9.99996 15.883Z"
          stroke={!liked ? "gray" : ""}
          fill={liked ? "#FF0303" : ""}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default HeartButton;
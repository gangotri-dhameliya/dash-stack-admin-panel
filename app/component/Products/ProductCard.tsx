"use client";
import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import HeartButton from "./LikeDislike";

interface ListProp {
  image: string[];
  title: string;
  price: string;
  star: number;
  like: boolean;
  onRatingChange?: (rating: number) => void;
}

interface Props {
  fav: boolean;
}

export const ProductCard = ({ fav }: Props) => {
  const [list, setList] = useState<ListProp[]>([
    {
      image: [" ../../../watch.png", " ../../../goldenwatch.png"],
      price: "$120.00",
      like: true,
      star: 2,
      title: "Apple Watch Series 4",
    },
    {
      image: [
        " ../../../watch.png",
        " ../../../watch.png",
        " ../../../goldenwatch.png",
      ],
      price: "$140.00",
      like: false,
      star: 4,
      title: "Apple Watch Series 9",
    },
    {
      image: [
        " ../../../watch.png",
        " ../../../watch.png",
        " ../../../goldenwatch.png",
        " ../../../goldenwatch.png",
      ],
      price: "$1670.00",
      like: true,
      star: 1,
      title: "Apple Watch Series 8",
    },
    {
      image: [
        " ../../../watch.png",
        " ../../../goldenwatch.png",
        " ../../../goldenwatch.png",
      ],
      price: "$234.00",
      like: false,
      star: 3,
      title: "Apple Watch Series 6",
    },
    {
      image: [
        " ../../../watch.png",
        " ../../../goldenwatch.png",
        " ../../../goldenwatch.png",
        " ../../../watch.png",
      ],
      price: "$1404.00",
      like: false,
      star: 5,
      title: "Apple Watch Series 3",
    },
    {
      image: [
        " ../../../goldenwatch.png",
        " ../../../watch.png",
        " ../../../goldenwatch.png",
        " ../../../goldenwatch.png",
        " ../../../watch.png",
      ],
      price: "$1404.00",
      like: false,
      star: 5,
      title: "Apple Watch Series 3",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? list[currentIndex].image.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === list[currentIndex].image.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleToggleLike = (index: number) => (liked: boolean) => {
    const updatedList = [...list];
    updatedList[index].like = liked;
    setList(updatedList);
  };
  useEffect(() => {
    if (fav === true) {
      const favoritedList = list.filter((item) => item.like === true);
      setList(favoritedList);
    }
  }, [fav]);

  const handleRatingChange = (newRating: number, index: number) => {
    const updatedList = [...list];
    updatedList[index].star = newRating;
    setList(updatedList);
  };
  return (
    <div className="flex flex-wrap flex-row">
      {list.map((item, index) => (
        <div
          key={index}
          className="ml-6 mt-4 pb-5 bg-white rounded-xl space-x-1 flex relative flex-col"
          style={{
            width: "18.8rem",
            height: "26rem",
          }}
        >
          <div className="carousel space-x-4 p-4 carousel-center">
            {item.image.map((itm, i) => (
              <div
                key={i}
                id={itm}
                className="carousel-item"
                style={{
                  width: "15.5rem",
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                <img src={itm} className="w-full" alt="" />
              </div>
            ))}

            <div
              className={`absolute transform -translate-y-1/2 place-items-center left-0 top-32`}
              onClick={handlePrevClick}
            >
              <a
                className="btn btn-circle"
                style={{
                  background: "rgba(226,234,248,0.5)",
                  border: "none",
                }}
              >
                ❮
              </a>
            </div>
            <div
              className="absolute transform -translate-y-1/2 place-items-center right-3 top-32"
              onClick={handleNextClick}
            >
              <a
                className="btn btn-circle"
                style={{
                  background: "rgba(226,234,248,0.5)",
                  border: "none",
                }}
              >
                ❯
              </a>
            </div>
          </div>

          <div className="px-5">
            <div className="flex flex-row justify-between mb-2">
              <div>
                <div className="font-semibold">{item.title}</div>
                <div className="text-blue-700 mt-1">{item.price}</div>
              </div>

              <HeartButton
                liked={item.like}
                onToggleLike={handleToggleLike(index)}
              />
            </div>

            <StarRating
              rating={item.star}
              onRatingChange={(rating) => handleRatingChange(rating, index)}
            />

            <div className="bg-gray-200 px-5 py-2 mt-5 rounded-xl text-base inline-block">
              Edit Product
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

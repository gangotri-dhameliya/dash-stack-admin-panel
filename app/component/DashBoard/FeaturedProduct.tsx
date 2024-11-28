"use client";
import { useState } from "react";

interface Props {
  image: string;
  title: string;
  price: string;
}

const FeaturedProduct = () => {
  const featuredList: Props[] = [
    {
      image: "../../../headphones/1.jpg",
      price: "$80.00",
      title: "Beats Headphone 2019",
    },
    {
      image: "../../../headphones/2.jpg",
      price: "$40.00",
      title: "Beats Headphone 2015",
    },
    {
      image: "../../../headphones/3.jpg",
      price: "$100.00",
      title: "Beats Headphone 2016",
    },
    {
      image: "../../../headphones/4.jpg",
      price: "$150.00",
      title: "Beats Headphone 2012",
    },
    {
      image: "../../../headphones/5.jpeg",
      price: "$120.00",
      title: "Beats Headphone 2021",
    },
    {
      image: "../../../headphones/6.jpeg",
      price: "$100.00",
      title: "Beats Headphone 2017",
    },
    {
      image: "../../../headphones/7.jpeg",
      price: "$50.00",
      title: "Beats Headphone 2024",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredList.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectedSlider = featuredList[currentIndex];

  return (
    <div
      className="bg-white rounded-lg flex flex-col place-items-center shadow-md ml-5 mt-5 "
      style={{
        height: "320px",
        width: "330px",
      }}
    >
      <div className="text-start w-full pt-3 pl-4 pb-4 text-lg">
        Featured Products
      </div>
      <div className="carousel w-full h-1/2 mt-5 relative">
        {featuredList.map((item, index) => (
          <div
            key={index}
            className={`carousel-item absolute w-full justify-center transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ height: "100%" }}
          >
            <img src={item.image} className="w-1/2 mx-auto" />
          </div>
        ))}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={handlePrevClick} className="btn btn-circle">
            ❮
          </button>
          <button onClick={handleNextClick} className="btn btn-circle">
            ❯
          </button>
        </div>
      </div>
      <div className="mt-5 font-semibold">{selectedSlider.title}</div>
      <div className="text-xs text-blue-500">{selectedSlider.price}</div>
    </div>
  );
};

export default FeaturedProduct;

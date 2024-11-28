import React from "react";

export const TopSliderView = () => {
  return (
    <div>
      <div
        className="carousel  ml-6 mt-4 rounded-lg"
        style={{
          width: "83.5vw",
        }}
      >
        <div id="slide1" className="carousel-item relative w-full h-96">
          <img src="../../../images/product-bg.png" className="w-full " />

          <div className="absolute flex justify-between transform -translate-y-1/2 place-items-center left-5 right-5 top-1/2 ">
            <div className="text-white flex flex-row h-96  place-items-center">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <div className="ml-20">
                <div className="font-semibold text-base">September 12-22</div>
                <div className="font-semibold text-4xl mt-4">
                  Enjoy free home
                </div>
                <div className="font-semibold text-4xl">
                  delivery in this summer
                </div>
                <div className="font-thin text-base text-white  mt-4">
                  Designer Dresses - Pick from trendy Designer Dress.
                </div>
                <div
                  className="mt-6"
                  style={{
                    display: "inline-block",

                    borderRadius: "10px",
                    backgroundColor: "#FF8743",
                    padding: "12px 30px",
                    fontSize: "14px",
                    fontWeight: "400",
                    letterSpacing: 1,
                    wordSpacing: 1,
                  }}
                >
                  Get Started
                </div>
              </div>
            </div>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

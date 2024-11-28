import React from "react";

const RoundedChart = () => {
  return (
    <div
      className="bg-white rounded-lg flex flex-col place-items-center shadow-md ml-5 mt-5 "
      style={{
        height: "320px",
        width: "330px",
      }}
    >
      <div className="text-start w-full pt-3 pl-4 pb-4 text-lg"> Customers</div>
      <div
        style={{
          marginTop: "10px",
          position: "relative",
          display: "flex",
          placeItems: "center",
          justifyContent: "center",
          width: "125px",
          height: "125px",
          borderRadius: "50%",

          backgroundColor: "rgba(72,128,255,0.2)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            borderRadius: "50%",

            backgroundColor: "white",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-12px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "15px",
              height: "11px",
              borderRadius: "50%",
              backgroundColor: "#4880FF",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              bottom: "-12px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "15px",
              height: "11px",
              borderRadius: "50%",
              backgroundColor: "#4880FF",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "-12px",
              transform: "translateY(-50%)",
              width: "11px",
              height: "15px",
              borderRadius: "50%",
              backgroundColor: "#4880FF",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "-12px",
              transform: "translateY(-50%)",
              width: "11px",
              height: "15px",
              borderRadius: "50%",
              backgroundColor: "#4880FF",
            }}
          ></div>
        </div>
      </div>
      <div className="flex flex-row justify-center w-full mt-10">
        <div>
          <div className="text-center text-2xl font-semibold">34,249</div>
          <div className="flex flex-row place-items-center">
            <div
              style={{
                background: "#4880FF",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                marginRight: "3px",
              }}
            ></div>
            <div>New Customers</div>
          </div>
        </div>
        <div className="ml-8">
          <div className="text-center text-2xl font-semibold">1420</div>
          <div className="flex flex-row place-items-center">
            <div
              style={{
                background: "rgba(72,128,255,0.2)",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                marginRight: "3px",
              }}
            ></div>
            <div>Repeated</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoundedChart;

"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { faker } from "@faker-js/faker";
import CommonMonthDropdown from "./CommonMonthDropdown";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  tension: 0.3,
  scales: {
    x: {
      grid: {
        display: false,
      },
      display: true,
      title: {
        display: true,
      },
    },
    y: {
      beginAtZero: true,
      display: true,
      ticks: {
        stepSize: 20,
        callback: function (value: number | string) {
          return value;
        },
      },
      title: {
        display: true,
      },
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = [
  "5k",
  "10k",
  "15k",
  "20k",
  "25k",
  "30k",
  "35k",
  "40k",
  "45k",
  "50k",
  "55K",
  "60k",
];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "rgba(255, 0, 0, 0)",
      backgroundColor: "rgba(255, 143, 109, 0.8)",
      fill: {
        target: "origin",
        above: "rgba(255, 143, 109, 0.8)",
      },
    },
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "rgba(53, 162, 235, 0)",
      backgroundColor: "rgba(219, 165, 255, 1)",
      fill: "origin",
    },
  ],
};

const RevenueChart = () => {
  return (
    <div
      className=" flex flex-col items-center p-4 bg-white rounded-lg shadow-md ml-5"
      style={{
        height: "510px",
      }}
    >
      <div
        className=" flex justify-between items-center px-8 py-3 text-lg"
        style={{ width: "100%" }}
      >
        <span>Revenue</span>
        <CommonMonthDropdown />
      </div>
      <div className="h-full px-4" style={{ width: "100%" }}>
        <Line options={options} data={data} />
      </div>
      <div className="flex flex-row flex-auto w-full justify-center place-items-center">
        <div
          style={{
            background: "rgba(255, 143, 109, 0.8)",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
        ></div>
        <div> Sales</div>
        <div
          style={{
            background: "rgba(219, 165, 255, 1)",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            marginLeft: "30px",
            marginRight: "10px",
          }}
        ></div>
        <div> Profit</div>
      </div>
    </div>
  );
};

export default RevenueChart;

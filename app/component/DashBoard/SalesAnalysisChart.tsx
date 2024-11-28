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
  ChartData,
} from "chart.js";
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
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      display: true,
      ticks: {
        stepSize: 25,
        callback: function (value: any) {
          return value;
        },
      },
      title: {
        display: false,
      },
    },
  },
  elements: {
    point: {
      radius: 4,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = [2015, 2016, 2017, 2018, 2019];

export const data: ChartData<"line", number[], number> = {
  labels,
  datasets: [
    {
      data: [0, 25, 60, 40, 50],
      borderColor: "green",
      pointBackgroundColor: "green",
      backgroundColor: "rgba(255, 99, 132, 0)",
      fill: true,
      borderCapStyle: "round",
    },
    {
      data: [25, 40, 80, 50, 60],
      borderColor: "blue",
      pointBackgroundColor: "green",
      backgroundColor: "rgba(53, 162, 235, 0)",
      fill: true,
      borderCapStyle: "round",
    },
  ],
};

const SalesAnalysisChart = () => {
  return (
    <div
      className="w-full flex flex-col items-center mt-5  bg-white rounded-lg shadow-md ml-5"
      style={{
        height: "320px",
        width: "330px",
      }}
    >
      <div className="text-start w-full pt-3 pl-4 pb-4">Sales Analytics</div>

      <div
        style={{
          width: "310px",
          height: "250px",
        }}
      >
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default SalesAnalysisChart;

"use client";
import React from "react";
import { faker } from "@faker-js/faker";
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
  ChartOptions,
} from "chart.js";
import useWindowWidth from "@/app/hooks/MediaWidthHooks";
import CommonMonthDropdown from "./CommonMonthDropdown";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "rgba(0,0,0,0.8)",

      borderColor: "#000000",
      borderWidth: 1,
      bodySpacing: 5,
      titleSpacing: 5,
      callbacks: {
        label: function (context) {
          return `${context.label}`;
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,

      max: 100,

      ticks: {
        stepSize: 20,
        callback: function (tickValue: string | number) {
          return `${tickValue}%`;
        },
      },
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
const data = {
  labels,
  datasets: [
    {
      label: "Sales",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",

      pointBackgroundColor: "rgba(54, 162, 235, 1)",
      pointBorderColor: "#fff",
      pointRadius: 8,
      pointHoverRadius: 8,
      pointHoverBorderColor: "rgba(54, 162, 235, 1)",
      fill: true,
    },
  ],
};

const SalesChart = () => {
  const windowWidth = useWindowWidth();

  return (
    <div
      style={{
        display: "flex",
        width: "98%",
        margin: "20px 0px 20px 20px",
        flexDirection: "column",
        height: "470px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className=" flex justify-between items-center px-8 py-6 text-lg"
        style={{ width: "100%" }}
      >
        <span>Sales Details</span>
        <CommonMonthDropdown />
      </div>
      <div style={{ width: "98%", padding: "0px 30px", height: "350px" }}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default SalesChart;

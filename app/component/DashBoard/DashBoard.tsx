"use client";
import React from "react";
import styles from "./DashBoard.module.css";
import useWindowWidth from "@/app/hooks/MediaWidthHooks";
import CardsView from "./CardsView";
import SalesChart from "./ChartView";
import DealsDetailTable from "./DealsDetailTable";
import RevenueChart from "./RevenueChart";
import SalesAnalysisChart from "./SalesAnalysisChart";
import RoundedChart from "./RoundedChart";
import FeaturedProduct from "./FeaturedProduct";

const DashBoard = () => {
  const windowWidth = useWindowWidth();

  return (
    <div
      className={`flex-auto m-5 ${styles.dashBoard}`}
      style={{
        marginLeft: windowWidth < 1270 ? "90px" : "260px",

        overflowY: "hidden",
        width: "min-content",
        height: "min-content",
      }}
    >
      <span className={styles.textDark}>Dashboard</span>
      <div className={styles.cardsRow}>
        <CardsView
          amount="40,000"
          desc="Up from yesterday"
          descRate="8.5%"
          green={true}
          icon="../../../images/contactIcon.png"
          title="Total Users"
        />
        <CardsView
          amount=" 10226"
          desc="Up from past week"
          descRate="1.3%"
          green={true}
          icon="../../../images/order.png"
          title="Total Order"
        />
        <CardsView
          amount="$89000"
          desc="Down from yesterday"
          descRate="4.3%"
          green={false}
          icon="../../../images/sales.png"
          title="Total Sales"
        />
        <CardsView
          amount="2024"
          desc="Up from yesterday"
          descRate="1.8%"
          green={true}
          icon="../../../images/pending.png"
          title="Total Pending"
        />
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "10px",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SalesChart />
      </div>

      <DealsDetailTable />

      <RevenueChart />
      <div className="flex flex-row flex-wrap">
        <RoundedChart />
        <FeaturedProduct/>
        <SalesAnalysisChart />
      </div>
    </div>
  );
};

export default DashBoard;

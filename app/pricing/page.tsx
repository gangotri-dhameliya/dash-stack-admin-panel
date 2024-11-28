import React from "react";
import NavBar from "../component/Nav/NavBar";
import SideBarView from "../component/SideBar/SideBarView";
import PricingView from "../component/Pricing/PricingView";

export default function page() {
  return (
    <div>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <SideBarView />
        <PricingView />
      </div>
    </div>
  );
}

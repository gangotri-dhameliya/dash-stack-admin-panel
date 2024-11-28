"use client";
import { useEffect } from "react";
import DashBoard from "./component/DashBoard/DashBoard";
import NavBar from "./component/Nav/NavBar";
import SideBarView from "./component/SideBar/SideBarView";

export default function Home() {
  
  useEffect(() => {
    const clearSessionStorage = () => {
      sessionStorage.clear();
    };
    window.addEventListener("currentItem", clearSessionStorage);
    return () => {
      window.removeEventListener("currentItem", clearSessionStorage);
    };
  },[]);

  return (
    <main>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <SideBarView />
        <DashBoard />
      </div>
   
    </main>
  );
}

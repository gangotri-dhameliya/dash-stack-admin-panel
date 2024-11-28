import React from "react";
import NavBar from "../component/Nav/NavBar";
import SideBarView from "../component/SideBar/SideBarView";
import TeamView from "../component/Team/TeamView";


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
        <TeamView />
      </div>
    </div>
  );
}

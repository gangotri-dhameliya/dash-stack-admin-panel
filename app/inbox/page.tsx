import React from "react";
import NavBar from "../component/Nav/NavBar";
import SideBarView from "../component/SideBar/SideBarView";
import InboxView from "../component/Inbox/InboxView";


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
        <InboxView/>
      </div>
    </div>
  );
}

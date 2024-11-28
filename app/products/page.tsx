import React from "react";
import NavBar from "../component/Nav/NavBar";
import SideBarView from "../component/SideBar/SideBarView";
import { ProductsView } from "../component/Products/ProductsView";

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
        <ProductsView fav={false} />
      </div>
    </div>
  );
}

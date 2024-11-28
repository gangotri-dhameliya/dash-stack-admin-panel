import React from "react";
import NavBar from "../component/Nav/NavBar";
import SideBarView from "../component/SideBar/SideBarView";
import { ProductsView } from "../component/Products/ProductsView";
import { FavouritesView } from "../component/Favourites/FavouritesView";

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
        <FavouritesView />
      </div>
    </div>
  );
}

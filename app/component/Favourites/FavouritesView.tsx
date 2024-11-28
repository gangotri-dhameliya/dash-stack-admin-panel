"use client";

import useWindowWidth from "@/app/hooks/MediaWidthHooks";
import styles from "./FavouriteView.module.css";
import { ProductCard } from "../Products/ProductCard";

export const FavouritesView = () => {
  const windowWidth = useWindowWidth();

  return (
    <div
      className={`flex-auto m-5 ${styles.favs}`}
      style={{
        marginLeft: windowWidth < 1270 ? "90px" : "260px",

        overflowY: "hidden",
        width: "min-content",
        height: "min-content",
      }}
    >
      <span className={styles.textFavDark}>Favorites</span>
      <div
        style={{
          height: "100vh",
        }}
      >
        <ProductCard fav={true} />
      </div>
    </div>
  );
};

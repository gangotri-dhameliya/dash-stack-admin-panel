"use client";
import useWindowWidth from "@/app/hooks/MediaWidthHooks";
import styles from "./ProductsView.module.css";
import { ProductCard } from "./ProductCard";
import { TopSliderView } from "./TopSliderView";

type Props = {
  fav:boolean
}

export const ProductsView = ({ fav }: Props) => {
  const windowWidth = useWindowWidth();

  return (
    <div
      className={`flex-auto m-5 ${styles.product}`}
      style={{
        marginLeft: windowWidth < 1270 ? "90px" : "260px",

        overflowY: "hidden",
        width: "min-content",
        height: "min-content",
      }}
    >
      <span className={styles.textProductDark}>Products</span>
      <TopSliderView />
      <ProductCard fav={fav}/>
    </div>
  );
};

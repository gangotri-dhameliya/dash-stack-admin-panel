"use client";
import styles from "./ProductStockView.module.css";
import useWindowWidth from "@/app/hooks/MediaWidthHooks";
import { ProductsStockTable } from "./ProductStockTable";

const ProductStockView = () => {
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
      <span className={styles.textProductDark}>Product Stock</span>
      <div style={{ height: "100vh" }}>
        <ProductsStockTable />
      </div>
    </div>
  );
};
export default ProductStockView;

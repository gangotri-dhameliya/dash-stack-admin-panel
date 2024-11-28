"use client";
import styles from "./TableView.module.css";
import useWindowWidth from "@/app/hooks/MediaWidthHooks";
import { ProductsStockTable } from "./ProductStockTable";
import { OrderListTable } from "./OrderList";

const TableView = () => {
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
      <span className={styles.textProductDark}>Table</span>
      <div style={{ height: "auto", overflow: "hidden" }}>
        <div
          className="mt-6 mb-0 ml-5 bg-gray-300  w-full"
          style={{
            height: "0.08px",
          }}
        />
        <OrderListTable />
        <div
          className="mt-6 mb-0 ml-5 bg-gray-300  w-full"
          style={{
            height: "0.08px",
          }}
        />
        <ProductsStockTable />
      </div>
    </div>
  );
};
export default TableView;

"use client";
import styles from "./OrderListView.module.css";
import useWindowWidth from "@/app/hooks/MediaWidthHooks";
import { OrderListTable } from "./OrderListTable";

const OrderListView = () => {
  const windowWidth = useWindowWidth();

  return (
    <div
      className={`flex-auto m-5 ${styles.order}`}
      style={{
        marginLeft: windowWidth < 1270 ? "90px" : "260px",

        overflowY: "hidden",
        width: "min-content",
        height: "min-content",
      }}
    >
      <span className={styles.textOrderDark}>Order Lists</span>
      <div style={{ height: "100vh" }}>
        <OrderListTable />
      </div>
    </div>
  );
};
export default OrderListView;

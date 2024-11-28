"use client";
import styles from "./InvoiceView.module.css";
import useWindowWidth from "@/app/hooks/MediaWidthHooks";
import { InvoiceTable } from "./InvoiceTable";

const InvoiceView = () => {
  const windowWidth = useWindowWidth();

  return (
    <div
      className={`flex-auto m-5 ${styles.invoice}`}
      style={{
        marginLeft: windowWidth < 1270 ? "90px" : "260px",

        overflowY: "hidden",
        width: "min-content",
        height: "min-content",
      }}
    >
      <span className={styles.textInvoiceDark}>Invoice</span>
      <div style={{ height: "100vh" }}>
        <InvoiceTable />
      </div>
    </div>
  );
};
export default InvoiceView;

"use client";
import styles from "./InboxView.module.css";
import useWindowWidth from "@/app/hooks/MediaWidthHooks";
import { InboxDetailView } from "./InboxDetailView";

const InboxView = () => {
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
      <span className={styles.textInvoiceDark}>Inbox</span>
      <div style={{ height: "100%" }}>
        <InboxDetailView />
      </div>
    </div>
  );
};
export default InboxView;

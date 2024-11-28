"use client";
import styles from "./PricingView.module.css";
import useWindowWidth from "@/app/hooks/MediaWidthHooks";
import { PricingListView } from "./PricingListView";

const PricingView = () => {
  const windowWidth = useWindowWidth();

  return (
    <div
      className={`flex-auto m-5 ${styles.price}`}
      style={{
        marginLeft: windowWidth < 1270 ? "90px" : "260px",

        overflowY: "hidden",
        width: "min-content",
        height: "min-content",
      }}
    >
      <div className={`${styles.textPriceDark} text-center`}>Pricing</div>
      <div>
        <PricingListView />
      </div>
    </div>
  );
};
export default PricingView;

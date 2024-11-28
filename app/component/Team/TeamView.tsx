"use client";
import { TeamListView } from "./TeamListView";
import styles from "./TeamView.module.css";
import useWindowWidth from "@/app/hooks/MediaWidthHooks";

const TeamView = () => {
  const windowWidth = useWindowWidth();

  return (
    <div
      className={`flex-auto m-5 ${styles.team}`}
      style={{
        marginLeft: windowWidth < 1270 ? "90px" : "260px",
        overflowY: "hidden",
        width: "min-content",
        height: "min-content",
      }}
    >
      <div className=" flex flex-row justify-between">
        <div className={styles.textTeamDark}>Team</div>
        <button
          className="btn btn-active text-white px-5"
          style={{
            background: "rgba(15, 15, 226, 0.7)",
          }}
        >
          Add New Member
        </button>
      </div>
      <div style={{ height: "auto" }}>
        <TeamListView />
      </div>
    </div>
  );
};
export default TeamView;

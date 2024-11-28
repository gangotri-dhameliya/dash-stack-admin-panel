"use client";
import styles from "./TodoView.module.css";
import useWindowWidth from "@/app/hooks/MediaWidthHooks";
import { TodoList } from "./TodoList";

const TodoView = () => {
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
      <div style={{ height: "100vh" }}>
        <TodoList />
      </div>
    </div>
  );
};
export default TodoView;

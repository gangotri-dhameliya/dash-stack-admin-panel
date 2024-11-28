import { useState } from "react";
import styles from "./TodoView.module.css";
import useWindowWidth from "@/app/hooks/MediaWidthHooks";

interface Props {
  note: string;
  fav?: boolean;
}

export const TodoList = () => {
  const [todoData, setTodoData] = useState<Props[]>([
    {
      note: "Meeting with CEO",
    },
    {
      note: "Pick up kids from school",
      fav: true,
    },
    {
      note: "Shopping with Brother",
    },
    {
      note: "Going to Dia’s School",
      fav: true,
    },
    {
      note: "Check design files",
    },
    {
      note: "Update File",
    },
  ]);
  const windowWidth = useWindowWidth();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [newTask, setNewTask] = useState<string>("");

  const addNewTask = () => {
    if (newTask.trim() !== "") {
      setTodoData([...todoData, { note: newTask }]);
      setNewTask("");
    }
  };

  const deleteTask = (index: number) => {
    const updatedTodoData = todoData.filter((_, i) => i !== index);
    setTodoData(updatedTodoData);
    setSelectedIndex(null);
  };

  const toggleFavorite = (index: number) => {
    const updatedTodoData = todoData.map((item, i) =>
      i === index ? { ...item, fav: !item.fav } : item
    );
    setTodoData(updatedTodoData);
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
        <span className={styles.textInvoiceDark}>Add New To-Do</span>
        <button
          className="btn bg-blue-700 text-white px-10 hover:bg-blue-700"
          onClick={addNewTask}
        >
          Add New Task
        </button>
      </div>
      <div
        className="bg-white p-5 ml-6 mt-5"
        style={{
          border: "1px solid lightgrey",
          borderRadius: "8px",
        }}
      >
        <input
          type="text"
          placeholder="Write Your task name here"
          className="input input-bordered bg-gray-100"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{
            width: windowWidth < 800 ? "95%" : "60%",
            outline: "none",
          }}
        />
      </div>
      <div>
        {todoData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-row justify-between ${
              selectedIndex === index ? "bg-blue-700" : "bg-white"
            } p-5 my-6 ml-6`}
            style={{
              border: "1px solid lightgrey",
              borderRadius: "8px",
              color: selectedIndex === index ? "white" : "black",
            }}
          >
            <div className="flex flex-row justify-center place-items-center">
              <div
                style={{
                  border: "1px solid lightgrey",
                  padding: "1px 4px",
                  borderRadius: "5px",
                  marginRight: "10px",
                }}
                onClick={() => setSelectedIndex(null)}
              >
                <i
                  className="fas fa-check"
                  style={{
                    visibility: selectedIndex === index ? "visible" : "hidden",
                    color: selectedIndex === index ? "white" : "grey",
                  }}
                ></i>
              </div>
              <span>{item.note}</span>
            </div>
            {selectedIndex === index ? (
              <div
                className="bg-blue-400 px-4 py-1 cursor-pointer"
                style={{
                  borderRadius: "8px",
                }}
                onClick={() => deleteTask(index)}
              >
                <i
                  className="fas fa-trash"
                  style={{
                    color: "lightgrey",
                  }}
                ></i>
              </div>
            ) : (
              <div className="flex flex-row justify-center place-items-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => toggleFavorite(index)}
                  style={{ cursor: "pointer" }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.8401 1.51507L18.7064 9.175L26.148 9.91222C26.5097 9.94228 26.8209 10.18 26.945 10.5211C27.0692 10.8622 26.9835 11.2444 26.7257 11.4999L20.6015 17.5698L22.8721 25.8179C22.967 26.1753 22.8434 26.5551 22.5564 26.7882C22.2694 27.0213 21.8724 27.0644 21.5421 26.8983L13.9977 23.1625L6.4637 26.8937C6.13337 27.0598 5.73633 27.0167 5.44934 26.7836C5.16236 26.5504 5.03881 26.1707 5.1337 25.8133L7.4043 17.5652L1.27543 11.4953C1.01761 11.2398 0.931977 10.8576 1.05611 10.5165C1.18023 10.1754 1.49144 9.93766 1.85319 9.90759L9.29472 9.17037L13.1553 1.51507C13.3172 1.1989 13.6425 1 13.9977 1C14.3529 1 14.6782 1.1989 14.8401 1.51507Z"
                    fill={item.fav === true ? `#FFD56D` : ""}
                    stroke={item.fav === true ? "" : `lightgrey`}
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div
                  className="rounded-full ml-4"
                  style={{
                    border: "1px solid lightgrey",
                    padding: "2px 9px",
                  }}
                  onClick={() => {
                    setSelectedIndex(index);
                  }}
                >
                  <i
                    className="fas fa-times"
                    style={{
                      color: "lightgrey",
                    }}
                  ></i>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

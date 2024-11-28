import React from "react";

const CommonMonthDropdown = () => {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        className="rounded-lg  border-2 border-solid border-gray-200 py-1 px-4 text-gray-400 text-sm"
      >
        October
        <i className="fas fa-chevron-down ml-2 text-gray-400 text-xs"></i>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default CommonMonthDropdown;

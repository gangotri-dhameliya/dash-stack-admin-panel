import React from "react";

interface Props {
  status: string;
}

const CommonTableItem = ({ status }: Props) => {
  return (
    <tr>
      <td>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="../../../images/watch.png"
            alt=""
            style={{
              width: "20px",
              height: "20px",
              marginRight: "5px",
            }}
          />
          <span>Apple Watch</span>
        </div>
      </td>
      <td>6096 Marjolaine Landing</td>
      <td>423</td>
      <td>Blue</td>
      <td>$34.295</td>
      <td>
        {" "}
        <span
          className={`${
            status === "Rejected"
              ? "bg-red-400"
              : status === "Pending"
              ? "bg-yellow-400"
              : "bg-green-600"
          } py-1 px-4 rounded-full text-white`}
        >
          {status}
        </span>
      </td>
    </tr>
    // <div className="flex flex-row border-b pb-4 pt-4 border-gray-200">
    //   <div className="w-1/6 flex items-center">
    //     <img
    //       src="../../../images/watch.png"
    //       alt=""
    //       style={{
    //         width: "20px",
    //         height: "20px",
    //         marginRight: "5px",
    //       }}
    //     />
    //     Apple Watch
    //   </div>
    //   <div className="w-1/6">6096 Marjolaine Landing</div>
    //   <div className="w-1/6">12.09.2019 - 12.53 PM</div>
    //   <div className="w-1/6">423</div>
    //   <div className="w-1/6">$34.295</div>
    //   <div className="w-1/6">
    //     <span
    //       className={`${
    //         status === "Rejected"
    //           ? "bg-red-400"
    //           : status === "Pending"
    //           ? "bg-yellow-400"
    //           : "bg-green-600"
    //       } py-1 px-4 rounded-full text-white`}
    //     >
    //       {status}
    //     </span>
    //   </div>
    // </div>
  );
};

export default CommonTableItem;

import React, { useState } from "react";

interface OrderData {
  id: string;
  name: string;
  date: string;
  address: string;
  type: string;
  status: string;
}

export const OrderListTable = () => {
  const orderData: OrderData[] = [
    {
      id: "00001",
      name: "Christine Brooks",
      address: "089 Kutch Green Apt. 448",
      date: "04 Sep 2019",
      type: "Electric",
      status: "Completed",
    },
    {
      id: "00002",
      name: "Rosie Pearson",
      address: "979 Immanuel Ferry Suite 526",
      date: "28 May 2019",
      type: "Book",
      status: "Processing",
    },
    {
      id: "00003",
      name: "Darrell Caldwell",
      address: "8587 Frida Ports",
      date: "23 Nov 2019",
      type: "Medicine",
      status: "Rejected",
    },
    {
      id: "00004",
      name: "Gilbert Johnston",
      address: "768 Destiny Lake Suite 600",
      date: "05 Feb 2019",
      type: "Mobile",
      status: "Completed",
    },
    {
      id: "00005",
      name: "Alan Cain",
      address: "042 Mylene Throughway",
      date: "29 Jul 2019",
      type: "Watch",
      status: "Processing",
    },
    {
      id: "00006",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: "15 Aug 2019",
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "00007",
      name: "Maggie Sullivan",
      address: "New Scottieberg",
      date: "21 Dec 2019",
      type: "Watch",
      status: "Processing",
    },
    {
      id: "00008",
      name: "Rosie Todd",
      address: "New Jon",
      date: "30 Apr 2019",
      type: "Medicine",
      status: "On Hold",
    },
    {
      id: "00009",
      name: "Dollie Hines",
      address: "124 Lyla Forge Suite 975",
      date: "09 Jan 2019",
      type: "Book",
      status: "In Transit",
    },
    {
      id: "00010",
      name: "Harvey Manning",
      address: "Suite 975",
      date: "15 Aug 2019",
      type: "Crockery",
      status: "On Hold",
    },
    {
      id: "00011",
      name: "Sharve Shuha",
      address: "Kullu Manali",
      date: "15 May 2024",
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "00012",
      name: "Rivana Dule",
      address: "Kulkarni Road",
      date: "30 June 2024",
      type: "Electric",
      status: "Processing",
    },
    {
      id: "00013",
      name: "Rehna Shah",
      address: "Juhu beach",
      date: "24 Sept 2024",
      type: "Electric",
      status: "Rejected",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handleNextPage = () => {
    if (currentPage * itemsPerPage < orderData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = orderData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div
        className="overflow-x-auto"
        style={{
          border: "1px solid lightgrey",
          borderRadius: "15px",
          marginLeft: "20px",
          marginTop: "30px",
        }}
      >
        <table className="table bg-white">
          <thead style={{ color: "#202224" }}>
            <tr style={{ background: "#FAFAFA" }}>
              <th>ID</th>
              <th>NAME</th>
              <th>ADDRESS</th>
              <th>DATE</th>
              <th>TYPE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {displayedItems.map((item) => (
              <tr key={item.id}>
                <td className="p-4">{item.id}</td>
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.address}</td>
                <td className="p-4">{item.date}</td>
                <td className="p-4">{item.type}</td>
                <td className="p-4">
                  <span
                    style={{
                      padding: "6px 16px",
                      fontSize: "12px",
                      fontWeight: "500",
                      borderRadius: "4.5px",
                      background:
                        item.status === "In Transit"
                          ? "rgba(186,41,255,0.3)"
                          : item.status === "On Hold"
                          ? "rgba(255,167,86,0.3)"
                          : item.status === "Rejected"
                          ? "rgba(239,56,38,0.3)"
                          : item.status === "Completed"
                          ? "rgba(0,182,185,0.3)"
                          : "rgba(98,38,239,0.3)",

                      color:
                        item.status === "In Transit"
                          ? "rgb(186,41,255)"
                          : item.status === "On Hold"
                          ? "rgb(255,167,86)"
                          : item.status === "Rejected"
                          ? "rgb(239,56,38)"
                          : item.status === "Completed"
                          ? "#00B69B"
                          : "rgb(98,38,239)",
                    }}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="ml-6 text-sm text-gray-600 mt-4 flex flex-row justify-between">
        <div>
          Showing {startIndex + 1} -{" "}
          {Math.min(startIndex + itemsPerPage, orderData.length)} of{" "}
          {orderData.length}
        </div>
        <div
          className="bg-white"
          style={{
            borderRadius: "10px",
            border: "1px solid lightgrey",
          }}
        >
          <i
            className="fas fa-chevron-left"
            style={{
              padding: "8px 14px",
              color: currentPage > 1 ? "black" : "grey",
              borderRight: "1px solid lightgrey",
              cursor: currentPage > 1 ? "pointer" : "not-allowed",
            }}
            onClick={handlePrevPage}
          ></i>
          <i
            className="fas fa-chevron-right"
            style={{
              color:
                currentPage * itemsPerPage < orderData.length
                  ? "black"
                  : "grey",
              padding: "8px 14px",
              cursor:
                currentPage * itemsPerPage < orderData.length
                  ? "pointer"
                  : "not-allowed",
            }}
            onClick={handleNextPage}
          ></i>
        </div>
      </div>
    </div>
  );
};

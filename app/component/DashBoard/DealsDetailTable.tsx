import useWindowWidth from "@/app/hooks/MediaWidthHooks";
import CommonMonthDropdown from "./CommonMonthDropdown";
import CommonTableItem from "./CommonTableItem";

const DealsDetailTable = () => {
  const windowWidth = useWindowWidth();

  return (
    <>
      <div
        className="bg-white  ml-7 mt-2 mb-7 pb-3"
        style={{
          borderRadius: "10px",
        }}
      >
        <div className="px-8 py-6 text-lg flex-row justify-between flex place-items-center">
          <span>Deals Details</span>
          <CommonMonthDropdown />
        </div>
        <div
          className="bg-white mx-7 mt-2 mb-7 pb-3 overflow-x-auto"
          style={{
            borderRadius: "10px",
          }}
        >
          <table className="table">
            <thead className="bg-gray-100 rounded-lg text-black px-6 py-3">
              <tr>
                <th>Product Name</th>
                <th>Location</th>
                <th>Date - Time</th>
                <th>Piece</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <CommonTableItem status="Delivered" />
              <CommonTableItem status="Pending" />
              <CommonTableItem status="Rejected" />
            </tbody>
          </table>
        </div>
      </div>
    </>
   
  );
};

export default DealsDetailTable;

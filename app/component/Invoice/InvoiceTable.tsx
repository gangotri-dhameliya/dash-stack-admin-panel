import useWindowWidth from "@/app/hooks/MediaWidthHooks";

interface InvoiceData {
  description: string;
  quantity: string;
  baseCost: string;
  totalCost: string;
}

export const InvoiceTable = () => {
  const windowWidth = useWindowWidth();

  const ivoiceData: InvoiceData[] = [
    {
      baseCost: "20",
      description: "Children Toy",
      quantity: "2",

      totalCost: "80",
    },
    {
      baseCost: "50",
      description: "Makeup",
      quantity: "2",
      totalCost: "100",
    },
    {
      baseCost: "100",
      description: "Asus Laptop",
      quantity: "5",
      totalCost: "500",
    },
    {
      baseCost: "1000",
      description: "Iphone X",
      quantity: "4",
      totalCost: "4000",
    },
  ];
  const totalOfTotalCost = ivoiceData.reduce((acc, item) => {
    return acc + parseFloat(item.totalCost);
  }, 0);
  return (
    <div
      className="bg-white p-8"
      style={{
        marginLeft: "20px",
        height: "100%",
        borderRadius: "10px",
        border: "1px solid lightgrey",
        marginTop: "30px",
      }}
    >
      <div
        className={`flex ${windowWidth < 725 ? "flex-col" : "flex-row"} ${
          windowWidth < 725 ? "justify-center" : "justify-between"
        } ${windowWidth < 1160 ? "mx-1" : "mx-56"} place-items-center`}
      >
        <div className="flex flex-col place-items-center">
          <div style={{ fontSize: "14px" }}>Invoice From :</div>
          <div style={{ fontWeight: "600", margin: "5px 0px 5px 0px" }}>
            Virginia Walker
          </div>
          <div style={{ fontSize: "14px", color: "grey" }}>
            9694 Krajcik Locks Suite 635
          </div>
        </div>
        <div
          className={`flex flex-col place-items-center ${
            windowWidth < 725 ? "my-5" : "my-0"
          }`}
        >
          <div style={{ fontSize: "14px" }}>Invoice To :</div>
          <div style={{ fontWeight: "600", margin: "5px 0px 5px 0px" }}>
            Austin Miller
          </div>
          <div style={{ fontSize: "14px" }}>Brookview</div>
        </div>
        <div className="flex flex-col justify-center">
          <div style={{ fontSize: "14px", marginBottom: "2px" }}>
            Invoice Date : 12 Nov 2019
          </div>

          <div style={{ fontSize: "14px" }}>Due Date : 25 Dec 2019</div>
        </div>
      </div>

      <div className="overflow-x-auto mt-9">
        <table className="table">
          <thead
            style={{
              background: "rgba(151,151,151,0.1)",
              borderRadius: "10px",
              border: "none",
            }}
          >
            <tr style={{ border: "none" }}>
              <th style={{ borderRadius: "10px 0px 0px 10px" }}>Serial No.</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Base Cost</th>
              <th style={{ borderRadius: "0px 10px 10px 00px" }}>Total Cost</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {ivoiceData.map((item, index) => (
              <tr key={index}>
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{item.description}</td>
                <td className="p-4">{item.quantity}</td>
                <td className="p-4">${item.baseCost}</td>
                <td className="p-4">${item.totalCost}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
        <div className="flex flex-row justify-end mt-4 mr-60">
          <span style={{ fontWeight: "600" }}>Total: ${totalOfTotalCost}</span>
        </div>
        <div className="flex flex-row justify-end mt-4 mr-10">
          <div
            style={{
              border: "1px solid lightgrey",
              background: "rgba(151,151,151,0.1)",
              padding: "8px 12px",
              borderRadius: "8px",
            }}
          >
            <i className="fas fa-print"></i>
          </div>
          <div className="ml-3">
            <button
              className="btn"
              style={{
                background: "rgba(15, 15, 226, 0.7)",
                color: "white",
              }}
            >
              Send
              <span
                style={{
                  background: "#6E9AFF",
                  padding: "6px",
                  borderRadius: "5px",
                }}
              >
                <i className="fas fa-paper-plane" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

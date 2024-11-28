import React, { useState } from "react";

interface ProductData {
  image: string;
  name: string;
  category: string;
  price: string;
  piece: number;
  color: string[];
  action: string;
}

export const ProductsStockTable = () => {
  const productDatas: ProductData[] = [
    {
      image: "https://picsum.photos/id/1/150",
      name: "Cy Ganderton",
      category: "Quality Control Specialist",
      price: "$450.00",
      piece: 63,
      color: ["blue"],
      action: "Delete",
    },
    {
      image: "https://picsum.photos/id/2/150",
      name: "Hart Hagerty",
      category: "Desktop Support Technician",
      price: "$690.00",
      piece: 84,
      color: ["purple", "blue", "green"],
      action: "Delete",
    },
    {
      image: "https://picsum.photos/id/3/150",
      name: "Brice Swyre",
      category: "Tax Accountant",
      price: "$780.00",
      piece: 43,
      color: ["pink", "grey"],
      action: "Delete",
    },
    {
      image: "https://picsum.photos/id/4/150",
      name: "Women’s Watch",
      category: "Fashion",
      price: "$670.00",
      piece: 56,
      color: ["green"],
      action: "Delete",
    },
    {
      image: "https://picsum.photos/id/5/150",
      name: "Cy Ganderton",
      category: "Quality Control Specialist",
      price: "$450.00",
      piece: 63,
      color: ["yellow"],
      action: "Delete",
    },
    {
      image: "https://picsum.photos/id/6/150",
      name: "Hart Hagerty",
      category: "Desktop Support Technician",
      price: "$690.00",
      piece: 84,
      color: ["purple", "red"],
      action: "Delete",
    },
  ];
  const [productData, setProductData] = useState<ProductData[]>(productDatas);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = productData.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const handleDelete = (index: number) => {
    const updatedProducts = [...productData];
    updatedProducts.splice((currentPage - 1) * itemsPerPage + index, 1);
    setProductData(updatedProducts);
  };

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
          {/* head */}
          <thead style={{ color: "#202224" }}>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Piece</th>
              <th>Available Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={item.image}
                    className="h-12 w-12 rounded-xl"
                    alt=""
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.piece}</td>
                <td>
                  {item.color.map((color, colorIndex) => (
                    <span
                      key={colorIndex}
                      style={{
                        display: "inline-block",
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        backgroundColor: color,
                        marginRight: "5px",
                      }}
                    ></span>
                  ))}
                </td>
                <td>
                  <div
                    className="bg-white"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid lightgrey",
                      display: "inline-block",
                      alignItems: "center",
                    }}
                  >
                    <i
                      className="fas fa-edit"
                      style={{
                        padding: "8px 14px",
                        color: "black",
                        borderRight: "1px solid lightgrey",
                        cursor: "pointer",
                      }}
                    ></i>
                    <i
                      className="fas fa-trash-alt"
                      style={{
                        padding: "8px 14px",
                        color: "red",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDelete(index)}
                    ></i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

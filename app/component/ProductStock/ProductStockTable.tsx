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
    {
      image: "https://picsum.photos/id/7/150",
      name: "Brice Swyre",
      category: "Tax Accountant",
      price: "$780.00",
      piece: 43,
      color: ["red", "yellow", "black"],
      action: "Delete",
    },
    {
      image: "https://picsum.photos/id/8/150",
      name: "Alex Johnson",
      category: "Product Manager",
      price: "$520.00",
      piece: 50,
      color: ["orange"],
      action: "Delete",
    },
    {
      image: "https://picsum.photos/id/9/150",
      name: "Linda Smith",
      category: "Software Engineer",
      price: "$820.00",
      piece: 72,
      color: ["brown"],
      action: "Delete",
    },
    {
      image: "https://picsum.photos/id/10/150",
      name: "Robert Brown",
      category: "Marketing Specialist",
      price: "$640.00",
      piece: 60,
      color: ["cyan"],
      action: "Delete",
    },
    {
      image: "https://picsum.photos/id/11/150",
      name: "Emily Davis",
      category: "Graphic Designer",
      price: "$470.00",
      piece: 40,
      color: ["magenta"],
      action: "Delete",
    },
    {
      image: "https://picsum.photos/id/12/150",
      name: "Michael Wilson",
      category: "Sales Representative",
      price: "$560.00",
      piece: 66,
      color: ["blue"],
      action: "Delete",
    },
    {
      image: "https://picsum.photos/id/13/150",
      name: "Sarah Johnson",
      category: "Project Manager",
      price: "$480.00",
      piece: 54,
      color: ["green", "yellow"],
      action: "Delete",
    },
    {
      image: "https://picsum.photos/id/14/150",
      name: "James Williams",
      category: "Software Developer",
      price: "$750.00",
      piece: 45,
      color: ["black"],
      action: "Delete",
    },
    {
      image: "https://picsum.photos/id/15/150",
      name: "Patricia Brown",
      category: "Content Writer",
      price: "$530.00",
      piece: 63,
      color: ["red", "blue"],
      action: "Delete",
    },
    {
      image: "https://picsum.photos/id/16/150",
      name: "Christopher Taylor",
      category: "Customer Service",
      price: "$610.00",
      piece: 38,
      color: ["purple"],
      action: "Delete",
    },
    {
      image: "https://picsum.photos/id/17/150",
      name: "Jennifer Thomas",
      category: "HR Specialist",
      price: "$620.00",
      piece: 59,
      color: ["pink", "green"],
      action: "Delete",
    },
    {
      image: "https://picsum.photos/id/18/150",
      name: "Matthew Thompson",
      category: "SEO Specialist",
      price: "$670.00",
      piece: 44,
      color: ["orange", "black"],
      action: "Delete",
    },
    {
      image: "https://picsum.photos/id/19/150",
      name: "Elizabeth Moore",
      category: "Data Analyst",
      price: "$590.00",
      piece: 52,
      color: ["cyan", "purple"],
      action: "Delete",
    },
    {
      image: "https://picsum.photos/id/20/150",
      name: "David Martin",
      category: "Business Analyst",
      price: "$720.00",
      piece: 49,
      color: ["blue", "grey"],
      action: "Delete",
    },
    {
      image: "https://picsum.photos/id/21/150",
      name: "Jessica Martinez",
      category: "Accountant",
      price: "$630.00",
      piece: 61,
      color: ["red", "yellow"],
      action: "Delete",
    },
    {
      image: "https://picsum.photos/id/22/150",
      name: "Andrew Jackson",
      category: "Web Developer",
      price: "$850.00",
      piece: 73,
      color: ["green", "blue"],
      action: "Delete",
    },
  ];
  const [productData, setProductData] = useState<ProductData[]>(productDatas);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handleNextPage = () => {
    if (currentPage * itemsPerPage < productData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
      <div className="ml-6 text-sm text-gray-600 mt-4 flex flex-row justify-between">
        <div>
          Showing {startIndex + 1}-{" "}
          {Math.min(startIndex + itemsPerPage, productData.length)} of{" "}
          {productData.length}
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
                currentPage * itemsPerPage < productData.length
                  ? "black"
                  : "grey",
              padding: "8px 14px",
              cursor:
                currentPage * itemsPerPage < productData.length
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

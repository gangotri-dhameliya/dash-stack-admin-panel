# Dash Stack Admin Panel

This admin panel contains a sleek, responsive, and feature-rich admin panel built using `React`, `Next.js`, `Tailwind CSS`, and `Daisy UI`.
The panel is designed for efficient management and data visualization, catering to modern administrative needs.


## Features

### Responsive Design
- **Mobile-first** approach for adaptability.
- Optimized for various screen sizes including desktops and tablets.

### Interactive UI
- Tailwind CSS combined with Daisy UI for beautiful and functional components.
- Clean and minimal design for better user focus.

### Dynamic Pages
- Modular and reusable components for scalability.
- Seamlessly integrates multiple pages like **Dashboard**, **Products**, **Orders**, **Invoices**, and more.


## Technologies Used

1. **React**: Component-based library for building UIs.
2. **Next.js**: Framework for server-side rendering and optimized performance.
3. **Tailwind CSS**: Utility-first CSS framework for fast styling.
4. **Daisy UI**: Tailwind-based component library for responsive design.


# Dashboard Overview

The dashboard page introduces the products, tables and charts.

![dashboard](https://github.com/user-attachments/assets/85a308a7-e1b2-42cf-b479-f2b6a1af70e5)


```html
    <div
      className={`flex-auto m-5 ${styles.dashBoard}`} >
      <span className={styles.textDark}>Dashboard</span>
      <div className={styles.cardsRow}>
        <CardsView
          amount="40,000"
          desc="Up from yesterday"
          descRate="8.5%"
          green={true}
          icon="../../../images/contactIcon.png"
          title="Total Users" />
      </div>
        <SalesChart />
      <DealsDetailTable />
      <RevenueChart />
      <div className="flex flex-row flex-wrap">
        <RoundedChart />
        <FeaturedProduct/>
        <SalesAnalysisChart />
      </div>
    </div>
```

# Inbox Overview
In inbox page uses email inbox responsive designs
![inbox](https://github.com/user-attachments/assets/1ee6d0f5-3935-4de3-ba7d-12253f568bd2)

```html
 <div>
          {inboxData.map((item, index) => (
            <div
              key={index}
              className="flex flex-row justify-between"
              onClick={() => {
                setSelectedIndex(item);
                if (item.text === "Starred") {
                  setCurrentPage(1);
                }
              }}
              style={{
                cursor: "pointer",
                fontSize: "14px",
                borderRadius: selectedIndex.text === item.text ? "5px" : "0px",
                color:
                  selectedIndex.text === item.text
                    ? "rgb(72,128,255)"
                    : "#202224",
                backgroundColor:
                  selectedIndex.text === item.text
                    ? "rgba(72,128,255,0.2)"
                    : "transparent",
                padding: "10px 10px",
              }}
            >
              <div
                className={`flex flex-row justify-center place-items-center text-center ${
                  windowWidth <= 1050 && "w-full"
                }`}
              >
                <div className="flex text-center">
                  <i
                    className={`fa ${item.icon} ${
                      windowWidth >= 1050 && "mr-3"
                    } `}
                  />
                </div>
                {windowWidth >= 1050 && `${item.text}`}
              </div>
              {windowWidth >= 1400 && (
                <div>
                  {index === 0
                    ? mailData.length.toString()
                    : index === 1
                    ? mailData.filter((mail) => mail.starred).length.toString()
                    : item.desc}
                </div>
              )}
            </div>
          ))}
        </div>
```

# Todo List Overview

Todo list performs add/delete/bookmark oprations

![todo](https://github.com/user-attachments/assets/5a52177b-0afd-41a1-962e-55aed3a23080)

```html
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
                onClick={() => setSelectedIndex(null)}  >
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
```

# Product Stock Overview

The product page has displays the list products with like/dislike functionality.

![productstock](https://github.com/user-attachments/assets/55c78e40-bde1-4881-8b6f-7b45447a83a6)

```html
    <div
      className={`flex-auto m-5 ${styles.product}`}
      style={{
        marginLeft: windowWidth < 1270 ? "90px" : "260px",

        overflowY: "hidden",
        width: "min-content",
        height: "min-content",
      }}
    >
      <span className={styles.textProductDark}>Product Stock</span>
      <div style={{ height: "100vh" }}>
        <ProductsStockTable />
      </div>
    </div>
```



## Folder Structure

```plaintext
├── public/                # Public assets
│   ├── images/            # Static images
│   ├── favicon.ico        # Favicon
│   └── ...
├── src/                   # Source files
│   ├── components/        # Reusable UI components
│   ├── pages/             # Next.js pages (routes)
│   │   ├── dashboard/     # Dashboard module
│   │   ├── products/      # Products management
│   │   ├── orders/        # Order management
│   │   └── ...
│   ├── styles/            # Global and component-specific styles
│   ├── utils/             # Utility functions
│   └── ...
├── .next/                 # Next.js build output
├── .env.local             # Environment variables
├── tailwind.config.js     # Tailwind CSS configuration
├── next.config.js         # Next.js configuration
├── package.json           # Project metadata and dependencies
└── README.md              # Documentation
```



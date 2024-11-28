"use client";
import React, { useEffect, useState } from "react";
import styles from "./SideBarView.module.css";
import useWindowWidth from "@/app/hooks/MediaWidthHooks";
import Link from "next/link";

interface Props {
  title: string;
  icon: string;
  to: string;
}

const SideBarView = () => {
  const listOfSideBar: Props[] = [
    {
      title: "Dashboard",
      icon: "../../../images/dashboard.svg",
      to: "/",
    },
    {
      title: "Products",
      icon: "../../../images/products.svg",
      to: "/products",
    },
    {
      title: "Favourites",
      icon: "../../../images/favourites.svg",
      to: "/favourites",
    },
    {
      title: "Inbox",
      icon: "../../../images/inbox.svg",
      to: "/inbox",
    },
    {
      title: "Order Lists",
      icon: "../../../images/orderlist.svg",
      to: "/orderlist",
    },
    {
      title: "Product Stock",
      icon: "../../../images/productstock.svg",
      to: "/productstock",
    },
    {
      title: "Pricing",
      icon: "../../../images/pricing.svg",
      to: "/pricing",
    },

    {
      title: "To - Do",
      icon: "../../../images/todo.svg",
      to: "/todo",
    },
    {
      title: "Contact",
      icon: "../../../images/contact.svg",
      to: "/contacts",
    },
    {
      title: "Invoice",
      icon: "../../../images/invoice.svg",
      to: "/invoice",
    },

    {
      title: "Team",
      icon: "../../../images/team.svg",
      to: "/team",
    },
    {
      title: "Table",
      icon: "../../../images/table.svg",
      to: "/table",
    },
  ];

  const windowWidth = useWindowWidth();
  const [selectedValue, setSelectedValue] = useState<Props | undefined>();

  useEffect(() => {
    if (window.location.href == "http://localhost:3000/") {
      setSelectedValue(listOfSideBar[0]);
    } else {
      const storedItem = sessionStorage.getItem("currentItem");
      if (storedItem) {
        try {
          const parsedItem = JSON.parse(storedItem) as Props;
          setSelectedValue(parsedItem);
        } catch (e) {
          console.error("Failed to parse stored item", e);
        }
      } else {
        setSelectedValue(listOfSideBar[0]);
      }
    }
  }, []);

  return (
    <div className={`${styles.sideBar}`}>
      {listOfSideBar.map((item, index) => (
        <Link href={item.to} key={index}>
          <div
            className={styles.iconText}
            style={{
              width: windowWidth < 1270 ? "80px" : "250px",
            }}
            onClick={() => {
              setSelectedValue(item);
              sessionStorage.setItem("currentItem", JSON.stringify(item));
            }}
          >
            <div
              className={styles.blueLeft}
              style={{
                visibility:
                  selectedValue?.title === item.title ? "visible" : "hidden",
              }}
            ></div>
            <div
              className={`pt-3 pb-3 ${windowWidth < 1270 ? "pl-3" : "pl-4"} ${
                selectedValue?.title === item.title
                  ? styles.blueContainer
                  : styles.greyContainer
              }`}
            >
              <img src={item.icon} alt={item.title} />
              {windowWidth > 1270 && (
                <div style={{ marginLeft: "10px" }}>{item.title}</div>
              )}
            </div>
          </div>
          {(index === 5 || index === 13) && (
            <hr style={{ marginTop: "10px" }} />
          )}
          {index === 5 && (
            <div
              style={{
                margin: "10px 30px 0px 30px",
                fontSize: "12px",
                color: "grey",
              }}
            >
              PAGES
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};
export default SideBarView;

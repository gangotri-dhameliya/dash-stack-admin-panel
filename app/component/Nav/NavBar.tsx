"use client";
import Image from "next/image";
import styles from "./NavBar.module.css";
import { useState } from "react";
import useWindowWidth from "@/app/hooks/MediaWidthHooks";
import Link from "next/link";
const NavBar = () => {
  const windowWidth = useWindowWidth();

  const [language, setLanguage] = useState("English");

  return (
    <nav className="flex bg-white p-3 fixed top-0 left-0 right-0 z-[1]">
      <div className="flex flex-auto place-items-center">
        {windowWidth > 1005 && (
          <div
            style={{
              fontWeight: 500,
              fontSize: "1.2rem",
              marginRight: "4vw",
              marginLeft: "4vw",
            }}
          >
            <span className="text-blue-600">Dash</span>Stack
          </div>
        )}
        <Image
          src="/images/menu.svg"
          alt="menu Logo"
          className="dark:to-black"
          width={24}
          height={24}
          priority
        />
        {windowWidth > 830 && (
          <div className={`${styles.searchBar}`}>
            <Image
              src="/images/search.svg"
              alt="menu Logo"
              className="dark:to-black mx-2"
              width={18}
              height={18}
              priority
            />
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search"
            />
          </div>
        )}
      </div>
      <div className="flex place-items-center">
        <div className="indicator">
          <span
            className="indicator-item badge badge-secondary"
            style={{
              padding: "1px 4px",
              borderRadius: "50%",
              background: "red",
              fontSize: "12px",
            }}
          >
            6
          </span>
          <Image
            src="/images/notification.png"
            alt="menu Logo"
            className="dark:to-black"
            width={24}
            height={24}
            style={{ width: "24px", height: "24px" }}
            priority
          />
        </div>

        <div className="ml-5 mr-5">
          <form>
            <select
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
              style={{
                outline: "none",
              }}
            >
              <option value="Arabian">
                {"\uD83C\uDDE8\uD83C\uDDE6"} Arabian
              </option>
              <option value="English">
                {"\uD83C\uDDFA\uD83C\uDDF8"} English
              </option>
              <option value="Hindi">{"\ud83c\uddee\ud83c\uddf3"} Hindi</option>
            </select>
          </form>
        </div>

        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} className="flex justify-center place-items-center">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="bubble component"
                  src="https://fastly.picsum.photos/id/171/200/300.jpg?hmac=NHia9vzbBwrKnBFwp7cDZPSxFcVF_VGbnFO5LAjWnuE"
                />
              </div>
            </div>
            <div style={{ margin: "0px 0px 0px 15px" }}>
              <div>Moni Riva</div>
              <div>Admin</div>
            </div>
            <div>
              <svg
                fill="none"
                className={styles.buttonBorder}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="1.2em"
                width="1.2em"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
              {/*up arrow */}
              {/* <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      
    >
      <path d="M18 15l-6-6-6 6" />
    </svg> */}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/signup"}>Sign Up</Link>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

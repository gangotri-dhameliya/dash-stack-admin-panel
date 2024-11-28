"use client";
import useWindowWidth from "@/app/hooks/MediaWidthHooks";
import Link from "next/link";
import { useState } from "react";

export const SignUpView = () => {
  const windowWidth = useWindowWidth();
  const [checked, setChecked] = useState(true || false);

  const handleCheckboxChange = (event: any) => {
    setChecked(event.target.checked);
  };
  return (
    <div
      className="flex flex-auto justify-center"
      style={{
        backgroundImage: "url(../../../images/bluebg.png)",

        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        className="flex flex-col bg-white  place-items-center justify-center my-24"
        style={{
          borderRadius: "20px",
          padding: "4rem 4rem",
          width: windowWidth < 770 ? "90%" : "40rem",
        }}
      >
        <div className="text-3xl">Create an Account</div>
        <div className="text-sm mt-2 mb-10">Create a account to continue</div>
        <label
          className={`form-control w-full  ${
            windowWidth < 770 ? "mb-4" : "mb-0"
          }`}
        >
          <div className="label">
            <span className="label-text">Email address: </span>
          </div>
          <input
            type="text"
            placeholder={"esteban_schiller@gmail.com"}
            className="input input-bordered w-full bg-gray-100 "
          />
        </label>
        <label
          className={`form-control w-full mt-6  ${
            windowWidth < 770 ? "mb-4" : "mb-0"
          }`}
        >
          <div className="label">
            <span className="label-text">Username </span>
          </div>
          <input
            type="text"
            placeholder={"Enter username"}
            className="input input-bordered w-full bg-gray-100 "
          />
        </label>
        <label
          className={`form-control w-full  ${
            windowWidth < 770 ? "mb-4" : "mb-0"
          } mt-6`}
        >
          <div className="label flex flex-row justify-between">
            <span className="label-text">Password: </span>
            <span className="label-text">Forgot Password ?</span>
          </div>
          <input
            type="text"
            placeholder={"Enter password"}
            className="input input-bordered w-full bg-gray-100 "
          />
        </label>
        <label className="w-full mt-3 place-items-center">
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
            style={{
              width: "15px",
              height: "15px",
              marginRight: "8px",
            }}
          />
          <span className="ml-1">I accept terms and conditions</span>
        </label>

        <div
          className="w-full max-w-sm text-center mt-10"
          style={{
            background: "#4880FF",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          Sign Up
        </div>
        <div
          className="mt-2"
          style={{
            fontSize: "16px",
          }}
        >
          Already have an account ?{" "}
          <Link href={"/login"}>
            {" "}
            <span>
              <u
                style={{
                  color: "#4880FF",
                }}
              >
                Login
              </u>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

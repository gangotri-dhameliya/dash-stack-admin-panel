"use client";
import Link from "next/link";
import useWindowWidth from "../hooks/MediaWidthHooks";

export const PageNotFound = () => {
  const windowWidth = useWindowWidth();

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
        className="flex flex-col bg-white  place-items-center justify-center my-32"
        style={{
          borderRadius: "20px",
          padding: "4rem 4rem",
          width: windowWidth < 770 ? "90%" : "40rem",
        }}
      >
        <div className="text-3xl">Login to Account</div>
        <div className="text-sm mt-2 mb-10">
          Please enter your email and password to continue
        </div>

        <div
          className="w-full max-w-sm text-center mt-10"
          style={{
            background: "#4880FF",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          Sign In
        </div>
        <div
          className="mt-2"
          style={{
            fontSize: "16px",
          }}
        >
          Don’t have an account?{" "}
          <Link href={"/signup"}>
            {" "}
            <span>
              <u
                style={{
                  color: "#4880FF",
                }}
              >
                Create Account
              </u>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

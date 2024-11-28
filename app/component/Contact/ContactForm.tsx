import useWindowWidth from "@/app/hooks/MediaWidthHooks";
import { ChangeEvent, useState } from "react";

export const ContactForm = () => {
  const windowWidth = useWindowWidth();

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (typeof fileReader.result === "string") {
          setPreviewUrl(fileReader.result);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`bg-white p-16 ml-7 mt-5`}
      style={{
        width: windowWidth < 770 ? "auto" : "98%",

        borderRadius: "10px",
        border: "1px solid #D5D5D5",
      }}
    >
      {selectedImage === null ? (
        <>
          <label
            htmlFor="fileInput"
            style={{ cursor: "pointer" }}
            className={`      ${
              windowWidth < 770 ? "justify-start" : "justify-center"
            } flex`}
          >
            <i className="fas fa-camera fa-2x bg-gray-100 p-7 rounded-full"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </>
      ) : (
        <div
          className={`avatar ${
            windowWidth < 770 ? "justify-start" : "justify-center"
          } flex`}
        >
          <div className="w-20 rounded-full">
            <img src={previewUrl!} />
          </div>
        </div>
      )}
      <div
        className={`text-blue-500 ${
          windowWidth < 770 ? "justify-start" : "justify-center"
        } flex text-sm mt-2 mb-10`}
      >
        <label htmlFor="editInput" style={{ cursor: "pointer" }}>
          {previewUrl === null ? "Upload Photo" : "Edit Photo"}
        </label>
        <input
          id="editInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </div>

      <div
        className={`flex ${
          windowWidth < 770 ? "flex-col" : "flex-row"
        } justify-center ${windowWidth < 770 ? "mb-0" : "mb-12"}`}
      >
        <TextLable name="First Name" placeHolder="Enter your first name" />
        <div className="ml-16" />
        <TextLable name="Last Name" placeHolder="Enter your last name" />
      </div>
      <div
        className={`flex ${
          windowWidth < 770 ? "flex-col" : "flex-row"
        } justify-center ${windowWidth < 770 ? "mb-0" : "mb-12"}`}
      >
        <TextLable name="Your Email" placeHolder="Enter your email" />
        <div className="ml-16" />
        <TextLable name="Phone Number" placeHolder="Enter your phone number" />
      </div>
      <div
        className={`flex ${
          windowWidth < 770 ? "flex-col" : "flex-row"
        } justify-center ${windowWidth < 770 ? "mb-0" : "mb-12"}`}
      >
        <TextLable name="Date of Birth" placeHolder="Enter your birthdate" />
        <div className="ml-16" />
        <label className="form-control w-full max-w-sm">
          <div className="label">
            <span className="label-text">Gender</span>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 bg-gray-100 ">
              Male
              <svg
                fill="none"
                className="ml-24"
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
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Male</a>
              </li>
              <li>
                <a>Female</a>
              </li>
            </ul>
          </div>
        </label>
      </div>
      <div
        className={`flex flex-auto ${
          windowWidth < 770 ? "justify-start mt-5" : "justify-center"
        }`}
      >
        <button
          className="btn btn-active text-white px-20"
          style={{
            background: "rgba(15, 15, 226, 0.7)",
          }}
        >
          Add Now
        </button>
      </div>
    </div>
  );
};

const TextLable = ({ name, placeHolder }: Props) => {
  const windowWidth = useWindowWidth();

  return (
    <label
      className={`form-control w-full max-w-sm ${
        windowWidth < 770 ? "mb-4" : "mb-0"
      }`}
    >
      <div className="label">
        <span className="label-text">{name}</span>
      </div>
      <input
        type="text"
        placeholder={placeHolder}
        className="input input-bordered w-full bg-gray-100 "
      />
    </label>
  );
};

type Props = {
  name: string;
  placeHolder: string;
};

import useWindowWidth from "@/app/hooks/MediaWidthHooks";
import { useState } from "react";
import styles from "./InboxView.module.css";

interface InboxModel {
  icon: string;
  text: string;
  desc: string;
}

interface MailsModel {
  selected?: boolean;
  starred?: boolean;
  name: string;
  lableType?: string;
  mail: string;
  time: string;
}

export const InboxDetailView = () => {
  const windowWidth = useWindowWidth();

  const mailList: MailsModel[] = [
    {
      name: "Jullu Jalal",
      mail: "Our Bachelor of Commerce program is ACBSP-accredited.",
      lableType: "Primary",
      starred: true,
      time: "8:38 AM",
    },
    {
      name: "John Doe",
      mail: "Reminder: Project deadline approaching.",
      lableType: "Social",
      time: "10:15 AM",
    },
    {
      name: "Alice Smith",
      mail: "Invitation to the annual company retreat.",
      lableType: "Primary",
      time: "1:20 PM",
    },
    {
      name: "Emma Brown",
      mail: "Important: Action required on recent expenses report.",
      lableType: "Primary",
      starred: true,
      time: "3:45 PM",
    },
    {
      name: "Michael Lee",
      mail: "Update: Changes to the team meeting schedule.",
      lableType: "Friends",
      time: "4:50 PM",
    },
    {
      name: "Sarah Johnson",
      mail: "Confirmation: Your order has been shipped.",
      lableType: "Primary",
      time: "5:30 PM",
    },
    {
      name: "David Wilson",
      mail: "Request for proposal: New project initiative.",
      lableType: "Work",
      time: "6:12 PM",
    },
    {
      name: "Emily Taylor",
      mail: "Feedback requested: Customer satisfaction survey.",
      lableType: "Social",
      time: "8:00 PM",
    },
    {
      name: "Robert Anderson",
      mail: "Announcement: Company-wide policy update.",
      lableType: "Primary",

      time: "9:25 PM",
    },
    {
      name: "Olivia Martinez",
      mail: "Reminder: Annual performance reviews next week.",
      lableType: "Friends",
      starred: true,
      time: "10:30 PM",
    },
    {
      name: "Daniel Garcia",
      mail: "Welcome aboard! Your onboarding schedule.",
      lableType: "Primary",
      time: "11:45 PM",
    },
    {
      name: "Sophia Hernandez",
      mail: "Update: Changes to the employee benefits program.",
      lableType: "Social",
      time: "12:55 AM",
    },
    {
      name: "William Lopez",
      mail: "Alert: Unusual activity detected on your account.",
      lableType: "Friends",
      time: "2:10 AM",
    },
    {
      name: "Mia Gonzalez",
      mail: "Reminder: Quarterly sales meeting agenda.",
      lableType: "Work",
      time: "3:30 AM",
    },
    {
      name: "Alexander Perez",
      mail: "Action required: Complete your training modules.",
      lableType: "Primary",
      time: "4:45 AM",
    },
    {
      name: "Charlotte Torres",
      mail: "Update: New features added to the company app.",
      lableType: "Primary",
      time: "6:00 AM",
    },
    {
      name: "Ethan Ramirez",
      mail: "Request for information: Market research data.",
      lableType: "Friends",
      time: "7:15 AM",
    },
    {
      name: "Ava Flores",
      mail: "Invitation: Annual company holiday party.",
      lableType: "Work",
      time: "8:30 AM",
    },
    {
      name: "Noah Gonzales",
      starred: true,
      mail: "Reminder: Submit your expense reimbursement form.",
      lableType: "Social",
      time: "9:45 AM",
    },
    {
      name: "Isabella Rivera",
      mail: "Update: New IT security protocols implemented.",
      lableType: "Primary",

      time: "10:55 AM",
    },
    {
      name: "Daniel Garcia",
      mail: "Welcome aboard! Your onboarding schedule.",
      lableType: "Primary",
      time: "11:45 PM",
    },
  ];

  const [mailData, setMailList] = useState<MailsModel[]>(mailList);
  const inboxData: InboxModel[] = [
    {
      desc: "1253",
      icon: "fa-inbox",
      text: "Inbox",
    },
    {
      desc: "245",
      icon: "fa-star",
      text: "Starred",
    },
    {
      desc: "24,532",
      icon: "fa-envelope",
      text: "Sent",
    },
    {
      desc: "09",
      icon: "fa-file-alt",
      text: "Draft",
    },
    {
      desc: "14",
      icon: "fa-ban",
      text: "Spam",
    },
    {
      desc: "18",
      icon: "fa-exclamation-circle",
      text: "Important",
    },
    {
      desc: "09",
      icon: "fa-trash-alt",
      text: "Bin",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [selectedIndex, setSelectedIndex] = useState<InboxModel>(inboxData[0]);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const filteredItems =
    selectedIndex.text === "Starred"
      ? mailData.filter((mail) => mail.starred)
      : mailData;
  const displayedItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage * itemsPerPage < filteredItems.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleFav = (item: MailsModel) => {
    const updatedProducts = mailData.map((mail) =>
      mail === item ? { ...mail, starred: !mail.starred } : mail
    );
    setMailList(updatedProducts);
  };

  const handleSelection = (item: MailsModel) => {
    const updatedProducts = mailData.map((mail) =>
      mail === item ? { ...mail, selected: !mail.selected } : mail
    );
    setMailList(updatedProducts);
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDelete = () => {
    const updatedMailList = mailData.filter((mail) => !mail.selected);
    setMailList(updatedMailList);
  };

  return (
    <div
      className="flex flow-row"
      style={{
        height: "80vh",
        overflowX: "hidden",
        marginLeft: "20px",
        marginTop: "20px",
      }}
    >
      <div
        className="bg-white"
        style={{
          padding: "20px",
          width: "18vw",
          minWidth: "100px",
          overflowY: "auto",
          height: "100%",
          borderRadius: "20px",
          border: "1px solid lightgrey",
        }}
      >
        <div
          style={{
            padding: "10px 0px",
            borderRadius: "8px",
            backgroundColor: "#4880FF",
            color: "white",
            textAlign: "center",
          }}
        >
          <i className="fas fa-plus mr-2"></i>
          {windowWidth >= 1060 && "Compose"}
        </div>
        <div className="mt-3 mb-2">My Email</div>
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
        <div className="mt-4 mb-2">Label</div>
        <CommonContainer
          text={windowWidth >= 970 ? "Primary" : ""}
          color="green"
        />
        <CommonContainer
          text={windowWidth >= 970 ? "Social" : ""}
          color="blue"
        />
        <CommonContainer
          text={windowWidth >= 970 ? "Work" : ""}
          color="orange"
        />
        <CommonContainer
          text={windowWidth >= 970 ? "Friends" : ""}
          color="purple"
        />
        <div
          style={{
            marginTop: "10px",
            color: "grey",
            fontSize: "14px",
          }}
        >
          <i
            className={`fas fa-plus mr-2 text-center ${
              windowWidth <= 970 && "w-full"
            }`}
          ></i>
          {windowWidth >= 970 && (
            <span className="text-center">Create New Label</span>
          )}
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div
          className="bg-white"
          style={{
            height: "93.5%",

            overflowY: "auto",
            marginLeft: "20px",
            borderRadius: "20px",
            border: "1px solid lightgrey",
          }}
        >
          <div
            className="flex flex-row justify-between"
            style={{ padding: "20px 10px" }}
          >
            {windowWidth >= 660 && (
              <div className={`${styles.searchBar}`}>
                <img
                  src="/images/search.svg"
                  alt="menu Logo"
                  className="dark:to-black mx-2"
                  width={18}
                  height={18}
                />

                <input
                  className={styles.searchInput}
                  type="text"
                  placeholder="Search mail"
                />
              </div>
            )}
            <div
              className="flex flex-row place-items-center justify-items-center"
              style={{
                fontSize: "16px",
                background: "rgba(151,151,151,0.08)",
                padding: "0px 10px",
                borderRadius: "8px",
                border: "1px solid lightgrey",
              }}
            >
              <i
                className="fas fa-archive"
                style={{
                  fontSize: "16px",
                  height: "100%",
                  paddingRight: "10px",
                  placeContent: "center",
                  borderRight: "1px solid lightgrey",
                }}
              />
              <i
                className="fa fa-exclamation-circle"
                style={{
                  height: "100%",
                  fontSize: "16px",
                  padding: "0px 10px",
                  placeContent: "center",
                  borderRight: "1px solid lightgrey",
                }}
              />
              <i
                className="fa fa-trash-alt"
                style={{
                  paddingLeft: "10px",
                  paddingTop: "8px",
                  paddingBlock: "8px",
                }}
                onClick={handleDelete}
              />
            </div>
          </div>
          <div>
            {displayedItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col"
                style={{
                  backgroundColor:
                    item.selected === true
                      ? "rgba(90,140,255,0.1)"
                      : "transparent",
                }}
              >
                <div className="flex flex-row justify-between my-4 px-4">
                  <div className="flex flex-row place-items-center">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "18px",
                        height: "18px",
                        border: "1px solid grey",
                        borderRadius: "3px",
                        marginRight: "20px",
                        background: item.selected ? "black" : "transparent",
                        cursor: "pointer",
                      }}
                      onClick={() => handleSelection(item)}
                    >
                      <i
                        className="fas fa-check"
                        style={{
                          visibility: item.selected ? "visible" : "hidden",
                          color: item.selected ? "white" : "grey",
                        }}
                      ></i>
                    </div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => handleFav(item)}
                      style={{ cursor: "pointer" }}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.8401 1.51507L18.7064 9.175L26.148 9.91222C26.5097 9.94228 26.8209 10.18 26.945 10.5211C27.0692 10.8622 26.9835 11.2444 26.7257 11.4999L20.6015 17.5698L22.8721 25.8179C22.967 26.1753 22.8434 26.5551 22.5564 26.7882C22.2694 27.0213 21.8724 27.0644 21.5421 26.8983L13.9977 23.1625L6.4637 26.8937C6.13337 27.0598 5.73633 27.0167 5.44934 26.7836C5.16236 26.5504 5.03881 26.1707 5.1337 25.8133L7.4043 17.5652L1.27543 11.4953C1.01761 11.2398 0.931977 10.8576 1.05611 10.5165C1.18023 10.1754 1.49144 9.93766 1.85319 9.90759L9.29472 9.17037L13.1553 1.51507C13.3172 1.1989 13.6425 1 13.9977 1C14.3529 1 14.6782 1.1989 14.8401 1.51507Z"
                        fill={item.starred === true ? `#FFD56D` : ""}
                        stroke={item.starred === true ? "" : `grey`}
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        maxLines: "2",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        marginLeft: "20px",
                      }}
                    >
                      {item.name}
                    </div>
                  </div>

                  {windowWidth >= 1010 && (
                    <div
                      className="text-sm place-self-center"
                      style={{
                        marginLeft: "30px",
                        alignContent: "center",

                        borderRadius: "3px",
                        textAlign: "center",
                        height: "30px",
                        padding: "0px 10px",
                        background:
                          item.lableType === "Primary"
                            ? "rgba(0,182,155,0.3)"
                            : item.lableType === "Social"
                            ? "rgba(90,140,255,0.3)"
                            : item.lableType === "Work"
                            ? "rgba(253,154,86,0.3)"
                            : "rgba(212,86,253,0.3)",

                        color:
                          item.lableType === "Primary"
                            ? "rgb(0,182,155)"
                            : item.lableType === "Social"
                            ? "rgb(90,140,255)"
                            : item.lableType === "Work"
                            ? "rgb(253,154,86)"
                            : "rgb(212,86,253)",
                      }}
                    >
                      <span>{item.lableType}</span>
                    </div>
                  )}
                  <div
                    className="flex-auto"
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "grey",
                      maxLines: 2,
                      whiteSpace: "nowrap",
                      overflow: "hiddden",
                      textOverflow: "ellipsis",
                      marginLeft: "20px",
                      maxWidth: "70%",

                      textAlign: "start",
                    }}
                  >
                    <div>{item.mail}</div>
                    <div>
                      {windowWidth < 1085 && (
                        <div style={{ fontSize: "14px", color: "grey" }}>
                          {item.time}
                        </div>
                      )}
                    </div>
                  </div>
                  {windowWidth >= 1085 && (
                    <div style={{ fontSize: "14px", color: "grey" }}>
                      {item.time}
                    </div>
                  )}
                </div>
                <hr className="w-full" />
              </div>
            ))}
          </div>
        </div>
        <div className="ml-6 text-sm text-gray-600 mt-4 flex flex-row justify-between">
          <div>
            Showing {startIndex + 1} -{" "}
            {Math.min(startIndex + itemsPerPage, filteredItems.length)} of{" "}
            {selectedIndex.text === "Inbox"
              ? mailData.length.toString()
              : mailData.filter((mail) => mail.starred).length.toString()}
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
                  currentPage * itemsPerPage < filteredItems.length
                    ? "black"
                    : "grey",
                padding: "8px 14px",
                cursor:
                  currentPage * itemsPerPage < filteredItems.length
                    ? "pointer"
                    : "not-allowed",
              }}
              onClick={handleNextPage}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
const CommonContainer = ({ text, color }: any) => {
  const windowWidth = useWindowWidth();

  return (
    <div
      className={`flex flex-row place-items-center  ${
        windowWidth <= 970 && "w-full justify-center"
      }`}
      style={{
        cursor: "pointer",
        margin: "20px 0px",
        fontSize: "14px",
      }}
    >
      <div
        className="mr-2"
        style={{
          width: "18px",
          height: "18px",
          border: `2px solid ${color}`,
          borderRadius: "3px",
        }}
      />
      {text}
    </div>
  );
};

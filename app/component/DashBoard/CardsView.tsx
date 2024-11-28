import styles from "./DashBoard.module.css";

interface Props {
  title: string;
  amount: string;
  descRate: string;
  icon: string;
  desc: string;
  green: false | true;
}

const CardsView = ({ title,icon, amount, desc, descRate, green = false }: Props) => {
  return (
    <div className={styles.cards}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <div>
          <div>{title}</div>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "600",
              margin: "10px 0px",
            }}
          >
            {amount}
          </div>
        </div>
        <img
          src={icon}
          style={{ width: "60px", height: "60px" }}
        ></img>
      </div>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>
        <img
          src={
            green
              ? "../../../images/greenicon.svg"
              : "../../../images/redicon.svg"
          }
          style={{ marginRight: "5px" }}
        ></img>
        <span>
          <span className={green ? "text-green-600" : "text-red-600"}>
            {descRate}
          </span>{" "}
          {desc}
        </span>
      </div>
    </div>
  );
};

export default CardsView;

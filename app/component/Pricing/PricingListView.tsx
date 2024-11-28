import { useState } from "react";

interface PriceModel {
  planName: string;
  price: string;
  planList: PlanInfo[];
}

interface PlanInfo {
  planText: string;
  available?: boolean;
}
export const PricingListView = () => {
  const priceData: PriceModel[] = [
    {
      planName: "Basic",
      planList: [
        { planText: "Free Setup" },
        { planText: "Bandwidth Limit 10 GB" },
        { planText: "20 User Connection" },
        { planText: "Analytics Report", available: false },
        { planText: "Public API Access", available: false },
        { planText: "Plugins Intregation", available: false },
        { planText: "Custom Content Management", available: false },
      ],
      price: "$14.99",
    },
    {
      planName: "Standard",
      planList: [
        { planText: "Free Setup" },
        { planText: "Bandwidth Limit 10 GB" },
        { planText: "20 User Connection" },
        { planText: "Analytics Report" },
        { planText: "Public API Access" },
        { planText: "Plugins Intregation", available: false },
        { planText: "Custom Content Management", available: false },
      ],
      price: "$49.99",
    },
    {
      planName: "Premium",
      planList: [
        { planText: "Free Setup" },
        { planText: "Bandwidth Limit 10 GB" },
        { planText: "20 User Connection" },
        { planText: "Analytics Report" },
        { planText: "Public API Access" },
        { planText: "Plugins Intregation" },
        { planText: "Custom Content Management" },
      ],
      price: "$89.99",
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState<PriceModel>(priceData[2]);

  return (
    <div
      style={{
        marginLeft: "20px",
        marginTop: "20px",
      }}
    >
      <div className="flex flex-wrap w-full justify-center">
        {priceData.map((item, index) => (
          <div
            className="flex flex-col w-auto mx-5 mb-5 place-items-center"
            key={index}
            style={{
              backgroundImage: `url(../../../pricing.png)`,
              backgroundSize: "cover",
              borderRadius: "15px",
              backgroundRepeat: "no-repeat",
              padding: "30px 50px",
            }}
          >
            <span
              style={{
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              {item.planName}
            </span>
            <span style={{ color: "grey" }}>Monthly Charge</span>
            <span
              style={{
                fontSize: "46px",
                fontWeight: "bold",
                color: "rgba(15, 15, 226, 0.7)",
              }}
            >
              {item.price}
            </span>
            <div
              className="my-8"
              style={{
                background: "lightgrey",
                height: "2px",
                width: "100%",
              }}
            />
            <div className="flex flex-col w-full m-2 place-items-center">
              {item.planList.map((items, i) => (
                <div
                  key={i}
                  className="py-3"
                  style={{
                    color: items.available === false ? "#C0C0C0" : "black",
                  }}
                >
                  {items.planText}
                </div>
              ))}
            </div>
            <div
              className="my-8"
              style={{
                background: "lightgrey",
                height: "2px",
                width: "100%",
              }}
            />
            <div
              style={{
                cursor: "pointer",
                background:
                  selectedPlan.planName === item.planName
                    ? "rgba(15, 15, 226, 0.7)"
                    : "white",
                border: "1px solid rgba(15, 15, 226, 0.7)",
                color:
                  selectedPlan.planName === item.planName
                    ? "white"
                    : "rgba(15, 15, 226, 0.7)",
                borderRadius: "40px",
                padding: "18px 40px",
              }}
              onClick={() => {
                setSelectedPlan(item);
                console.log(selectedPlan.planName, item.planName);
              }}
            >
              Get Started
            </div>
            <span className="mt-3">
              <u>Start Your 30 Day Free Trial</u>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

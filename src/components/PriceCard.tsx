import { ReactElement } from "react";

interface PropsType {
  color: "green" | "blue";
  pricing: string;
  planType: "Basic" | "Premium";
  children: ReactElement<HTMLLIElement>[];
}

const PricingCard = ({ color, pricing, planType, children }: PropsType) => {
  return (
    <div className={`pricing-card ${color}`}>
      <h2>{planType} Plan</h2>
      <h3>Commands Included</h3>
      <ul>{children}</ul>
      <a href="#go-premium">{pricing}</a>
    </div>
  );
};

export default PricingCard;

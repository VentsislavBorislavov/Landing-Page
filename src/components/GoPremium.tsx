import React from "react";
import PricingCard from "./PriceCard";

const GoPremium = () => {
  return (
    <section id="go-premium">
      <PricingCard color="blue" planType="Basic" pricing="Free">
        <li>Help</li>
        <li>Weather</li>
        <li>Repeat</li>
      </PricingCard>
      <PricingCard color="green" planType="Premium" pricing="$1/year">
        <li>Help</li>
        <li>Weather</li>
        <li>Repeat</li>
        <li>Delete</li>
      </PricingCard>
    </section>
  );
};

export default GoPremium;

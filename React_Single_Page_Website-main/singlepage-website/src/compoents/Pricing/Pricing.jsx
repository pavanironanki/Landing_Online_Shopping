import React from "react";
import { Button } from "../../GlobalStyles";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond,GiShop,GiShoppingCart,GiShoppingBag, GiRock } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.element";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiShop/>
                </PricingCardIcon>
                <PricingCardPlan>Online ordering</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>100 New Users</PricingCardFeature>
                  <PricingCardFeature>Rs.10,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Hasle Free Shoping</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Shop Now</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiShoppingCart />
                </PricingCardIcon>
                <PricingCardPlan>In-Store Pick Up</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>1000 New Users</PricingCardFeature>
                  <PricingCardFeature>Rs.50,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Best Brands</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Shop Now</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiShoppingBag />
                </PricingCardIcon>
                <PricingCardPlan>EBT Accepted</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited Users</PricingCardFeature>
                  <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Shop Now</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;

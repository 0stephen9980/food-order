import React from "react";
import Cards from "./reusableComponents/Cards";

const HeadLineCards = () => {
  return (
    <div className="max-w-[1600px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Cards */}
      <Cards
        mainText="Sun's out, BreakFast ready"
        secondaryText="Morning bites"
        buttonText="Order Now"
        imgUrl="https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <Cards
        mainText="New restaurents"
        secondaryText="Pick your restaurents"
        buttonText="Order Now"
        imgUrl="https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <Cards
        mainText="We deliver stakes too"
        secondaryText="Tasty treats"
        buttonText="Order Now"
        imgUrl="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
    </div>
  );
};

export default HeadLineCards;

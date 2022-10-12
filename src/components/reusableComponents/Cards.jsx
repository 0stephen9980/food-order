import React from "react";

const Cards = ({ mainText, secondaryText, buttonText, imgUrl }) => {
  return (
    <div className="rounded-xl relative cursor-pointer">
      {/* Overlay */}
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="text-2xl font-bold px-2 pt-4">{mainText}</p>
        <p className="px-2">{secondaryText}</p>
        <button className="border-white bg-white text-black mx-2 absolute bottom-4">
          {buttonText}
        </button>
      </div>
      <img
        className="max-h-[160px] md:max-h-[150px] xl:max-h-[200px] w-full object-cover rounded-xl"
        src={imgUrl}
        alt="/"
      />
    </div>
  );
};

export default Cards;

import React from "react";
import Stories from "./Stories";

const sunsets = [
  {
    name: "Golden Horizon",
    description:
      "A breathtaking sight as the sun dips below the horizon, painting the sky in hues of gold and amber.",
    src: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/63000/63724-White-Mountains-Area.jpg",
    key: "1",
  },
  {
    name: "Twilight Serenity",
    description:
      "Nature's masterpiece unfolds, casting a serene tranquility as dusk falls upon the land.",
    src: "https://www.jimsalge.com/img-get/I000029Oc.O3qhUs/s/880/880/Lakes-of-the-Clouds-From-Mount-Washington.jpg",
    key: "2",
  },
  {
    name: "Crimson Embrace",
    description:
      "A fiery embrace of crimson and orange, the sun's farewell kiss to the day, igniting the evening sky.",
    src: "https://png.pngtree.com/background/20230530/original/pngtree-white-mountain-peak-at-sunset-picture-image_2791567.jpg",
    key: "3",
  },
];

const MarketStories = () => {
  return (
    <section className="w-full text-2xl flex flex-col justify-center items-center mt-2 gap-4">
      <h3 className="text-red-600 font-bold ">MARKET STORIES</h3>
      <div className="flex flex-col justify-center items-center w-full gap-4">
        {sunsets.map((item) => (
          <Stories key={item.key} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MarketStories;

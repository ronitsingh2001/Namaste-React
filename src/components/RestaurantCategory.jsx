import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 shadow-lg bg-gray-100">
        <div className="flex justify-between cursor-pointer border border-[#999] p-4 rounded-t-lg" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems ? <ItemsList items={data.itemCards} /> : <></>}
      </div>
    </div>
  );
};
export default RestaurantCategory;

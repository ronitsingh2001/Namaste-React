import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemsList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li
          key={item?.card?.info?.id}
          className="p-4 m-2 border-b-2 flex justify-between"
        >
          <div className="w-9/12">
            <div>
              <span className="py-2 font-semibold">
                {item?.card?.info?.name}
              </span>
              <span className="font-semibold">
                {" "}
                - ₹
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100}
              </span>
            </div>
            <div>
              <span>{item?.card?.info?.description}</span>
            </div>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 bg-black text-white shadow-lg rounded-sm">
                Add +
              </button>
            </div>
            <img
              className="w-full"
              src={CDN_URL + item?.card?.info?.imageId}
              alt=""
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;

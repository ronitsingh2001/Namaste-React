import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = ({ restaurantId }) => {
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);

  if (resData === null) {
    return <Shimmer />;
  }

  const res = resData?.data?.cards[2]?.card?.card?.info;

  const resInfo =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  return (
    <div className="menu">
      <h1>{res.name}</h1>
      <p>
        {res.cuisines.join(", ")} - {res.costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {resInfo.map((res) => (
          <li key={res?.card?.info?.id}>
            {res?.card?.info?.name} - $
            {(res?.card?.info?.price || res?.card?.info?.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;

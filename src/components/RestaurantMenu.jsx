import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = ({ restaurantId }) => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [res, setRes] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const jsonData = await data.json();

    setResInfo(
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    );
    console.log(
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    );
    setRes(jsonData?.data?.cards[2]?.card?.card?.info);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (resInfo === null) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <h1>{res.name}</h1>
      <p>
        {res.cuisines.join(", ")} - {res.costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {resInfo.map((res) => (
          <li key={res?.card?.info?.id}>{res?.card?.info?.name} - ${(res?.card?.info?.price || res?.card?.info?.defaultPrice) / 100}</li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = ({ restaurantId }) => {
  const [showIndex, SetShowIndex] = useState([0]);
  const { resId } = useParams();
  
  const handleClick = (index) =>{
    if(showIndex.includes(index)){
      SetShowIndex(showIndex.filter(res => res !== index))
    }else{
      SetShowIndex([...showIndex, index])
    }
  }

  const resData = useRestaurantMenu(resId);

  if (resData === null) {
    return <Shimmer />;
  }

  const res = resData?.data?.cards[2]?.card?.card?.info;

  const categories =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (res) =>
        res?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="menu">
      <h1 className="font-bold text-center my-6 text-2xl">{res.name}</h1>
      <p className="font-bold text-center text-lg">
        {res.cuisines.join(", ")} - {res.costForTwoMessage}
      </p>
      {/* Category accordian  */}
      {
        categories.map((res, index)=>(
          // Controlled component
          <RestaurantCategory key={res.card.card.title} data={res.card.card} showItems={showIndex.includes(index)} setShowIndex={()=>handleClick(index)} />
        ))
      }
    </div>
  );
};
export default RestaurantMenu;

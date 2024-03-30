import { useState } from "react";
import RestaurantCard, { withRecommendedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const RestaurantCardRecommended = withRecommendedLabel(RestaurantCard);

  let listOfRestaurant = useRestaurantList();
  listOfRestaurant = listOfRestaurant?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  ?.restaurants ?? [];
  const onlineStatus = useOnlineStatus();

  if (listOfRestaurant?.length === 0) {
    return <Shimmer />;
  }

  if (!onlineStatus)
    return (
      <h1 className="font-bold text-xl p-4">
        Looks like you're offline! Please check your internet connection.
      </h1>
    );

  return (
    <div className="body">
      <div className="flex">
        <div className="search ps-5">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-200 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              if (filteredList.length === 0) {
                setFilteredRestaurants(null);
              } else {
                setFilteredRestaurants(filteredList);
              }
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="px-4 py-1 bg-gray-300 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.2
              );
              if (filteredList.length === 0) {
                setFilteredRestaurants(null);
              } else {
                setFilteredRestaurants(filteredList);
              }
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-container flex flex-wrap border rounded-lg m-4">
        {filteredRestaurants === null ? (
          <h1 className="text-2xl font-bold p-4">No result found!</h1>
        ) : (
          (filteredRestaurants.length !== 0
            ? filteredRestaurants
            : listOfRestaurant
          ).map((res) => (
            <Link
              key={res.info.id}
              className="link"
              to={"restaurant/" + res.info.id}
            >
              {res?.info?.avgRating > 4.3 ? (
                <RestaurantCardRecommended resData={res} />
              ) : (
                <RestaurantCard resData={res} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;

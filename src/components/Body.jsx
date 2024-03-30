import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import RESTAURANT_URL from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_URL);
    const jsonData = await data.json();
    setListOfRestaurant(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <h1>Looks like you're offline! Please check your internet connection.</h1>
    );

  return filteredRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
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
              }else{
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
          filteredRestaurants.map((res) => (
            <Link
              key={res.info.id}
              className="link"
              to={"restaurant/" + res.info.id}
            >
              <RestaurantCard resData={res} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;

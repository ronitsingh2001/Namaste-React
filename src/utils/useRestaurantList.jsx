import { useState, useEffect } from "react";
import RESTAURANT_URL from "./constants";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_URL);
    const jsonData = await data.json();
    setListOfRestaurants(jsonData);
  };
  return listOfRestaurants;
};

export default useRestaurantList;

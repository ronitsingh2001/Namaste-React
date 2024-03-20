import { useEffect } from "react";

const RestaurantMenu = () => {

    // const fetchMenu = asyns() =>{
    //     const data = await fetch()
    // }

  useEffect(() => {

  }, []);

  return (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Burger</li>
        <li>Pizza</li>
        <li>Cold Drinks</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;

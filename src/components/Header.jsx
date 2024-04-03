import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store?.cart?.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-50 sm:bg-yellow-100 lg:bg-yellow-200 shadow-lg mb-2">
      <div className="w-36">
        <Link to="/">
          <img className="logo" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 space-x-4">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="font-bold text-xl relative pe-4">
            <Link to="/cart">
              Cart{" "}
              <span className="text-sm absolute ps-1 pt-1/2">
                ({cartItems?.length})
              </span>
            </Link>
          </li>
          <button
            className="login_btn"
            onClick={() => {
              setBtnNameReact(btnNameReact == "Logout" ? "Login" : "Logout");
            }}
          >
            {btnNameReact}
          </button>
          <li>
            <Link to="/cart">{loggedInUser}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

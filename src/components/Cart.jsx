import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart?.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="p-4 m-4">
      <h1 className="text-center font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItem?.length === 0 ? (
          <h1 className="text-xl bg-red-200 p-4 m-4 rounded-md font-bold">Cart is empty!</h1>
        ) : (
          <>
            <div className="text-center">
              <button
                className="m-2 p-2 bg-black text-white rounded-lg"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
            <ItemsList items={cartItem} />
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

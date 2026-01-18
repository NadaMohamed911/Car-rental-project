import { useEffect, useState } from "react";
import { getCart, removeFromCart } from "../services/CartService";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleRemove = (id: number) => {
    removeFromCart(id);
    setCart(getCart());
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.days,
    0
  );

  return <>

        <Link to="/cars" className="text-blue mb-4 inline-block">
        Back to Cars
      </Link>


  
   <div className="max-w-5xl mx-auto px-6 mt-10 text-winter">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div>
                <h2 className="font-bold">{item.name}</h2>
                <p>{item.price}$ / day</p>
              </div>

              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          <h2 className="text-xl font-bold mt-6">
            Total: {total}$
          </h2>

          <button
            onClick={() => navigate('/booking')}
            className='mt-4 bg-blue px-6 py-2 rounded hover:bg-blue_dark'
          >
            Proceed to Booking
          </button>
        </>
      )}
    </div>
  
  
  
  
  
  
  
  
  </>
};

export default Cart;
import { clearCart } from "../services/CartService";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();

  const handleConfirmBooking = () => {
    alert(" Booking completed successfull");
    clearCart();
    navigate("/cars");
  };

  return <>
  
  
   <div className="max-w-4xl mx-auto px-6 mt-16 text-winter">
      <h1 className="text-3xl font-bold mb-4">
        Confirm Your Booking
      </h1>

      <p className="mb-6">
        Please confirm your booking to complete the process
      </p>

      <button
        onClick={handleConfirmBooking}
        className="bg-blue px-6 py-2 rounded hover:bg-blue_dark"
      >
        Confirm Booking
      </button>
    </div>
  
  
  </>
};

export default Booking;
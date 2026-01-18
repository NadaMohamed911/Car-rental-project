
import React from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../services/CartService";



interface CarCardProps {
  image: string;
  name: string;
  price: number;
  id: number;
  onDelete: (id: number) => void
}


const CarCard: React.FC<CarCardProps> = ({ image, name, price, id, onDelete }) => {
  return (
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 mt-5">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 ">
        <h3 className="text-lg font-bold mb-2 text-amber-50">{name}</h3>
        <p className="text-blue font-bold mb-3">{price}$ / day</p>

        <Link to={`/cars/${id}`} className="block text-center w-full bg-blue text-winter py-2 rounded hover:bg-blue_dark">

          👀 View Details

        </Link>


        <Link to={`/cars/${id}/edit`} className="  text-winter px-10 py-1 border  mt-9 ms-17 me-5 rounded hover:bg-green-600 ">

          🖋  Edit

        </Link>


        <button
          onClick={() => onDelete(id)}
          className="border border-red-500 text-red-500 px-10 py-1 rounded hover:bg-red-500 hover:text-white mt-3" >
          ⛔  Delete
        </button>


        <button
          onClick={() => addToCart({ id, name, price, image })}
          className="w-full bg-neutral-700 text-white py-2 rounded mt-2 hover:bg-neutral-900"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default CarCard;
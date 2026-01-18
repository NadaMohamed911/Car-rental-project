import { deleteCar } from "../../services/carServices";



type Props = {
  car: any;
  onDelete: (id: number) => void;
};

const CarCard = ({ car, onDelete }: Props) => {

  const handleDelete = async () => {
    try {
      await deleteCar(car.id);
      onDelete(car.id); // نشيلها من الواجهة
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  return (
    <div className="border p-4 rounded">
      <h3>{car.name}</h3>

      <button
        onClick={handleDelete}
        className="mt-3 border border-red-500 text-red-500 
                   px-4 py-1 rounded
                   hover:bg-red-500 hover:text-white
                   transition"
      >
        Delete
      </button>
    </div>
  );
};

export default CarCard;
import { useEffect, useState } from "react";
import CarCard from "../components/CarCard/CarCard";
import { apiFetch } from "../services/api";
import { Link } from 'react-router-dom';



interface Car {
    id: number;
    name: string;
    price_per_day: number;
    image: string;
}

const Car = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiFetch("/cars")



            .then((data) => {
                setCars(data.data || data);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);




    const [SearchName, setSearchName] = useState('');






    const handleDelete = async (id: number) => {
        try {
            await apiFetch(`/cars/${id}`, {
                method: "DELETE",
            });


            setCars((prev) => prev.filter((car) => car.id !== id));
            alert('Car deleted successfull')


        } catch (error) {
            alert('Failed to delete car')
        }
    };



    if (loading) return <p className="text-amber-50">Loading....</p>;
    


    const filteredCars = cars.filter((car) =>
        car.name.toLowerCase().includes(SearchName.toLowerCase())
    );







    return <>
    
 

      <div>

            <input
                type="text"
                placeholder="Search by name"
                value={SearchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="w-full mb-6 p-2 rounded bg-primary_dark border border-blue text-winter"
            />


            <h1 className="text-2xl font-bold mb-6">Available Cars</h1>


            <Link
                to="/admin/add-car"
                className="bg-blue text-black px-4 py-2 rounded hover:bg-blue_dark hover:text-amber-50"
            >
                ➕ Add Car
            </Link>



            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                    <CarCard
                        key={car.id}
                        image={car.image}
                        name={car.name}
                        price={car.price_per_day}
                        id={car.id}
                        onDelete={handleDelete}
                    />
                ))}
            </div>





        </div>
    
    
    </>
};

export default Car;
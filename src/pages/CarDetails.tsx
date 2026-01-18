import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { apiFetch } from "../services/api";
import { Car } from "lucide-react";

interface Car {
    id: number;
    name: string;
    brand: string;
    model: string;
    description: string;
    price_per_day: number;
    image: string;
    year: number;
    location: string;
}

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState<Car | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiFetch(`/cars/${id}`)
            .then((data) => setCar(data))
            .catch(() => alert("Failed to load car details"))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <p className="text-winter">Loading...</p>;
    }

    if (!car) {
        return <p className="text-red-500">Car not found</p>;
    }

    return <>
    
    
        <div className="max-w-4xl mx-auto mt-10 text-winter">

            <Link to="/cars" className="text-blue mb-4 inline-block">
                Back to Cars
            </Link>


            <div className="bg-primary_dark rounded-xl overflow-hidden shadow-lg">
                <img
                    src={car.image}
                    alt={car.name}
                    className="w-full  object-cover"
                />

                <div className="p-6 ">
                    <h1 className="text-3xl font-bold mb-4 text-red-900">{car.name}</h1>

                    <p className="mb-2">
                        <span className="font-semibold">Brand:</span> {car.brand}
                    </p>

                    <p className="mb-2">
                        <span className="font-semibold">Model:</span> {car.model}
                    </p>

                    <p className="mb-2">
                        <span className="font-semibold">Year:</span> {car.year}
                    </p>

                    <p className="mb-2">
                        <span className="font-semibold">Location:</span> {car.location}
                    </p>

                    <p className="mb-4 text-red-600"> <span className="font-semibold text-amber-50">Description:</span>  {car.description ||'No description'}
                    </p>

                    <p className="text-2xl font-bold text-blue">
                        {car.price_per_day}$ / day
                    </p>
                </div>
            </div>
        </div>
    
    
    </>
};

export default CarDetails;
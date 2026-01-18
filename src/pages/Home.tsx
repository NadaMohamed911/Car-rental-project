import { useEffect, useState } from "react";
import { apiFetch } from "../services/api";
import CarCard from "../components/CarCard/CarCard";
import { Link } from "react-router";


const Home = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        apiFetch("/cars")
            .then((data) => {
                setCars(data.slice(0, 4));
            })
            .catch(console.log);
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-6 mt-10 ">

            <h1 className="text-3xl font-bold text-winter mb-6">
                Featured Cars
            </h1>

            <Link to="/cars" className="text-blue mb-4 inline-block">
                Back to Cars
            </Link>

            <div className="grid grid-cols-1  lg:grid-cols-2 gap-7">
                {cars.map((car: any) => (
                    <CarCard
                        key={car.id}
                        id={car.id}
                        image={car.image}
                        name={car.name}
                        price={car.price_per_day}
                        onDelete={() => { }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
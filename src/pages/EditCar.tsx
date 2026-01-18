import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { apiFetch } from "../services/api";

const EditCar = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        model: '',
        description: '',
        price_per_day: '',
        image: '',
    });

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        apiFetch(`/cars/${id}`)
            .then((data) => {
                setFormData({
                    name: data.name || '',
                    brand: data.brand || '',
                    model: data.model || '',
                    description: data.description || '',
                    price_per_day: data.price_per_day || '',
                    image: data.image || '',
                });
            })
            .finally(() => setLoading(false));
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };







    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await apiFetch(`/cars/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            alert("Car updated successfull");
            navigate(`/cars/${id}`);
        } catch {
            alert("Failed to update car ");
        }
    };

    if (loading) return <p className="text-winter">Loading...</p>;

    return <>
    
    
       <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 bg-black p-6 rounded-xl">


          <Link to="/cars" className="text-blue mb-4 inline-block">
                Back to Cars
            </Link>


            <h1 className="text-2xl font-bold mb-6">Edit Car</h1>



            <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="input w-full p-2 border rounded" />
            <input name="brand" value={formData.brand} onChange={handleChange} placeholder="Brand" className="input w-full p-2 border rounded" />
            <input name="model" value={formData.model} onChange={handleChange} placeholder="Model" className="input w-full p-2 border rounded" />
            <input name="price_per_day" value={formData.price_per_day} onChange={handleChange} placeholder="Price" className="input w-full p-2 border rounded" />
            <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="input w-full p-2 border rounded" />

            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="input h-28 w-full p-2 border rounded"
            />

            <button className="w-full bg-blue py-2 rounded mt-4">Save Changes</button>
        </form>
    
    
    </>
};

export default EditCar;
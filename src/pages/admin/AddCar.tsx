import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addCar } from "../../services/services";

const AddCar = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    brand: '',
    model: '',
    year: '',
    price_per_day: '',
    description: '',
    image: '',
    location: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name: form.name.trim(),
      brand: form.brand.trim(),
      model: form.model.trim(),
      year: Number(form.year),
      description: form.description.trim(),
      image: form.image.trim(),
      price_per_day: Number(form.price_per_day),
      location: form.location,
    };

    try {
      await addCar(payload);
      alert(" Car add successfull");
      navigate("/cars");

    } catch (err) {
      console.log(err);
      alert(" Error add car");
    }
  };

  return <>
  
  
  <div className="max-w-md mx-auto mt-10 bg-black p-6 rounded-xl">

      <Link to="/cars" className="text-blue mb-4 inline-block">
        Back to Cars
      </Link>

      <h2 className="text-xl font-extrabold mb-4 text-center">Add New Car</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" placeholder="Car Name" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="brand" placeholder="Brand" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="model" placeholder="Model" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="year" placeholder="Year" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="price_per_day" placeholder="Price per day" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="image" placeholder="Image URL" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="location" placeholder="Location" onChange={handleChange} className="w-full p-2 border rounded" />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full p-2 border rounded" />




        <button className="w-full bg-blue text-amber-50 py-2 rounded">
          Add Car
        </button>
      </form>
    </div>
  
  
  
  </>
};

export default AddCar;
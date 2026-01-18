import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { apiFetch } from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await apiFetch("/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });


      localStorage.setItem("token", data.token);

      navigate("/");
    } catch {
      setError("Register failed");
    } finally {
      setLoading(false);
    }
  };

  return <>
  
      <div className="min-h-screen flex items-center justify-center bg-primary_dark">

      <form
        onSubmit={handleSubmit}
        className="bg-black p-6 rounded-xl w-96"
      >
        
        <h1 className="text-2xl font-bold text-winter mb-6 text-center">
          Create Account
        </h1>

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}

        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-winter text-black"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-4 p-2 rounded"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue text-winter py-2 rounded hover:bg-blue_dark transition"
        >
          {loading ? "Creating..." : "Register"}
        </button>

        <p className="text-sm text-center text-winter mt-4">
          Already have an account?{" "}

          <Link to="/login" className="text-blue underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  
  
  </>
};

export default Register;

import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from '../components/layout/header/Header';



import Login from "./Login";

import Car from "./Car";
import ProtecteRoutes from "../routes/ProtecteRoutes";

import Register from "./Register";
import AddCar from "./admin/AddCar";
import CarDetails from "./CarDetails";
import EditCar from "./EditCar";
import Cart from "./Cart";
import Booking from "./Booking";



function App() {
  return (

    <>

      <Header />


      <main className="min-h-screen bg-primary_dark text-winter px-6 pt-24 ">

        <Routes>

          <Route index element={<Home />} />
          <Route path="/cars" element={<Car />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/add-car" element={<AddCar />} />
          <Route path="/car" element={<Car />} />
          <Route path="/cars/:id" element={<CarDetails />} />
          <Route path="/cars/:id/edit" element={<EditCar />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/car" element={<ProtecteRoutes>

            <Car />

          </ProtecteRoutes>} />

        </Routes>


      </main>

    </>



  )
}

export default App






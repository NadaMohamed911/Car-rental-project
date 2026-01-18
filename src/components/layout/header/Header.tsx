import React, { useState } from "react";
import Logo from "./Logo";
import Desktop from "./Desktop";
import { Menu, ShoppingCart, X } from 'lucide-react';
import Mobile from "./Mobile";

import { logout } from "../../../services/authServices";
import { Link, useNavigate } from "react-router";

const Header: React.FC = () => {

    const [openMobile, setOpenMobile] = useState(false);


    const navigate = useNavigate();

    const handleLogout = () => {
        logout();       //هنا نمسح التوكن
        navigate("/login"); //وهنا نرجع نرجع ل صفحه ال لوجين
    };


    return <>

        <header className="bg-neutral-800 text-winter py-3 ">

            <div className="flex items-center max-w-8xl px-6 mx-auto justify-between lg:justify-start">

                <Logo />

                <Desktop />

                <Link to="/cart" className="relative">
                    <ShoppingCart size={26} />
                </Link>


                <button onClick={() => setOpenMobile(!openMobile)} className="cursor-pointer block lg:hidden text-winter ">

                    {openMobile ? <X size={28} /> : <Menu size={28} />}

                </button>


                <nav id='mobile-navigtion ' className="pt-3.5">

                    <Mobile isOpen={openMobile} />

                </nav>


                <header className=" ps-50 ">
                    <button className=" bg-red-600 text-amber-50  lg:px-5 lg:py-2 rounded-md border-2 border-b-red-950  font-bold hover:bg-red-950" onClick={handleLogout}>Logout</button>
                </header>


            </div>



        </header>



    </>



}


export default Header;
import React from "react";
import appRoutes from "../../../routes";
import { Link } from "react-router-dom";



interface MobilePRops {

    isOpen: boolean


};


const Mobile: React.FC<MobilePRops> = ({ isOpen }) => {


    return <>

        {isOpen && <ul className='flex flex-col gap-3 px-15'>
            {appRoutes && appRoutes.map((route, index) => < li key={index} className=''>

                <Link to={route.href}>{route.title} </Link>

            </li>

            )}
        </ul>}



    </>



}


export default Mobile;
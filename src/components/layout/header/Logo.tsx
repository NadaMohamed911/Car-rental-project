import type React from "react";
import { Link } from "react-router-dom";


const Logo: React.FC = () => {

    return <>

<Link to='/' aria-label="Go to App Homepage">

<img src='/logo.png' alt='Logo' className="block h-20 pt-3 w-auto" aria-hidden={false}/>

</Link>




    </>
    
}


export default Logo;
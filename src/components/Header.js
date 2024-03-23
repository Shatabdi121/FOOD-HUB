import { useState } from "react";
import Logo from "../assets/img/foodhub.png"
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title= () => ( 
    <a href="/">
        <img  className="h-28 p-2" alt="logo" src={Logo} />
    </a>
     );

//Components
const Header = () => {
    
    const [isLoggedIn, setIsLoggedIN] = useState(false);
    const isOnline = useOnline();

    return (
    <div className="flex justify-between bg-yellow-100 shadow-lg sm:bg-blue-50 md:bg-yellow-100">
        <Title/> 
        <div className="nav-items">
            <ul className="flex py-10">
                <Link to="/"><li className="px-2 hover:text-blue-700">Home</li></Link>
                <Link to="/about"> <li className="px-2 hover:text-blue-700">About</li></Link>
                <Link to="/contact"><li className="px-2 hover:text-blue-700">Contact</li></Link>
                <li className="px-2 hover:text-blue-700">Cart</li>
                <Link to="/instamart"><li className="px-2 hover:text-blue-700">Instamart</li></Link>
            </ul>
        </div>
        <h1>{isOnline ? "✅" : "🔴"}</h1>
        {
            isLoggedIn ? (
                <button  className="bg-red-700 rounded-full" onClick={() => setIsLoggedIN(false)}>Logout</button>
            ):(
                <button className="bg-green-700 rounded-full" onClick={() => setIsLoggedIN(true)}>Login</button> 
            )
        }
    </div>
    );
}


export default Header;

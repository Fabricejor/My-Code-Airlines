import {createBrowserRouter} from "react-router-dom"
//les contenus des composants
// import ProtectedRoute from "../Services/ProtectedRoute"
import SignIn from "../Components/Connection/SignIn";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";


const token = localStorage.getItem("token");
const router = createBrowserRouter([
    {path: "/Signin" , element: <SignIn/>} ,
    // {path: "/products" , element: <Products />},
    {path: "/" , element: <Home/>},
    {path: "/contact" , element: <Contact/>}

])

export default router
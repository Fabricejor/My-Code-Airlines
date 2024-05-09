import {createBrowserRouter} from "react-router-dom"
//les contenus des composants
// import ProtectedRoute from "../Services/ProtectedRoute"
import SignIn from "../Components/Connection/SignIn";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import SignUp from "../Components/Connection/SignUp";


const token = localStorage.getItem("token");
const router = createBrowserRouter([
    {path: "/Signin" , element: <SignIn/>} ,
    {path: "/Signup" , element: <SignUp/>} ,
    // {path: "/profile",}

    // {path: "/products" , element: <Products />},
    {path: "/" , element: <Home/>},
    {path: "/contact" , element: <Contact/>}

])

export default router
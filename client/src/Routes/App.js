import {createBrowserRouter} from "react-router-dom"
//les contenus des composants
import ProtectedRoute from "../Services/ProtectedRoute"
import SignIn from "../Components/Connection/SignIn";
import Home from "../Pages/Home";


const token = localStorage.getItem("token");
const router = createBrowserRouter([
    // {path: "/" , element: <SignIn/>} ,
    // {path: "/products" , element: <Products />},
    {path: "/" , element: <Home/>}

])

export default router
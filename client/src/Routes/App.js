import {createBrowserRouter} from "react-router-dom"
//les contenus des composants
import ProtectedRoute from "../Services/ProtectedRoute"
import SignIn from "../Components/Connection/SignIn";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import SignUp from "../Components/Connection/SignUp";
import Flights from "../Pages/Flights";
import Profil from "../Pages/Profil";
// import Test from "../Pages/Test";

const token = localStorage.getItem("token");
const router = createBrowserRouter([
    {path: "/Signin" , element: <SignIn/>} ,
    {path: "/Signup" , element: <SignUp/>} ,
    // {path: "/profile",}

    // {path: "/products" , element: <Products />},
    {path: "/" , element: <Home/>},
    {path: "/contact" , element: <Contact/>},
    // {path: "/test" , element: <Test/>},

    {
        path: "/flights", element:
            <ProtectedRoute isAuthenticated={token}>
                <Flights />
            </ProtectedRoute>
    },
    {
        path: "/flights/:flightId", element:(
            <ProtectedRoute isAuthenticated={token}>
                <Flights />
            </ProtectedRoute>)
    },
    {
        path: "/profil", element:
            <ProtectedRoute isAuthenticated={token}>
                <Profil />
            </ProtectedRoute>
    },
])

export default router
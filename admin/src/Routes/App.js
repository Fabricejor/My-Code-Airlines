import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home";
import ProtectedRoute from "../Services/ProtectedRoute";
import SignIn from "../Components/Connection/SignIn";


const token = localStorage.getItem("token");
const router = createBrowserRouter([
    {path: "/" , element: <SignIn />} ,
    // {path: "/products" , element: <Products />},
    {
        path: "/home", element:
            <ProtectedRoute isAuthenticated={token}>
                <Home/>
            </ProtectedRoute>
    }
])

export default router;
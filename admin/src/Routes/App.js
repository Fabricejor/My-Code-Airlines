import {createBrowserRouter} from "react-router-dom"
//les contenus des composants
import ProtectedRoute from "../Services/ProtectedRoute"
import SignIn from "../Components/Connection/SignIn";
import Sidebar from "../Layouts/Sidebar";

const token = localStorage.getItem("token");
const router = createBrowserRouter([
    {path: "/" , element: <SignIn/>} ,
    // {path: "/products" , element: <Products />},
    {
        path: "/home", element:
            <ProtectedRoute isAuthenticated={token}>
                <Sidebar />
            </ProtectedRoute>
    },
    {
      path: "/home/log out", element:
          <ProtectedRoute isAuthenticated={token}>
              <Sidebar />
          </ProtectedRoute>
  }, {
    path: "/home/clients", element:
        <ProtectedRoute isAuthenticated={token}>
            <Sidebar />
        </ProtectedRoute>
},
{
  path: "/home/vols", element:
      <ProtectedRoute isAuthenticated={token}>
          <Sidebar />
      </ProtectedRoute>
},{
path: "/home/Voyagers", element:
<ProtectedRoute isAuthenticated={token}>
    <Sidebar />
</ProtectedRoute>
},
{
  path: "/home/Reservation", element:
  <ProtectedRoute isAuthenticated={token}>
      <Sidebar />
  </ProtectedRoute>
  },
  {
    path: "/home/Graphiques", element:
    <ProtectedRoute isAuthenticated={token}>
        <Sidebar />
    </ProtectedRoute>
    },
    {
      path: "/home/Admin", element:
      <ProtectedRoute isAuthenticated={token}>
          <Sidebar />
      </ProtectedRoute>
      },

])

export default router
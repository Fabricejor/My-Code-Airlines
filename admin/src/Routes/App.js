import {createBrowserRouter} from "react-router-dom"
import Home from "../Pages/Home"
import "../Assets/Styles/main.scss"
//les contenus des composants
import ProtectedRoute from "../Services/ProtectedRoute"
import SignIn from "../Components/Connection/SignIn";
import FlightMenu from "../Components/flight/FlightMenu";
import Graph1 from "../Components/graph/Graph1";
import PassagersMenu from "../Components/Passagers/PassagersMenu";
import UserMenu from "../Components/user/UserMenu";
import Sidebar from "../Layouts/Sidebar";

const token = localStorage.getItem("token");

// Créer des composants pour chaque route
const HomePage = () => (
    <ProtectedRoute isAuthenticated={token}>
      <Sidebar />
      <Home />
    </ProtectedRoute>
  );
  
  const FlightMenuPage = () => (
    <ProtectedRoute isAuthenticated={token}>
      <Sidebar />
      <FlightMenu />
    </ProtectedRoute>
  );
  
  const GraphPage = () => (
    <ProtectedRoute isAuthenticated={token}>
      <Sidebar />
      <Graph1 />
    </ProtectedRoute>
  );
  
  const PassagersMenuPage = () => (
    <ProtectedRoute isAuthenticated={token}>
      <Sidebar />
      <PassagersMenu />
    </ProtectedRoute>
  );
  
  const UserMenuPage = () => (
    <ProtectedRoute isAuthenticated={token}>
      <Sidebar />
      <UserMenu />
    </ProtectedRoute>
  );
  
  const router = createBrowserRouter([
    { path: "/", element: <SignIn /> },
    { path: "/home/", element: <HomePage /> },
    { path: "/flight-menu/", element: <FlightMenuPage /> },
    { path: "/graph/", element: <GraphPage /> },
    { path: "/passagers-menu/", element: <PassagersMenuPage /> },
    { path: "/user-menu/", element: <UserMenuPage /> }
  ]);
  

export default router
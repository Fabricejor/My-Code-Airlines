import { Navigate } from "react-router-dom";

const ProtectedRoute = ({isAuthenticated , Children})=>{

    if (!isAuthenticated){
        return <Navigate to="/" />
    }
    return (
        <>
        {Children}
        </>
    )
}
export default ProtectedRoute;
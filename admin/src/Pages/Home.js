import React from 'react'
import Sidebar from '../Layouts/Sidebar'

function Home() {
    const handleClose = () => {
        localStorage.removeItem("token")
        window.location = "/"
    }
    return (
        <div>Home Admin
            test
            <Sidebar/>
            <button onClick={handleClose}>
                deconnexion
            </button>
        </div>
    )
}

export default Home;
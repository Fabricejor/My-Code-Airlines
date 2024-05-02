import React from 'react'
import Sidebar from '../Layouts/Sidebar'

function Home() {
    const handleClose = () => {
        localStorage.removeItem("token")
        window.location = "/"
    }
    return (
        <>
            <Sidebar/>
            <button onClick={handleClose}>
                deconnexion
            </button>
        </>
    )
}

export default Home;
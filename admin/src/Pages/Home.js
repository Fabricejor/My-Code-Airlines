import React from 'react';

function Home() {
    const handleClose = () => {
        localStorage.removeItem("token")
        window.location = "/"
    }
    return (
        <div>Home Admin
            test

            <button onClick={handleClose}>
                deconnexion
            </button>
        </div>
    )
}

export default Home;
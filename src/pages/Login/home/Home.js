import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            Hola seguridad
            <Link className="btn btn-primary" to="/login">Login</Link>
        </div>
    )
}

export default Home

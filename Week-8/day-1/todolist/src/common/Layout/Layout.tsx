import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>
        <ul>
            <li>
            <Link to="/" >Home</Link>
            </li>
            <li>
            <Link to="/signup">Go to Singup</Link>
            </li>
            <li>
            <Link to="/login">Go to Login</Link>
            </li>
            <li>
                <Link to="/todos">Add todo's</Link>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Home
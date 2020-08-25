import React from 'react'
import ROUTES from '../Routes'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className='container'>
            <h1>Hello This is my React + D3 practice project</h1>
            <h3>Here is the list of works I've done</h3>
            <ul>
                {
                    ROUTES.filter(route => route.path !== '/').map((route, index) => (
                        <li key={index}>
                            <Link to={route.path}>{route.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HomePage

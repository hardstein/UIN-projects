import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Hjem</NavLink>
                </li>
                <li>
                    <NavLink to="/movies">Filmer</NavLink>
                </li>
                <li>
                    <NavLink to="/actors">Skuespillere</NavLink>
                </li>
                <h1>NAVBAR</h1>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
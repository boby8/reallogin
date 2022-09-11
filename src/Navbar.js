import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav>
          <NavLink to="/">Signup</NavLink>
          <NavLink to="login">Login</NavLink>
         
      </nav>
    </div>
  )
}

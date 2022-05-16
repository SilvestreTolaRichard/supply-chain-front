import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';

export const NavBar = () => {
  return (
    <main>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand" to="/" >
          Dashboard
        </Link>
        <div className="navbar-collapse">
          <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/lote" >
                lote
              </Link>
              <Link className="nav-item nav-link" to="/transporte" >
                transporte
              </Link>
              <Link className="nav-item nav-link" to="/elaboracion" >
                elaboracion
              </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </main>
  )
}
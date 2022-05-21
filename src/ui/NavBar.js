import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';

export const NavBar = () => {
  return (
    <main className='vh-100'>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" >
            Dashboard
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
        </div>
      </nav>
      <Outlet />
    </main>
  )
}
import React, { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../components/UserContext';

export const NavBar = () => {

  let navigate = useNavigate();

  let link = '';
  const {user:{ user }, setUser} = useContext(UserContext)
  console.log(user);
  switch (user.role) {
    case 'LOT':
      link = 'lote'
      break;
    case 'TRANSPORT':
      link = 'transporte'
      break;
    case 'PRODUCTION':
      link = 'elaboracion'
      break;
  }
  const handleLogout = () => {
    setUser({});
    navigate('/')
  }

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
              <Link className="nav-item nav-link" to={`/home/${link}`} >
                {link}
              </Link>
            </div>
          </div>
          <span className='mr-sm-2 text-white '>{ user.email }</span>
          <button onClick={ handleLogout } className='btn btn-outline-warning my-2 my-sm-0'>Logout</button>
        </div>
      </nav>
      <Outlet />
    </main>
  )
}
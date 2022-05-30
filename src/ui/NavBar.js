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
      <nav className="navbar navbar-expand-sm" style={{backgroundColor: '#2d620e'}}>
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/home" >
            Dashboard
          </Link>
 
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav">
              <Link className="nav-item nav-link text-white" to={`/home/${link}`} >
                {link}
              </Link>
            </div>
          </div>
          <span className='mx-2 text-white'>{ user.email }</span>
          <button onClick={ handleLogout } className='btn btn-danger btn-sm'>Logout</button>
        </div>
      </nav>
      <Outlet />
    </main>
  )
}
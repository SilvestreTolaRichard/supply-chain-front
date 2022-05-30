import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { Users } from './users';


export const LoginScreen = () => {
  
  const { setUser } = useContext(UserContext);
  const [data, setData] = useState({email: '', password:''})
  let navigate = useNavigate();

  const handleInputChange = ({ target }) => {
    setData({...data, [target.name]: target.value})
  }

  const handleSubmit = () => {
    const { email, password } = data
    const user  = Users.find(user => user.email === email && user.password === password )
    if (!user) {
      console.log('el usuario no existe');
    }
    setUser({user});
    navigate('/home');
  }
  
  return (
    <>
      <nav className="navbar" style={{backgroundColor: '#2d620e'}} >
        <div className='container-fluid'>
          <Link className="nav-item nav-link text-white" to='/carne/informacion' >
            Buscar
          </Link>
        </div>
      </nav>
      <div className='container mt-5'>
        <div className='row row-cols-1 justify-content-md-center'>
          <h1 className='col text-center' >Login</h1>
          <form onSubmit={ handleSubmit } >
            <div className="mb-3 mt-3 row">
              <label htmlFor="email" className="form-label col-1">Email:</label>
              <input type="email" className="form-control col" name='email' onChange={handleInputChange} />
            </div>
            <div className="mb-3 mt-3 row">
              <label htmlFor="password" className="form-label col-1">Password:</label>
              <input type="password" className="form-control col" name='password' onChange={handleInputChange} />
            </div>
            <div className='d-grid gap-2 col-6 mx-auto'>
              <button type='submit' className='btn text-white' style={{backgroundColor: '#2d620e'}}>
                Login
              </button>
            </div>
          </form>
        </div>
        
      </div>
    </>
  )
}

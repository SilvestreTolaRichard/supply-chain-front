import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { Users } from './users';


export const LoginScreen = () => {
  
  const { setUser } = useContext(UserContext);
  const [data, setData] = useState({email: '', password:''})
  const [error, setError] = useState("")
  let navigate = useNavigate();

  const handleInputChange = ({ target }) => {
    setData({...data, [target.name]: target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = data
    const user  = Users.find(user => user.email === email && user.password === password )
    if (user) {
      setUser({user});
      navigate('/home');
    } else {
      setError("is-invalid");
    }
  }
  
  return (
    <>
      <nav className="navbar" style={{ backgroundColor: '#2d620e' }} >
        <div className='container-fluid'>
          <Link className="nav-item nav-link text-white" to='/carne/informacion' >
            Buscar
          </Link>
        </div>
      </nav>
      <div className='container-fluid'>
        <div className='row justify-content-center pt-5'>
          <div className='col-5'>
            <h1 className='col text-center' >Login</h1>
            <form onSubmit={handleSubmit} className="needs-validation" >
              <div className="mb-3 mt-3 row">
                <label htmlFor="email" className="form-label col-sm-3">Email:</label>
                <input type="email" className="form-control col" name='email' onChange={handleInputChange} />
              </div>
              <div className="mb-3 mt-3 row">
                <label htmlFor="password" className="form-label col-sm-3">Contraseña:</label>
                <input
                  type="password"
                  className="form-control col"
                  name='password'
                  onChange={handleInputChange} />
              </div>
              <input className={"d-none " + error}/>
              <div class="invalid-feedback text-center m-3">
                Email o/y contraseña incorrectos
              </div>
              <div className='d-grid gap-2 col-6 mx-auto'>
                <button type='submit' className='btn text-white' style={{ backgroundColor: '#2d620e' }}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

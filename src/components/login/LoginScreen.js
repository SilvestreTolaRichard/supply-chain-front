import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
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
    <div className='container m-5'>
      <h1>Login</h1>
      <hr />
      <form onSubmit={ handleSubmit } >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" name='email' onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">password</label>
          <input type="password" className="form-control" name='password' onChange={handleInputChange} />
        </div>
        <button type='submit' className='btn btn-primary'>
          Login
        </button>
      </form>
    </div>
  )
}

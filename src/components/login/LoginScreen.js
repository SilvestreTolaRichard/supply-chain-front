import React from 'react'
import { useNavigate } from 'react-router-dom';


export const LoginScreen = (props) => {
  
  let navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  }
  
  return (
    <div className='container m-5'>
      <h1>Login</h1>
      <hr />

      <button className='btn btn-primary'
        onClick={ handleLogin }
      >
        Login
      </button>
    </div>
  )
}

import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { UserContext } from '../components/UserContext';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  
  const [user, setUser] = useState({})
  
  return (
    <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }} >
          <DashboardRoutes />
        </UserContext.Provider>
    </BrowserRouter>
  )
}

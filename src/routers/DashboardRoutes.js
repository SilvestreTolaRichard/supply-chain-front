import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Lot } from '../components/lot/Lot'
import { LotForm } from '../components/lot/LotForm'
import { Production } from '../components/production/Production'
import { ProductionForm } from '../components/production/ProductionForm'
import { Transport } from '../components/transporte/Transport'
import { TransportForm } from '../components/transporte/TransportForm'
import { SearcherMeat } from '../components/meat/SearcherMeat'
import { NavBar } from '../ui/NavBar'
import { LoginScreen } from '../components/login/LoginScreen'
import { HomeScreen } from '../components/home/HomeScreen'

export const DashboardRoutes = () => {

  return (
    <Routes>
      <Route path='carne/informacion' element={ <SearcherMeat /> } />
      <Route path='/' element={ <LoginScreen /> } />
      <Route path='/home' element={ <NavBar /> } >
        <Route path='/home' element={ <HomeScreen /> } />
        <Route path='lote' element={ <Lot/> } />
        <Route path='lote/register' element={ <LotForm /> } />
        <Route path='transporte' element={ <Transport /> } />
        <Route path='transporte/register' element={ <TransportForm /> } />
        <Route path='elaboracion' element={ <Production /> } />
        <Route path='elaboracion/register' element={ <ProductionForm /> } />
        <Route path='*' element={ <Navigate replace to='/' /> } />
      </Route>
    </Routes>
  )
}

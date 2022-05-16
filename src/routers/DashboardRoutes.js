import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Lot } from '../components/lot/Lot'
import { LotForm } from '../components/lot/LotForm'
import { Production } from '../components/production/Production'
import { ProductionForm } from '../components/production/ProductionForm'
import { Transport } from '../components/transporte/Transport'
import { TransportForm } from '../components/transporte/TransportForm'
import { NavBar } from '../ui/NavBar'

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <NavBar /> } >
        <Route index path='/' element={<h1>pagina principal</h1>} />
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

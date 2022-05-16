import React from 'react'
import { Link } from 'react-router-dom'

export const Production = () => {
  return (
    <div>
      <h1>
        Elaboracion de la carne
      </h1>
      <Link to={'register'} >Registrar elaboracion</Link>
    </div>
  )
}

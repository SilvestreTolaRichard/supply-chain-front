import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import carne from '../../img/carne.png'

export function Welcome() {
  return (
    <div className='vh-100 container-fluid'>
      <div className='h-100 row'>
        <div className='col-sm-6'>
          <div className='h-100 d-flex flex-column justify-content-center align-items-center'>
            <div className='row justify-content-center'>
              <p className='col-7'>
                <span className='fs-3'>Bienvenido a InfoMeat!!</span> <br />
                Obten información sobre el recorrido de la carne que consumes, información de la res
                de donde provino la carne hasta informacion de como fue procesada.</p>
            </div>
            <Link className='btn btn-primary' to={'/carne/informacion'}>Informacion de la carne</Link>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='h-100 d-flex flex-column justify-content-center align-items-center'>
            <div className='w-100 row justify-content-center'>
              <div className='col-9'>
                <img className='w-100' src={carne} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
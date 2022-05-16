import React from 'react'
import { useNavigate } from 'react-router-dom';

export const ProductionForm = () => {

  const navigate = useNavigate();

  const handleRegister = () => navigate('/elaboracion', {replace: true});

  return (
    <>
      <h1>
        REGISTRO INFORMACION DE ELABORACION DE LA CARNE
      </h1>
      <form>
        <div className="mb-3">
          <label htmlFor='exampleInputEmail1' className="form-label">Matadero</label>
          <input type="text" className="form-control" id="murder" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Lugar de Elaboracion</label>
          <input type="text" className="form-control" id="placeProd" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Temperatura</label>
          <input type="text" className="form-control" id="clime" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">humedad</label>
          <input type="text" className="form-control" id="humedad" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Fecha de elaboracion</label>
          <input type="text" className="form-control" id="humedad" />
        </div>
        <button onClick={handleRegister} className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

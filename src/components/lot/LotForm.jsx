import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LotForm = () => {
  
  const navigate = useNavigate();

  const handleRegister = () => navigate('/lote', {replace: true});
  
  return (
    <>
      <h1>
        Registro de Lote
      </h1>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">identificador del Lote</label>
          <input type="text" className="form-control" id="lotId" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Lugar de Crianza</label>
          <input type="text" className="form-control" id="place" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Alimento</label>
          <input type="text" className="form-control" id="food" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Cantidad de Ganado</label>
          <input type="text" className="form-control" id="amount" />
        </div>
        <button onClick={handleRegister} className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}
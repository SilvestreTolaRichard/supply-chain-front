import React from 'react'
import { useNavigate } from 'react-router-dom';

export const TransportForm = () => {

  const navigate = useNavigate();

  const handleRegister = () => navigate('/transporte', {replace: true});

  return (
    <>
      <h1>
        REGISTRO INFORMACION TRANSPORTE DE LOTE
      </h1>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">identificador del Lote</label>
          <input type="text" className="form-control" id="lotId" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Lugar de origen</label>
          <input type="text" className="form-control" id="place" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Lugar de destino</label>
          <input type="text" className="form-control" id="food" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Fecha de Transporte</label>
          <input type="text" className="form-control" id="amount" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Tiempo de Transporte</label>
          <input type="text" className="form-control" id="amount" />
        </div>
        <button onClick={handleRegister} className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}

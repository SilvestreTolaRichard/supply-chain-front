import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Web3Connection from '../../modules/Web3Connection'

export const TransportForm = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    lotId:'',
    place:'',
    destiny:'',
    date:'',
    time:'',  
  });
  const [errors, setErrors] = useState({
    lotId: '',
    place: '',
    destiny: '',
    date: '',
    time: '',
  });

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value 
    });
  }

  const handleInputBlur = (e) => {
    let input = e.target;
    let showError = "is-valid";
    if (input.value === "") {
      showError = "is-invalid";
    }
    setErrors({
      ...errors,
      [input.id]: showError
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;
    let validations = {};
    for (var [key, value] of Object.entries(data)) {
      let isValid = "is-valid";
      if (value === "") {
        hasError = true;
        isValid = "is-invalid";
      }
      validations[key] = isValid;
    }
    setErrors(validations);
    if (!hasError) {
      const {lotId, place, destiny, date, time} = data;
      let web3 = new Web3Connection();
      await web3.init();
      await web3.setInfoTransporte(lotId, place, destiny, date, time);
      navigate('/home/transporte', {replace: true})
    }
  }

  return (
    <div className='container-fluid pt-3 px-4 pb-5'>
      <div className='row justify-content-center my-5'>
        <div className='col-sm-9 col-md-6'>
          <h1>
            Registro de informacion de transporte de lote
          </h1>
          <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className="mb-3">
              <label htmlFor="lotId" className="form-label">Identificador del Lote:</label>
              <input
                type="text"
                className={"form-control " + errors.lotId}
                id="lotId"
                onChange={handleInputChange}
                onBlur={handleInputBlur} />
              <div className="invalid-feedback">
                Este campo es requerido.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="place" className="form-label">Lugar de origen:</label>
              <input
                type="text"
                className={"form-control " + errors.place}
                id="place"
                onChange={handleInputChange}
                onBlur={handleInputBlur} />
              <div className="invalid-feedback">
                Este campo es requerido.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="destiny" className="form-label">Lugar de destino:</label>
              <input
                type="text"
                className={"form-control " + errors.destiny}
                id="destiny"
                onChange={handleInputChange}
                onBlur={handleInputBlur} />
              <div className="invalid-feedback">
                Este campo es requerido.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Fecha de Transporte:</label>
              <input
                type="text"
                className={"form-control " + errors.date}
                id="date"
                onChange={handleInputChange}
                onBlur={handleInputBlur} />
              <div className="invalid-feedback">
                Este campo es requerido.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="time" className="form-label">Tiempo de Transporte:</label>
              <input
                type="text"
                className={"form-control " + errors.time}
                id="time"
                onChange={handleInputChange}
                onBlur={handleInputBlur} />
              <div className="invalid-feedback">
                Este campo es requerido.
              </div>
            </div>
            <div className='d-grid gap-2 col-6 mx-auto' >
              <button type='submit' className='btn text-white' style={{backgroundColor: '#2d620e'}}> Registrar </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

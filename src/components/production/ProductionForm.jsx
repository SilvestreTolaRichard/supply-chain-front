import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import sha256 from '../../modules/sha256'
import Web3Connection from '../../modules/Web3Connection'

import formatDate from '../../modules/formatDate'

export const ProductionForm = () => {

  const navigate = useNavigate();

  const [data, setData] = useState({ 
    lotId: '', 
    murder: '',
    timeProd: '',
    clime:'', 
    humedad: '', 
    date: '' 
  });
  const [errors, setErrors] = useState({
    lotId: '',
    murder: '',
    timeProd: '',
    clime: '',
    humedad: '',
    date: '' 
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value 
    });
  }

  const handleInputBlur = (e) => {
    let input = e.target;
    let showError = "is-valid";
    input.value = input.value.trim();
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
      let { lotId, murder, timeProd, clime, humedad, date } = data;
      let web3 = new Web3Connection();
      await web3.init();
      let noExist = true;
      let lote = await web3.getLote(lotId);
      if (lote["info_elaboracion"]["nombre_matadero"] !== "") {
        noExist = false;
      }
      if (noExist) {
        date = formatDate(date);
        const codigoCarne = lotId + date;
        const hashCarne = await sha256(codigoCarne);
        await web3.setInfoElaboracion(lotId, murder, clime, humedad, timeProd, date, hashCarne);
        console.log(hashCarne);
        navigate('/home/elaboracion', { replace: true })
      } else {
        alert("El lote ya fue elaborado");
      }
    }
  }

  return (
    <div className='container-fluid pt-3 px-4 pb-5'>
      <div className='row justify-content-center'>
        <div className='col-sm-9 col-md-6'>
          <h1>
            Registro de informacion de elaboracion de carne
          </h1>
          <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className="mb-3">
              <label htmlFor="lotId" className="form-label">Identificador del Lote</label>
              <input
                type="text"
                className={"form-control " + errors.lotId}
                id="lotId"
                onChange={handleInputChange}
                onBlur={handleInputBlur} />
            </div>
            <div className="mb-3">
              <label htmlFor='murder' className="form-label">Matadero</label>
              <input
                type="text"
                className={"form-control " + errors.murder}
                id="murder"
                onChange={handleInputChange}
                onBlur={handleInputBlur} />
            </div>
            <div className="mb-3">
              <label htmlFor="clime" className="form-label">Temperatura</label>
              <input
                type="text"
                className={"form-control " + errors.clime}
                id="clime"
                onChange={handleInputChange}
                onBlur={handleInputBlur} />
            </div>
            <div className="mb-3">
              <label htmlFor="humedad" className="form-label">humedad</label>
              <input
                type="text"
                className={"form-control " + errors.humedad}
                id="humedad"
                onChange={handleInputChange}
                onBlur={handleInputBlur} />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Fecha de elaboracion</label>
              <input
                type="date"
                className={"form-control " + errors.date}
                id="date"
                onChange={handleInputChange}
                onBlur={handleInputBlur} />
            </div>
            <div className="mb-3">
              <label htmlFor="timeProd" className="form-label">Tiempo de Elaboracion</label>
              <input
                type="text"
                className={"form-control " + errors.timeProd}
                id="timeProd"
                onChange={handleInputChange}
                onBlur={handleInputBlur} />
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

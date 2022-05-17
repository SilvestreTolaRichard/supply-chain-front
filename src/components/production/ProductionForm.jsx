import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { setInfoElaboracion, sha256 } from '../../App';

export const ProductionForm = () => {

  const navigate = useNavigate();

  const [data, setData] = useState({ lotId: '', murder: '',placeProd: '',clime:'', humedad: '', date: '' });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value 
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { lotId, murder, placeProd, clime, humedad, date } = data;

    const codigoCarne = lotId + date;
    const hashCarne = await sha256(codigoCarne);

    // setInfoElaboracion()
    await setInfoElaboracion(lotId, murder, placeProd, clime, humedad, date, hashCarne);

    console.log(hashCarne);

    navigate('/elaboracion', {replace: true})
  }

  return (
    <>
      <h1>
        REGISTRO INFORMACION DE ELABORACION DE LA CARNE
      </h1>
      <form onSubmit={ handleSubmit }>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">identificador del Lote</label>
          <input type="text" className="form-control" id="lotId" aria-describedby="emailHelp" onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor='exampleInputEmail1' className="form-label">Matadero</label>
          <input type="text" className="form-control" id="murder" aria-describedby="emailHelp" onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Lugar de Elaboracion</label>
          <input type="text" className="form-control" id="placeProd" onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Temperatura</label>
          <input type="text" className="form-control" id="clime" onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">humedad</label>
          <input type="text" className="form-control" id="humedad" onChange={handleInputChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Fecha de elaboracion</label>
          <input type="text" className="form-control" id="date" onChange={handleInputChange}/>
        </div>
        <button type='submit' className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { setInfoTransporte } from '../../App';

export const TransportForm = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    lotId:'',
    place:'',
    destiny:'',
    date:'',
    time:'',  
  });

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value 
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {lotId, place, destiny, date, time} = data;
    // console.log(data);
    await setInfoTransporte(lotId, place, destiny, date, time);
      // .then(console.log)
      // .catch(err => console.log(err));

    navigate('/transporte', {replace: true})
  }

  return (
    <>
      <h1>
        REGISTRO INFORMACION TRANSPORTE DE LOTE
      </h1>
      <form onSubmit={ handleSubmit } >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">identificador del Lote</label>
          <input type="text" className="form-control" id="lotId" aria-describedby="emailHelp" onChange={handleInputChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Lugar de origen</label>
          <input type="text" className="form-control" id="place" onChange={handleInputChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Lugar de destino</label>
          <input type="text" className="form-control" id="destiny" onChange={handleInputChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Fecha de Transporte</label>
          <input type="text" className="form-control" id="date" onChange={handleInputChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Tiempo de Transporte</label>
          <input type="text" className="form-control" id="time" onChange={handleInputChange}/>
        </div>
        <button type='submit' className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}

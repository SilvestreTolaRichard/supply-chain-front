import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Web3Connection from '../../modules/Web3Connection'

export const LotForm = () => {
  
  const [data, setData] = useState({
    lotId: '',
    place: '',
    food: '',
    amount: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value 
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {lotId,place, food, amount} = data;
    // console.log(data);
    let web3 = new Web3Connection();
    await web3.init();
    await web3.setLote(lotId, amount, place, food);
      // .then(console.log)
      // .catch(err => console.log(err));

    navigate('/lote', {replace: true})
  }


  return (
    <div className='container-fluid d-flex justify-content-center pt-3 px-4 pb-5'>
      <div className='w-50'>
        <h1>
          Registro de Lote
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Identificador del Lote</label>
            <input type="text" className="form-control" id="lotId" onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Lugar de Crianza</label>
            <input type="text" className="form-control" id="place" onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Alimento</label>
            <input type="text" className="form-control" id="food" onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Cantidad de Ganado</label>
            <input type="text" className="form-control" id="amount" onChange={handleInputChange} />
          </div>
          <button type='submit' className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Web3Connection from '../../modules/Web3Connection'
import elaboration from '../../img/meat.svg'

export class Production extends Component {
  constructor() {
    super();
    this.state = { lotes: [] };
  }

  async componentDidMount() {
    let web3Connection = new Web3Connection();
    await web3Connection.init();
    let lotes = await web3Connection.getLotes();
    this.setState({
      lotes: lotes
    });
  }

  render() {
    let lote_items;
    if (this.state.lotes.length > 0) {
      lote_items = this.state.lotes.map((lote, i) => {
        let item;
        if (lote["elaborado"]) {
          item = (
            <div className='col-md-6' key={i}>
              <div className="card">
                <div className="card-header">
                  Id Lote: {lote["id_lote"]}
                </div>
                <div className="card-body p-1">
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>Matadero: {lote["info_elaboracion"]["nombre_matadero"]}</li>
                    <li className='list-group-item'>Temperatura: {lote["info_elaboracion"]["temperatura"]}</li>
                    <li className='list-group-item'>Humedad: {lote["info_elaboracion"]["humedad"]}</li>
                    <li className='list-group-item'>Fecha de sacrificio: {lote["info_elaboracion"]["fecha_sacrificio"]}</li>
                    <li className='list-group-item'>Tiempo de elaboracion: {lote["info_elaboracion"]["tiempo_elaboracion"]}</li>
                    <li className='list-group-item'>Codigo de carne: {lote["info_elaboracion"]["hash_carne"]}</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        }
        return item;
      });
    } else {
      lote_items = <div>No Lotes</div>;
    }
    return (
      <div className='container-fluid pt-3 px-4 pb-5'>
        <div className='row align-items-center'>
          <div className='col-1 d-flex justify-content-center pe-0'>
            <img src={elaboration} className='w-75' />
          </div>
          <h1 className='col-auto'>
            Elaboracion de la carne
          </h1>
          <div className='col-auto ms-auto'>
            <Link to={'register'} >+ Registrar elaboracion</Link>
          </div>
        </div>
        <div className='row g-3 mt-0'>
          {lote_items}
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Web3Connection from '../../modules/Web3Connection'
import transport from '../../img/truck.svg'

export class Transport extends Component {
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
        if (lote["transportado"]) {
          item = (
            <div className='col-md-6' key={i}>
              <div className="card">
                <div className="card-header">
                  Id Lote: {lote["id_lote"]}
                </div>
                <div className="card-body p-1">
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>Lugar de origen: {lote["info_transporte"]["lugar_origen"]}</li>
                    <li className='list-group-item'>Lugar de destino: {lote["info_transporte"]["lugar_destino"]}</li>
                    <li className='list-group-item'>Fecha de transporte: {lote["info_transporte"]["fecha_transporte"]}</li>
                    <li className='list-group-item'>Tiempo de transporte: {lote["info_transporte"]["tiempo_transporte"]}</li>
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
          <div className='col-2 col-md-1 d-flex justify-content-center pe-0'>
            <img src={transport} className='w-75' />
          </div>
          <h1 className='col-auto'>
            Transporte
          </h1>
          <div className='col-auto ms-auto'>
            <Link to={'register'}>+ Registrar Lote</Link>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-lg-10'>
            <div className='row g-3 mt-0'>
              {lote_items}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

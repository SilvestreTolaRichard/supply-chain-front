import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Web3Connection from '../../modules/Web3Connection'
import production from '../../img/cow.svg'

export class Lot extends Component {
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
      lote_items = this.state.lotes.map((lote, i) => (
        <div className='col-md-6' key={i}>
          <div className="card">
            <div className="card-header">
              Id Lote: {lote["id_lote"]}
            </div>
            <div className="card-body p-1">
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Lugar de crianza: {lote["lugar_crianza"]}</li>
                <li className='list-group-item'>Alimento: {lote["alimento"]}</li>
                <li className='list-group-item'>Cantidad de ganado: {lote["ganado"]}</li>
              </ul>
            </div>
          </div>
        </div>
      ));
    } else {
      lote_items = <div><h4>No existen Lotes registrados</h4></div>;
    }
    return (
      <div className='container-fluid pt-3 px-4 pb-5'>
        <div className='row align-items-center'>
          <div className='col-2 col-md-1 d-flex justify-content-center pe-0'>
            <img src={production} className='w-75' alt='ganado' />
          </div>
          <h1 className='col-auto'>
            Lotes
          </h1>
          <div className='col-auto ms-auto'>
            <Link  className='btn btn-primary' to={'register'}>+ Registrar Lote</Link>
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

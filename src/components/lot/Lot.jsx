import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Web3Connection from '../../modules/Web3Connection'

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
      lote_items = <div>No Lotes</div>;
    }
    return (
      <div className='container-fluid pb-5 px-4'>
        <h1>
          Lotes
        </h1>
        <Link to={'register'}> Registrar Lote</Link>
        <div className='row g-3 mt-0'>
          {lote_items}
        </div>
      </div>
    )
  }
}

// export const Lot = () => {
//   let lote_items;
//   const lotes = getLotes();
//   if (lotes.length > 0) {
//     lote_items = lotes.map((lote) => (
//       <div className='col-md-6' key={lote["id_lote"].toString()}>
//         <div className="card">
//           <div className="card-header">
//             Id Lote: {lote["id_lote"]}
//           </div>
//           <div className="card-body p-1">
//             <ul className='list-group list-group-flush'>
//               <li className='list-group-item'>Lugar de crianza:</li>
//               <li className='list-group-item'>Alimento:</li>
//               <li className='list-group-item'>Cantidad de ganado:</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     ));
//   } else {
//     lote_items = <div>No Lotes</div>;
//   }
//   return (
//     <div className='container-fluid pb-5 px-4'>
//       <h1>
//         Lotes
//       </h1>
//       <Link to={'register'}> Registrar Lote</Link>
//       <div className='row g-3 mt-0'>
//         { lote_items }
//       </div>
//     </div>
//   )
// }

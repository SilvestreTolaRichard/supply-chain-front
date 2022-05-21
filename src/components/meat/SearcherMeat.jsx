import React, { Component } from 'react'
import Web3Connection from '../../modules/Web3Connection'
import production from '../../img/cow.svg'
import transport from '../../img/truck.svg'
import elaboration from '../../img/meat.svg'


export class SearcherMeat extends Component {
  constructor() {
    super();
    this.state = this.state = {
      codigo: '',
      infoCarne: [],
      infoLote: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ codigo: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    //console.log(this.state.codigo);
    let web3 = new Web3Connection();
    await web3.init();
    const carne = await web3.getCarne(this.state.codigo);
    //console.log(carne);
    await this.setState({ infoCarne: carne });
    if (carne.length > 0) {
      const lote = await web3.getLote(carne["lote"], true);
      //console.log(lote);
      await this.setState({ infoLote: lote });
    }
  }

  render() {
    let info = <div className='col text-center'>Informacion no encontrada</div>;
    let carne = this.state.infoCarne;
    if (carne.length > 0) {
      let lote = this.state.infoLote;
      if (lote.length > 0) {
        info = (
          <>
            <div className='row g-3 mt-0 justify-content-center'>
              <div className='col-6 col-sm-4'>
                <div className='h-100 d-flex flex-column justify-content-center align-items-center'>
                  <img src={production} className='w-75' />
                </div>
              </div>
              <div className='col-12 col-sm-8'>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item fw-bold'>Informacion del lote de ganado</li>
                  <li className='list-group-item'>Id Lote: {lote["id_lote"]}</li>
                  <li className='list-group-item'>Lugar de crianza: {lote["lugar_crianza"]}</li>
                  <li className='list-group-item'>Alimento: {lote["alimento"]}</li>
                  <li className='list-group-item'>Cantidad de ganado: {lote["ganado"]}</li>
                </ul>
              </div>
            </div>
            <div className='row g-3 mt-0 justify-content-center'>
              <div className='col-6 col-sm-4 order-sm-1'>
                <div className='h-100 d-flex flex-column justify-content-center align-items-center'>
                  <img src={transport} className='w-75' />
                </div>
              </div>
              <div className='col-12 col-sm-8'>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item fw-bold'>Informacion de transporte de ganado</li>
                  <li className='list-group-item'>Lugar de origen: {lote["info_transporte"]["lugar_origen"]}</li>
                  <li className='list-group-item'>Lugar de destino: {lote["info_transporte"]["lugar_destino"]}</li>
                  <li className='list-group-item'>Fecha de transporte: {lote["info_transporte"]["fecha_transporte"]}</li>
                  <li className='list-group-item'>Tiempo de transporte: {lote["info_transporte"]["tiempo_transporte"]}</li>
                </ul>
              </div>
            </div>
            <div className='row g-3 mt-0 justify-content-center'>
              <div className='col-6 col-sm-4'>
                <div className='h-100 d-flex flex-column justify-content-center align-items-center'>
                  <img src={elaboration} className='w-75' />
                </div>
              </div>
              <div className='col-12 col-sm-8'>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item fw-bold'>Informacion de elaboracion</li>
                  <li className='list-group-item'>Temperatura: {lote["info_elaboracion"]["temperatura"]}</li>
                  <li className='list-group-item'>Humedad: {lote["info_elaboracion"]["humedad"]}</li>
                  <li className='list-group-item'>Fecha de sacrificio: {lote["info_elaboracion"]["fecha_sacrificio"]}</li>
                  <li className='list-group-item'>Tiempo de elaboracion: {lote["info_elaboracion"]["tiempo_elaboracion"]}</li>
                  <li className='list-group-item text-break'>Codigo de carne: {lote["info_elaboracion"]["hash_carne"]}</li>
                </ul>
              </div>
            </div>
          </>
        );
      }
    }
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className='container-fluid'>
            <div></div>
            <form className="d-flex" onSubmit={this.handleSubmit}>
              <input className="form-control me-2" type="search" id="codCarne" placeholder="Codigo de carne" onChange={this.handleChange} />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </nav>
        <div className='container-fluid pb-5 px-4'>
          <h1>
            Informacion de la carne
          </h1>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              {info}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


// export const SearcherMeat = () => {

//   let carne = [];
//   const [codigo, setCodigo] = useState('');

//   const handleInputChange = (e) => {
//     setData([e.target.id]: e.target.value);
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const codCarne = data.codCarne;
//     console.log(codCarne);
//     let web3 = new Web3Connection();
//     await web3.init();
//     carne = await web3.getCarne(codCarne);
//     console.log(carne);
//   }
//   let infoCarne = <div>Informacion no encontrada</div>;
//   if(carne.length > 0){
//     infoCarne = (
//       <div className="card">
//         <div className="card-header">
//           Codigo de carne: {carne["info_elaboracion"]["hash_carne"]}
//         </div>
//         <div className="card-body p-1">
//           <ul className='list-group list-group-flush'>
//             <li className='list-group-item'>Id Lote: {carne["id_lote"]}</li>
//             <li className='list-group-item'>Lugar de crianza: {carne["lugar_crianza"]}</li>
//             <li className='list-group-item'>Alimento: {carne["alimento"]}</li>
//             <li className='list-group-item'>Cantidad de ganado: {carne["ganado"]}</li>
//             <li className='list-group-item'>Lugar de origen: {carne["info_transporte"]["lugar_origen"]}</li>
//             <li className='list-group-item'>Lugar de destino: {carne["info_transporte"]["lugar_destino"]}</li>
//             <li className='list-group-item'>Fecha de transporte: {carne["info_transporte"]["fecha_transporte"]}</li>
//             <li className='list-group-item'>Tiempo de transporte: {carne["info_transporte"]["tiempo_transporte"]}</li>
//             <li className='list-group-item'>Matadero: {carne["info_elaboracion"]["nombre_matadero"]}</li>
//             <li className='list-group-item'>Temperatura: {carne["info_elaboracion"]["temperatura"]}</li>
//             <li className='list-group-item'>Humedad: {carne["info_elaboracion"]["humedad"]}</li>
//             <li className='list-group-item'>Fecha de sacrificio: {carne["info_elaboracion"]["fecha_sacrificio"]}</li>
//             <li className='list-group-item'>Tiempo de elaboracion: {carne["info_elaboracion"]["tiempo_elaboracion"]}</li>
//             <li className='list-group-item'>Codigo de carne: {carne["info_elaboracion"]["hash_carne"]}</li>
//           </ul>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <nav className="navbar navbar-dark bg-dark">
//         <div className='container-fluid'>
//           <div></div>
//           <form className="d-flex" onSubmit={handleSubmit}>
//             <input className="form-control me-2" type="search" id="codCarne" placeholder="Codigo de carne" onChange={handleInputChange} />
//             <button className="btn btn-outline-success" type="submit">Buscar</button>
//           </form>
//         </div>
//       </nav>
//       <div className='container-fluid pb-5 px-4'>
//         <h1>
//           Informacion Carne
//         </h1>
//         <div className='row g-3 mt-0'>
//           <div className='col-md-6'>
//             {infoCarne}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
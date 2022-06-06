import React, { Component } from 'react'
import Web3Connection from '../../modules/Web3Connection'
import production from '../../img/cow.svg'
import transport from '../../img/truck.svg'
import elaboration from '../../img/meat.svg'
import download from '../../img/arrow-thick-to-bottom.svg'

import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import { Svg, Defs, G, Rect, Path, ClipPath, Circle } from '@react-pdf/renderer'

// Create styles
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '64px'
  },
  rowFinal: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  w50: {
    width: '50%'
  },
  w75: {
    width: '75%'
  },
  w100: {
    width: '100%'
  },
  wAuto: {
    width: 'auto'
  },
  h100: {
    height: '100%'
  },
  page: {
    padding: '36px'
  },
  image: {
    width: '214px',
    height: '100px'
  },
  title: {
    fontSize: '36px',
    marginBottom: '64px'
  },
  info: {
    fontSize: '14px'
  },
  infoItem: {
    padding: '6px',
    borderBottom: '1px solid black'
  },
  infoTitle: {
    padding: '6px',
    borderBottom: '1px solid black',
    fontSize: '16px',
    fontWeight: 'bold'
  }
});

// Create Document Component
const MyDocument = ({lote}) => {
  let document = <></>;
  if (lote.length > 0) {
    let hash = lote["info_elaboracion"]["hash_carne"];
    hash = hash.substring(0, 32) + ' ' + hash.substring(32, 64);
    document = (
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <Text style={styles.title}>
              Informacion de la carne
            </Text>
            <View>
              <View>
                <View>  
                  <View style={styles.row}>
                    <View style={styles.image}>
                      <Svg width="214" height="100" viewBox="0 0 474 360" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <G clipPath="url(#clip0_1_28)">
                        <Rect width="100%" height="100%" fill="#fff"/>
                        <Path d="M150 73.5C159 72 180 69 192 69C204 69 264 69 292.5 69C308.667 67.1667 343.1 63.5 351.5 63.5C362 63.5 378 63.5 386.5 63.5C395 63.5 420.5 72.5 421.5 110.5C422.5 148.5 418.5 147.5 417 165C415.5 182.5 417.5 217.5 421.5 233.5C424.7 246.3 412.167 316.167 405.5 349.5H379L386.5 264C374.833 257.333 351.5 239.6 351.5 222C344.5 227 306.2 236.3 209 233.5L219 249.5L205 349.5H178.5L173 259C155.167 248.5 117.2 222.8 108 204L87 179.5" stroke="black" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M368 251.5L352.5 350H326L331.5 262.5C324.167 258.333 308.3 246.7 303.5 233.5" stroke="black" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M169.5 261L149.5 350H128C128.333 315.833 127.9 242.4 123.5 222" stroke="black" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M40 73.1383C32.4809 72.6319 15.5541 73.2396 8 79.7215C13.9454 86.4735 28.6689 99.7748 40 98.9646" stroke="black" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M153 73.1383C160.519 72.6319 177.446 73.2396 185 79.7215C179.055 86.4735 164.331 99.7748 153 98.9646" stroke="black" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M71.5 44.5C51 31.5 38.5 17.5 31 6C31 29 36 44.5 46 57" stroke="black" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M121 44.5C141.5 31.5 154 17.5 161.5 6C161.5 29 156.5 44.5 146.5 57" stroke="black" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M146.5 115C159.3 47.8 118.833 40.6667 96.9999 44C39.7999 39.2 43.8142 81 45.9999 115C49.6642 172 73 179.5 96.9999 179.5C135.5 183 141.071 143.5 146.5 115Z" stroke="black" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M243.5 70.5C254 80.5 251.6 97.3 258 118.5C262.5 148 312.95 158.5 332.5 135.5C358 105.5 394.8 68.9 398 72.5" stroke="black" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M283 231.5L260 181C253 169 246.6 159.2 219 162C184.5 165.5 184 188 184 189C184 190 186 207.5 229.5 231.5" stroke="black" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M423 94C450 100 455.5 171.6 455.5 192M455.5 192C464.333 196.333 477.7 215.6 456.5 246C447.667 235.333 435.1 209.6 455.5 192Z" stroke="black" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M474 354L0 354" stroke="black" strokeWidth="13" strokeLinejoin="round"/>
                        <Path d="M54 353C49.8333 334.5 37.9 297.3 23.5 296.5M54 353C59.3333 318.333 59.5 274 34 263.5M54 353C58.8333 330 72.4 284.4 88 286" stroke="black" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
                        </G>
                        <Defs>
                        <ClipPath id="clip0_1_28">
                        <Rect width="100%" height="100%" fill="#fff"/>
                        </ClipPath>
                        </Defs>
                      </Svg>
                    </View>
                    <View style={{width: '300px'}}>
                      <View style={styles.info}>
                        <Text style={styles.infoTitle}>Informacion del lote de ganado</Text>
                        <Text style={styles.infoItem}>Id Lote: {lote["id_lote"]}</Text>
                        <Text style={styles.infoItem}>Lugar de crianza: {lote["lugar_crianza"]}</Text>
                        <Text style={styles.infoItem}>Alimento: {lote["alimento"]}</Text>
                        <Text style={styles.infoItem}>Cantidad de ganado: {lote["ganado"]}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.row, {justifyContent: 'space-between'}]}>
                    <View style={{width: '300px'}}>
                      <View style={styles.info}>
                        <Text style={styles.infoTitle}>Informacion de transporte de ganado</Text>
                        <Text style={styles.infoItem}>Lugar de origen: {lote["info_transporte"]["lugar_origen"]}</Text>
                        <Text style={styles.infoItem}>Lugar de destino: {lote["info_transporte"]["lugar_destino"]}</Text>
                        <Text style={styles.infoItem}>Fecha de transporte: {lote["info_transporte"]["fecha_transporte"]}</Text>
                        <Text style={styles.infoItem}>Tiempo de transporte: {lote["info_transporte"]["tiempo_transporte"]}</Text>
                      </View>
                    </View>
                    <View style={styles.image}>
                      <Svg width="164" height="90" viewBox="0 0 511 278" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <Rect width="100%" height="100%" fill="white"/>
                        <Circle cx="208.5" cy="233.5" r="36" stroke="black" strokeWidth="15"/>
                        <Circle cx="439.5" cy="233.5" r="36" stroke="black" strokeWidth="15"/>
                        <Path d="M53.5 49.5H151.5M7.5 94H62.5M66 136H208.5M26 172.5H127.5" stroke="black" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M477.895 234H503V174.735L450.28 79H383" stroke="black" strokeWidth="15" strokeLinejoin="round"/>
                        <Path d="M249 233.5H402.5" stroke="black" strokeWidth="15" strokeLinejoin="round"/>
                        <Path d="M377 228V9H96V45.3318" stroke="black" strokeWidth="15" strokeLinejoin="round"/>
                        <Path d="M168 234H96V179" stroke="black" strokeWidth="15" strokeLinejoin="round"/>
                        <Path d="M96 130V81.5" stroke="black" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
                      </Svg>
                    </View>
                  </View>
                  <View style={styles.rowFinal}>
                    <View style={styles.image}>
                      <Svg width="204" height="90" viewBox="0 0 512 377" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <G clipPath="url(#clip0_1_51)">
                        <Rect width="512" height="377" fill="white"/>
                        <Path d="M0 7H386.016H512" stroke="black" strokeWidth="15" strokeLinejoin="round"/>
                        <Path d="M142 51.5H149.5V44H142V51.5ZM142 92.5L149.499 92.6402L149.5 92.5701V92.5H142ZM7 92.5H-0.5V92.889L-0.459766 93.2758L7 92.5ZM7 51.5V44H-0.5V51.5H7ZM94.5938 250.198C97.4647 253.184 102.213 253.277 105.198 250.406C108.184 247.535 108.277 242.787 105.406 239.802L94.5938 250.198ZM44.5938 239.802C41.7228 242.787 41.8159 247.535 44.8017 250.406C47.7875 253.277 52.5353 253.184 55.4062 250.198L44.5938 239.802ZM67.5 14V51.5H82.5V14H67.5ZM75 59H142V44H75V59ZM134.5 51.5V92.5H149.5V51.5H134.5ZM134.501 92.3598C134.358 100.026 131.585 113.687 122.78 125.606C114.216 137.2 99.6118 147.634 74.5878 149.011L75.4122 163.989C104.888 162.366 123.618 149.717 134.845 134.519C145.832 119.646 149.309 102.807 149.499 92.6402L134.501 92.3598ZM75.1829 149.002C66.1761 148.783 51.9695 145.635 39.5743 136.926C27.4484 128.406 16.8213 114.431 14.4598 91.7242L-0.459766 93.2758C2.37869 120.569 15.5016 138.344 30.9507 149.199C46.1305 159.865 63.3239 163.717 74.8171 163.998L75.1829 149.002ZM14.5 92.5V51.5H-0.5V92.5H14.5ZM7 59H75V44H7V59ZM67.5 156.5V219H82.5V156.5H67.5ZM69.5938 224.198L94.5938 250.198L105.406 239.802L80.4062 213.802L69.5938 224.198ZM69.5938 213.802L44.5938 239.802L55.4062 250.198L80.4062 224.198L69.5938 213.802Z" fill="black"/>
                        <Path d="M324 51.5H331.5V44H324V51.5ZM324 92.5L331.499 92.6402L331.5 92.5701V92.5H324ZM189 92.5H181.5V92.889L181.54 93.2758L189 92.5ZM189 51.5V44H181.5V51.5H189ZM276.594 250.198C279.465 253.184 284.213 253.277 287.198 250.406C290.184 247.535 290.277 242.787 287.406 239.802L276.594 250.198ZM226.594 239.802C223.723 242.787 223.816 247.535 226.802 250.406C229.787 253.277 234.535 253.184 237.406 250.198L226.594 239.802ZM249.5 14V51.5H264.5V14H249.5ZM257 59H324V44H257V59ZM316.5 51.5V92.5H331.5V51.5H316.5ZM316.501 92.3598C316.358 100.026 313.585 113.687 304.78 125.606C296.216 137.2 281.612 147.634 256.588 149.011L257.412 163.989C286.888 162.366 305.618 149.717 316.845 134.519C327.832 119.646 331.309 102.807 331.499 92.6402L316.501 92.3598ZM257.183 149.002C248.176 148.783 233.969 145.635 221.574 136.926C209.448 128.406 198.821 114.431 196.46 91.7242L181.54 93.2758C184.379 120.569 197.502 138.344 212.951 149.199C228.131 159.865 245.324 163.717 256.817 163.998L257.183 149.002ZM196.5 92.5V51.5H181.5V92.5H196.5ZM189 59H257V44H189V59ZM249.5 156.5V219H264.5V156.5H249.5ZM251.594 224.198L276.594 250.198L287.406 239.802L262.406 213.802L251.594 224.198ZM251.594 213.802L226.594 239.802L237.406 250.198L262.406 224.198L251.594 213.802Z" fill="black"/>
                        <Path d="M506 51.5H513.5V44H506V51.5ZM506 92.5L513.499 92.6402L513.5 92.5701V92.5H506ZM371 92.5H363.5V92.889L363.54 93.2758L371 92.5ZM371 51.5V44H363.5V51.5H371ZM458.594 250.198C461.465 253.184 466.213 253.277 469.198 250.406C472.184 247.535 472.277 242.787 469.406 239.802L458.594 250.198ZM408.594 239.802C405.723 242.787 405.816 247.535 408.802 250.406C411.787 253.277 416.535 253.184 419.406 250.198L408.594 239.802ZM431.5 14V51.5H446.5V14H431.5ZM439 59H506V44H439V59ZM498.5 51.5V92.5H513.5V51.5H498.5ZM498.501 92.3598C498.358 100.026 495.585 113.687 486.78 125.606C478.216 137.2 463.612 147.634 438.588 149.011L439.412 163.989C468.888 162.366 487.618 149.717 498.845 134.519C509.832 119.646 513.309 102.807 513.499 92.6402L498.501 92.3598ZM439.183 149.002C430.176 148.783 415.969 145.635 403.574 136.926C391.448 128.406 380.821 114.431 378.46 91.7242L363.54 93.2758C366.379 120.569 379.502 138.344 394.951 149.199C410.131 159.865 427.324 163.717 438.817 163.998L439.183 149.002ZM378.5 92.5V51.5H363.5V92.5H378.5ZM371 59H439V44H371V59ZM431.5 156.5V219H446.5V156.5H431.5ZM433.594 224.198L458.594 250.198L469.406 239.802L444.406 213.802L433.594 224.198ZM433.594 213.802L408.594 239.802L419.406 250.198L444.406 224.198L433.594 213.802Z" fill="black"/>
                        <Rect x="7.5" y="292.5" width="497" height="77" rx="38.5" stroke="black" strokeWidth="15"/>
                        <Circle cx="96" cy="331" r="38.5" stroke="black" strokeWidth="15"/>
                        <Path d="M101 331C101 333.761 98.7614 336 96 336C93.2386 336 91 333.761 91 331C91 328.239 93.2386 326 96 326C98.7614 326 101 328.239 101 331Z" stroke="black" strokeWidth="10"/>
                        <Circle cx="417" cy="331" r="38.5" stroke="black" strokeWidth="15"/>
                        <Path d="M422 331C422 333.761 419.761 336 417 336C414.239 336 412 333.761 412 331C412 328.239 414.239 326 417 326C419.761 326 422 328.239 422 331Z" stroke="black" strokeWidth="10"/>
                        <Circle cx="256" cy="331" r="38.5" stroke="black" strokeWidth="15"/>
                        <Path d="M261 331C261 333.761 258.761 336 256 336C253.239 336 251 333.761 251 331C251 328.239 253.239 326 256 326C258.761 326 261 328.239 261 331Z" stroke="black" strokeWidth="10"/>
                        </G>
                        <Defs>
                        <ClipPath id="clip0_1_51">
                        <Rect width="512" height="377" fill="white"/>
                        </ClipPath>
                        </Defs>
                      </Svg>
                    </View>
                    <View style={{width: '300px'}}>
                      <View style={styles.info}>
                        <Text style={styles.infoTitle}>Informacion de elaboracion</Text>
                        <Text style={styles.infoItem}>Matadero: {lote["info_elaboracion"]["nombre_matadero"]}</Text>
                        <Text style={styles.infoItem}>Fecha de sacrificio: {lote["info_elaboracion"]["fecha_sacrificio"]}</Text>
                        <Text style={styles.infoItem}>Tiempo de elaboracion: {lote["info_elaboracion"]["tiempo_elaboracion"]}</Text>
                        <Text style={styles.infoItem}>Temperatura: {lote["info_elaboracion"]["temperatura"]}</Text>
                        <Text style={styles.infoItem}>Humedad: {lote["info_elaboracion"]["humedad"]}</Text>
                        <Text style={styles.infoItem}>Codigo de carne: {hash}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    );
  }
  return document;
}

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
    this.setState({ infoCarne: carne });
    if (carne.length > 0) {
      const lote = await web3.getLote(carne["lote"], true);
      //console.log(lote);
      this.setState({ infoLote: lote });
    }
  }

  render() {
    let success = 'd-none';
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
                  <img src={production} className='w-75' alt='ganado' />
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
                  <img src={transport} className='w-75' alt='transporte' />
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
                  <img src={elaboration} className='w-75' alt='elaboracion' />
                </div>
              </div>
              <div className='col-12 col-sm-8'>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item fw-bold'>Informacion de elaboracion</li>
                  <li className='list-group-item'>Matadero: {lote["info_elaboracion"]["nombre_matadero"]}</li>
                  <li className='list-group-item'>Fecha de sacrificio: {lote["info_elaboracion"]["fecha_sacrificio"]}</li>
                  <li className='list-group-item'>Tiempo de elaboracion: {lote["info_elaboracion"]["tiempo_elaboracion"]}</li>
                  <li className='list-group-item'>Temperatura: {lote["info_elaboracion"]["temperatura"]}</li>
                  <li className='list-group-item'>Humedad: {lote["info_elaboracion"]["humedad"]}</li>
                  <li className='list-group-item text-break'>Codigo de carne: {lote["info_elaboracion"]["hash_carne"]}</li>
                </ul>
              </div>
            </div>
          </>
        );
        success = '';
      }
    }
    return (
      <div>
        <nav className="navbar navbar-expand-sm" style={{backgroundColor: '#2d620e'}}>
          <div className='container-fluid'>
            <div className='px-4'>
              <div className={success}>
                <PDFDownloadLink document={<MyDocument lote={this.state.infoLote} />} fileName='informacion-carne.pdf'>
                  <img src={download} role='button' title='Descargar' alt='descargar' />
                </PDFDownloadLink>
              </div>
            </div>
            <form className="d-flex" onSubmit={this.handleSubmit}>
              <input className="form-control me-2" type="search" id="codCarne" placeholder="Codigo de carne" onChange={this.handleChange} />
              <button className="btn btn-dark" type="submit">Buscar</button>
            </form>
          </div>
        </nav>
        <div className='container-fluid px-3 py-4'>
          <h1>
            Informacion de la carne
          </h1>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <div className='fs-4'>{info}</div>
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
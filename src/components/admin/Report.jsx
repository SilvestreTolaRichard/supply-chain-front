import React, { Component } from 'react'
import Web3Connection from '../../modules/Web3Connection'
import download from '../../img/arrow-thick-to-bottom.svg'

import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

// Create styles
const styles = StyleSheet.create({
  rowFinal: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'center'
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
    padding: '32px'
  },
  title: {
    fontSize: '36px',
    marginBottom: '16px'
  },
  table: {
    width: '100%',
    fontSize: '11px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    borderTop: '1px solid black',
    paddingTop: 8,
    paddingBottom: 8,
  },
  header: {
    borderTop: 'none',
  },
  bold: {
    fontWeight: 'bold',
  },
  // So Declarative and unDRY
  row10: {
    width: '9.5%',
    paddingLeft: '5px',
  },
  row125: {
    width: '12.5%',
    paddingLeft: '5px'
  },
  row75: {
    width: '7.5%',
    paddingLeft: '5px'
  },
  row5: {
    width: '5%',
    paddingLeft: '5px',
  },
  fs: {
    fontSize: '12px'
  }
});

const MyDocument = ({lotes, info}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page} orientation="landscape">
        <View>
          <Text style={styles.title}>
            Reporte
          </Text>
          <View style={styles.table}>
            <View style={[styles.row, styles.bold, styles.header]}>
              <Text style={styles.row5}>Id lote</Text>
              <Text style={styles.row125}>Lugar crianza</Text>
              <Text style={styles.row125}>Alimento</Text>
              <Text style={styles.row75}>ganado</Text>
              <Text style={styles.row10}>Fecha         transporte</Text>
              <Text style={styles.row10}>Tiempo        transporte</Text>
              <Text style={styles.row125}>Lugar destino</Text>
              <Text style={styles.row125}>Matadero</Text>
              <Text style={styles.row10}>Fecha          sacrificio</Text>
              <Text style={styles.row10}>Tiempo       elaboracion</Text>
            </View>
            {lotes.map((lote, i) => (
              <View key={i} style={styles.row} wrap={false}>
                <Text style={styles.row5}>{lote["id_lote"]}</Text>
                <Text style={styles.row125}>{lote["lugar_crianza"]}</Text>
                <Text style={styles.row125}>{lote["alimento"]}</Text>
                <Text style={styles.row75}>{lote["ganado"]}</Text>
                <Text style={styles.row10}>{lote["info_transporte"]["fecha_transporte"]}</Text>
                <Text style={styles.row10}>{lote["info_transporte"]["tiempo_transporte"]}</Text>
                <Text style={styles.row125}>{lote["info_transporte"]["lugar_destino"]}</Text>
                <Text style={styles.row125}>{lote["info_elaboracion"]["nombre_matadero"]}</Text>
                <Text style={styles.row10}>{lote["info_elaboracion"]["fecha_sacrificio"]}</Text>
                <Text style={styles.row10}>{lote["info_elaboracion"]["tiempo_elaboracion"]}</Text>
              </View>
            ))}
          </View>
          <Text style={{padding: '12px 0'}}>Información de los registros</Text>
          <View style={styles.fs}>
            <Text>Cantidad de bloque: {info.blocks}</Text>
            <Text>Cantidad de lotes: {info.lotes}</Text>
            <Text>Cantidad de lotes transportados: {info.transportados}</Text>
            <Text>Cantidad de lotes elaborados: {info.elaborados}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export class Report extends Component {
  constructor() {
    super();
    this.state = { 
      lotes: [],
      blocks: 0
    };
  }

  async componentDidMount() {
    let web3Connection = new Web3Connection();
    await web3Connection.init();
    let lotes = await web3Connection.getLotes();
    let numblocks = await web3Connection.getCantBlocks();
    this.setState({
      lotes: lotes,
      blocks: numblocks
    });
  }

  render() {
    let info = {
      blocks: 0,
      lotes: 0,
      transportados: 0,
      elaborados: 0
    };
    let success = false;
    let items = [];
    if (this.state.lotes.length > 0) {
      info.lotes = this.state.lotes.length;
      items = this.state.lotes.map((lote, i) => {
        if (lote["transportado"]){
          info.transportados++;
          if (lote["elaborado"]){
            info.elaborados++;
          }
        }
        return (
          <tr key={i}>
            <th scope="row">{lote["id_lote"]}</th>
            <td>{lote["lugar_crianza"]}</td>
            <td>{lote["alimento"]}</td>
            <td>{lote["ganado"]}</td>
            <td>{lote["info_transporte"]["fecha_transporte"]}</td>
            <td>{lote["info_transporte"]["tiempo_transporte"]}</td>
            <td>{lote["info_transporte"]["lugar_destino"]}</td>
            <td>{lote["info_elaboracion"]["nombre_matadero"]}</td>
            <td>{lote["info_elaboracion"]["fecha_sacrificio"]}</td>
            <td>{lote["info_elaboracion"]["tiempo_elaboracion"]}</td>
          </tr>
        );
      });
      success = true;
      info.blocks = this.state.blocks;
    }
    return (
      <div>
        <nav className="navbar navbar-expand-sm p-3" style={{backgroundColor: '#2d620e'}}>
          <div className='container-fluid'>
            <div className='px-2'>
              <div className={success}>
                <PDFDownloadLink document={<MyDocument lotes={this.state.lotes} info={info} />} fileName='reporte.pdf'>
                  <img src={download} role='button' title='Descargar' alt='descargar' />
                </PDFDownloadLink>
              </div>
            </div>
          </div>
        </nav>
        <div className='container-fluid px-3 py-4'>
          <div className='px-3'>
            <div>
              <h1>
                Reporte
              </h1>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Id lote</th>
                    <th scope="col">Lugar crianza</th>
                    <th scope="col">Alimento</th>
                    <th scope="col">Ganado</th>
                    <th scope="col">Fecha transporte</th>
                    <th scope="col">Tiempo transporte</th>
                    <th scope="col">Lugar destino</th>
                    <th scope="col">Matadero</th>
                    <th scope="col">Fecha sacrificio</th>
                    <th scope="col">Tiempo elaboracion</th>
                  </tr>
                </thead>
                <tbody>
                  {items}
                </tbody>
              </table>
              <div>
                <div className="py-2 fs-4">Información de los registros</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Cantidad de blocks: {info.blocks}</li>
                  <li className="list-group-item">Cantidad de lotes: {info.lotes}</li>
                  <li className="list-group-item">Cantidad de lotes transportados: {info.lotes}</li>
                  <li className="list-group-item">Cantidad de lotes elaborados:  {info.lotes}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

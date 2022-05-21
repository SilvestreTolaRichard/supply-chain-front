import Web3 from 'web3';
import contract from '../build/SupplyChain.json';
import sha256 from './sha256';

export default class Web3Connection {

  //web3 es la conexion con la blockchain
  web3;
  //supplyChain es el contrato inteligente con el cual se comunica con la red
  supplyChain;
  //ready si es true la conexion web3 se realizo exitosamente
  ready = false;
  
  async init() {
    await this.connectWeb3();
    this.supplyChain = new this.web3.eth.Contract(contract.abi, contract.networks[5777].address);
  }

  //connectWeb3 conecta con web3 para comunicarse con la blockchain
  async connectWeb3() {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.givenProvider;
    } else {
      alert('Necesita instalar metamask');
    }
    this.web3 = new Web3(provider);
  }

//getLote obtiene un lote de la blockchain segun su hash
  async getLote(idLote, byHash=false) {
    let lote = [];
    let hashlote;
    if (byHash) {
      hashlote = idLote;
    } else {
      hashlote = await sha256(idLote);
    }
    const accounts = await await this.getAccounts();
    try {
      lote = await this.supplyChain.methods.getLote(hashlote).call({
        from: accounts[0],
      });
      if (!lote["init"]) lote = [];
    } catch (error) {
      console.log('No network conection');
    }
    return lote;
  }

  //getLotes obtiene todos los lotes de la blockchain segun su hash
  async getLotes() {
    let lotes = [];
    let accounts = await this.getAccounts();
    try {
      lotes = await this.supplyChain.methods.getLotes().call({
        from: accounts[0],
      });
    } catch (error) {
      console.log('No network conection');
    }
    return lotes;
  }

  // setLote envia inforacion de un nuevo lote a al contrato inteligente para guardarlo en la blockchain
  async setLote(idLote, cantidadGanado, lugarCrianza, alimento) {
    const hashlote = await sha256(idLote);
    const accounts = await this.getAccounts();
    await this.supplyChain.methods.setLote(hashlote, idLote, cantidadGanado, lugarCrianza, alimento).send({
      from: accounts[0],
    }).then(
      res => console.log('guardado'),
      err => console.log(err)
    );
  }

  // setInfoTransporte envia inforacion del transporte del lote a al contrato inteligente para guardarlo en la blockchain
  async setInfoTransporte(idLote, lugarOrigen, lugarDestino, fechaTransporte, tiempoTransporte) {
    const hashlote = await sha256(idLote);
    const accounts = await this.getAccounts();
    await this.supplyChain.methods.setInfoTransporte(hashlote, lugarOrigen, lugarDestino, fechaTransporte, tiempoTransporte).send({
      from: accounts[0],
    }).then(
      obj => console.log('guardado'),
      err => console.log(err)
    );
  }

  // setInfoElaboracion envia inforacion de la elaboracion del lote a al contrato inteligente para guardarlo en la blockchain
  async setInfoElaboracion(idLote, matadero, temperatura, humedad, tiempoElaboracion, fechaElaboracion, hashCarne) {
    const hashlote = await sha256(idLote);
    const accounts = await this.getAccounts();
    await this.supplyChain.methods.setInfoElaboracion(hashlote, matadero, temperatura, humedad, tiempoElaboracion, fechaElaboracion, hashCarne).send({
      from: accounts[0],
    }).then(
      obj => console.log('guardado'),
      err => console.log(err)
    );
  }

  //getCarne la carne
  async getCarne(hashCarne) {
    let carne = [];
    const accounts = await this.getAccounts();
    try {
      carne = await this.supplyChain.methods.getCarne(hashCarne).call({
        from: accounts[0],
      });
      if (!carne["init"]) carne = [];
    } catch (error) {
      console.log('No network conection');
    }
    return carne;
  }

  //getCarne toda la info de la carne
  async getInfoCarne(hashCarne) {
    let carne = [];
    const accounts = await this.getAccounts();
    try {
      carne = await this.supplyChain.methods.getInfoCarne(hashCarne).call({
        from: accounts[0],
      });
    } catch (error) {
      console.log('No network conection');
    }
    return carne;
  }

  //getAccount devuelve la cuenta metamask
  async getAccounts() {
    let accounts = [];
    accounts = await this.web3.eth.requestAccounts().catch((error) => {
      if (error.code === 4001) {
        // EIP-1193 userRejectedRequest error
        console.log('Please connect to MetaMask.');
      } else {
        console.error(error);
      }
    });
    return accounts;
  }

  //isReady devuelve true si la conexion se realizo exitosamente
  isReady() {
    return this.ready;
  }

}
import Web3 from 'web3'; 
import contract from './build/SupplyChain.json';
import { AppRouter } from './routers/AppRouter';

//web3 es la conexion con la blockchain
let web3;
//supplyChain es el contrato inteligente con el cual se comunica con la red
let supplyChain;


//connectWeb3 conecta con web3 para comunicarse con la blockchain
const connectWeb3 = async () => {
  let provider;
  if(window.ethereum) {
    provider = window.ethereum;
  } else if(window.web3) {
    provider = window.web3.givenProvider;
  } else {
    alert('Necesita instalar metamask');
  }
  web3 = new Web3(provider);
}

// esta funcion se ejecuta cuando se carga la pagina
window.onload = async () => {
  await connectWeb3();
  supplyChain = new web3.eth.Contract(contract.abi, contract.networks[5777].address);
  //setLote("idlote2", 75, "cbba", "soja");
  //setLote("idlote3", 65, "tarija", "soja");
  //await setInfoTransporte("idlote2", "lugarC", "lugarD", "22-04-2022", "5 dias");
  //await setInfoElaboracion("idlote2", "mataderoB", "8.5 C°", "22%", "2 dias", "25-04-2022", "idcarne2");
  let lote = await getLote("idlote3");
  console.log(lote);
}

//getLote obtiene un lote de la blockchain segun su hash
export async function getLote(idLote) {
  const hashlote = await sha256(idLote);
  const accounts = await web3.eth.requestAccounts();
  const lote = await supplyChain.methods.getLote(hashlote).call({
    from: accounts[0],
  });
  return lote;
}

// setLote envia inforacion de un nuevo lote a al contrato inteligente para guardarlo en la blockchain
export async function setLote(idLote, cantidadGanado, lugarCrianza, alimento) {
  const hashlote = await sha256(idLote);
  const accounts = await web3.eth.requestAccounts();
  await supplyChain.methods.setLote(hashlote, idLote, cantidadGanado, lugarCrianza, alimento).send({
    from: accounts[0],
  }).then(
    obj => console.log('guardado'),
    err => console.log(err)
  );
}

// setInfoTransporte envia inforacion del transporte del lote a al contrato inteligente para guardarlo en la blockchain
export async function setInfoTransporte(idLote, lugarOrigen, lugarDestino, fechaTransporte, tiempoTransporte) {
  const hashlote = await sha256(idLote);
  const accounts = await web3.eth.requestAccounts();
  await supplyChain.methods.setInfoTransporte(hashlote, lugarOrigen, lugarDestino, fechaTransporte, tiempoTransporte).send({
    from: accounts[0],
  }).then(
    obj => console.log('guardado'),
    err => console.log(err)
  );
}

// setInfoElaboracion envia inforacion de la elaboracion del lote a al contrato inteligente para guardarlo en la blockchain
export async function setInfoElaboracion(idLote, matadero, temperatura, humedad, tiempoElaboracion, fechaElaboracion, codigoCarne) {
  const hashlote = await sha256(idLote);
  const hashCarne = await sha256(codigoCarne);
  const accounts = await web3.eth.requestAccounts();
  await supplyChain.methods.setInfoElaboracion(hashlote, matadero, temperatura, humedad, tiempoElaboracion, fechaElaboracion, hashCarne).send({
    from: accounts[0],
  }).then(
    obj => console.log('guardado'),
    err => console.log(err)
  );
}

//getCarne obtiene la info de la carne que contiene el hash del lote
async function getCarne(idCarne) {
  const hashcarne = await sha256(idCarne);
  const accounts = await web3.eth.requestAccounts();
  const carne = await supplyChain.methods.getCarne(hashcarne).call({
    from: accounts[0],
  });
  return carne;
}

// esta funcion devuelve el hash de un mensage
async function sha256(message) {
  // encode as UTF-8
  const msgBuffer = new TextEncoder('utf-8').encode(message);
  // hash the message
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  // convert bytes to hex string                  
  const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
  return hashHex;
}

function App() {
  return (
    <AppRouter />
  );
}

export default App;

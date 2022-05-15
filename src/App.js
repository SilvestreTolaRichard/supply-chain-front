import logo from './logo.svg';
import './App.css';
import Web3 from 'web3'; 
import contract from './build/SupplyChain.json';

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
  await web3.eth.getAccounts().then(console.log);
  supplyChain = new web3.eth.Contract(contract.abi, contract.networks[5777].address);

  //console.log(supplyChain);
  //getLote("hashlote1");
  //setLote("hashlote2", "idlote2", 75, "cbba", "soja");
  //getLote("hashlote2");
}

//getLote obtiene un lote de la blockchain segun su hash
async function getLote(hashlote) {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
  const lote = await supplyChain.methods.getLote(hashlote).call({
    from: accounts[0],
  });
  console.log(lote);
}

// setLote envia inforacion de un nuevo lote a al contrato inteligente para guardarlo en la blockchain
async function setLote(hashlote, idLote, cantidadGanado, lugarCrianza, alimento) {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
  await supplyChain.methods.setLote(hashlote, idLote, cantidadGanado, lugarCrianza, alimento).send({
    from: accounts[0],
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

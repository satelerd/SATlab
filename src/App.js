import './App.css';
import Logo from './components/logo/Logo.js';
import Particles from './components/particles/Particles'
import Cards from './components/cards/Cards.js'
import Data from "./components/data/Data"

function App() {
  const LaunchesData = Data()

  return (
    <div className="App">
      <header className='center'>
        <Logo />
      </header>
      <body>
        <div className="bg">
          <Particles className="particles" id="DATO FREAK: El color de las particulas se llama COSMIC LATTE, representa el color promedio del universo."/>
        </div>
        <div className="tarjetas">
          <Cards data={LaunchesData} />
        </div>
      </body>
    </div>
  );
}

export default App;

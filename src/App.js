import './App.css';
import Logo from './components/logo/Logo.js';
import Particles from './components/particles/Particles'
import Cards from './components/cards/Cards.js'
 

function App() {
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
          <Cards/>
        </div>
      </body>
    </div>
  );
}

export default App;

import './App.css';
import Logo from './components/logo/Logo.js';
import Particles from './components/particles/Particles'
import Cards from './components/cards/Cards.js'
import Data from "./components/data/Data"

const launches = [ 
  { id: 1, rocket: "", launch_provider: "", misionName: "", time: "" }, { id: 2, rocket: "", launch_provider: "", misionName: "", time: "" }, { id: 3, rocket: "", misionName: "", time: "" }, 
  { id: 4, rocket: "", launch_provider: "", misionName: "", time: "" }, { id: 5, rocket: "", launch_provider: "", misionName: "", time: "" }, { id: 6, rocket: "", misionName: "", time: "" }, 
  { id: 7, rocket: "", launch_provider: "", misionName: "", time: "" }, { id: 8, rocket: "", launch_provider: "", misionName: "", time: "" }, { id: 9, rocket: "", misionName: "", time: "" },
  { id: 10, rocket: "", launch_provider: "", misionName: "", time: "" } 
];

function App() {
  // Toma de los datos que necesitamos del API
  const launchesData = Data()
  var cont = 0
  launchesData.forEach(launch => {
    launches[cont].rocket = launch.rocket.configuration.name
    launches[cont].launch_provider = launch.launch_service_provider.name
    launches[cont].misionName = launch.name
    launches[cont].time = launch.net
    cont++
  })

  return (
    <div className="App">
      <header className='center'>
        <Logo />
      </header>
      <div className="body">
        <div className="bg">
          <Particles className="particles" id="DATO FREAK: El color de las particulas se llama COSMIC LATTE, representa el color promedio del universo."/>
        </div>
        <div className="tarjetas">
          <Cards data={launches} />
        </div>
      </div>
    </div>
  );
}

export default App;

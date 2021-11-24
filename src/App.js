import './App.css';
import Logo from './components/logo/Logo.js';
import Particles from './components/particles/Particles';
import Cards from './components/cards/Cards.js';
import Data from "./components/data/Data";

const launches = [
  { id: 1, rocket: "", launch_provider: "", misionName: "", time: "", year: "", month: "", day: "", hour: "", imagen: "" },
  { id: 2, rocket: "", launch_provider: "", misionName: "", time: "", year: "", month: "", day: "", hour: "", imagen: "" },
  { id: 3, rocket: "", launch_provider: "", misionName: "", time: "", year: "", month: "", day: "", hour: "", imagen: "" },
  { id: 4, rocket: "", launch_provider: "", misionName: "", time: "", year: "", month: "", day: "", hour: "", imagen: "" },
  { id: 5, rocket: "", launch_provider: "", misionName: "", time: "", year: "", month: "", day: "", hour: "", imagen: "" },
  { id: 6, rocket: "", launch_provider: "", misionName: "", time: "", year: "", month: "", day: "", hour: "", imagen: "" },
  { id: 7, rocket: "", launch_provider: "", misionName: "", time: "", year: "", month: "", day: "", hour: "", imagen: "" },
  { id: 8, rocket: "", launch_provider: "", misionName: "", time: "", year: "", month: "", day: "", hour: "", imagen: "" },
  { id: 9, rocket: "", launch_provider: "", misionName: "", time: "", year: "", month: "", day: "", hour: "", imagen: "" },
  { id: 10, rocket: "", launch_provider: "", misionName: "", time: "", year: "", month: "", day: "", hour: "", imagen: "" }
];

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

function App() {
  // Toma de los datos que necesitamos del API
  const launchesData = Data();

  var cont = 0;

  launchesData.forEach(launch => {

    launches[cont].rocket = launch.rocket.configuration.name;
    launches[cont].launch_provider = launch.launch_service_provider.name;
    launches[cont].imagen = launch.image;

    launches[cont].time = launch.net;
    console.log(launch.net)
    var finder = 0;
    var year = "";
    var month = "";
    var day = "";
    var hour = "";

    for (let letter = 0; letter < (launch.net).length; letter++) {

      if (launch.net[letter] === "-" || launch.net[letter] === "T" || launch.net[letter] === "Z" || launch.net[letter] === ":") {
        finder++;
        if (finder === 1) {
          launches[cont].year = year;
          continue
        }
        else if (finder === 2) {
          launches[cont].month = meses[parseInt(month) - 1];
          continue
        }
        else if (finder === 3) {
          launches[cont].day = day;
          continue
        }
        else if (finder === 4) {
          launches[cont].hour = hour;
        }

        else if (finder === 5) {
          launches[cont].hour = hour;
          continue
        }

        else if (finder === 6) {
          // Si aun no tiene hora, TBD
          if (hour === "00:00") {
            hour = "TBD"
          };
          continue
        }
      }

      // Si estamos en el año
      if (finder === 0) {
        year = year + launch.net[letter];
      }
      // Si estamos en el mes
      else if (finder === 1) {
        month = month + launch.net[letter];
      }
      // Si estamos en el dia
      else if (finder === 2) {
        day = day + launch.net[letter];
      }
      // Si estamos en la hora
      else if (finder === 3 || finder === 4) {
        hour = hour + launch.net[letter];

      }
    };


    // Arreglar el texto  (work in progressssssssssss)
    launches[cont].misionName = launch.name
    // var strFound = false
    // console.log(launches[cont].misionName)
    // for(let letter; letter<(launches[cont].misionName).length; letter++){
    //   // console.log(letter)
    //   if (letter === "|") {
    //     console.log("tamoo")
    //   }
    // }

    cont++
  })


  return (
    <div className="App">
      <header className='center'>
        <Logo />
      </header>
      <div className="body">
        <div className="bg">
          <Particles className="particles" id="DATO FREAK: El color de las particulas se llama COSMIC LATTE, representa el color promedio del universo." />
        </div>
        <div className="tarjetas">
          <Cards data={launches} />
        </div>
      </div>
    </div>
  );
}

export default App;

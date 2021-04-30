import './App.css';
import Logo from './components/logo/Logo.js';
import Particles from './components/particles/Particles'


function App() {
  return (
    <div className="App">
      <header className='center'>
        <Logo />
      </header>
      <body>
        <div className="tarjetas">
          {/* <Block/>
          <Block/>
          <Block/>
          <Block/>
          <Block/>
          <Block/>
          <Block/> */}
          {/* <DataBlock/> */}
        </div>
        <div className="bg">
          <Particles/>
        </div>
      </body>
    </div>
  );
}

export default App;

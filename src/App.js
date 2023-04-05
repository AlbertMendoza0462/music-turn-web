import './App.css';
import CancionesSiguientes from './Components/CancionesSiguientes';
import ElegirCancion from './Components/ElegirCancion';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <CancionesSiguientes />
        <ElegirCancion />
      </header>
    </div>
  );
}

export default App;

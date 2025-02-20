import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FileSelector from './components/FileSelector';
import SuMoTypeSelector from './components/SuMoTypeSelector';
import OutputResponseSelector from './components/OutputResponseSelector';
import MetaModelingUX from './components/MetaModelingUX';

function App() {
  return (
    <div className="App">
      <MetaModelingUX tabTitle="Uncertainty Quantification" headerType="application-header">
        {/* <Header customText="SuMo building & validation" />*/}
        <FileSelector defaultFileName="./README.md" />
        <SuMoTypeSelector />
        <OutputResponseSelector />
        blabla
      </MetaModelingUX >
      {/* The default value doesnt seem to be working... The variable 
      is well set but the "fileselector" object is not really picking it up.
      Well don't go crazy, I will be using Z43 UI library.
      This just has to be minimally functional.
      TODO Does it even make sense to work in any layout, or are there
      templates also for that in Z43 UI Components? */}

      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;

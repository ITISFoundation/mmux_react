import './App.css';
import UQ from './UQ';
import SuMoBuildingValidation from './SuMoBuilding';

function App() {
  return (
    // Will do as Tabs in the future. For now keep it easy in a single page.
    <div className="App">
      <SuMoBuildingValidation />
      <UQ />
    </div>
  );
}

export default App;

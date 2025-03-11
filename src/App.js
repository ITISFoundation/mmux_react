import './App.css';
import UQ from './UQ';
import SuMoBuildingValidation from './SuMoBuilding';
import Navigation from './components/Navigation';
import { useState } from 'react';
import { createTheme } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';

function App() {
  const steps = [
    { id: 1, label: "Setup" },
    { id: 2, label: "SuMo" },
    { id: 3, label: "UQ" }
  ];
  const [activeStep, setActiveStep] = useState(steps[0].id)

  const theme = createTheme({
    palette: {primary: deepPurple},
    components: {
      MuiButton: {
        defaultProps: {
          // disableRipple: true,
          // disableElevation: true,
          },
        styleOverrides:{
          root:{
            borderRadius: "35px",
          }
        }
      }
    },
    styleOverrides: {
      root: {
        width: "100%"
      }
    }



  })
  return (
    <ThemeProvider theme={theme}>
    <div className="background-card">
      {/* Top, it shows the different "tabs" as if it were AppMode */}
      <div className='navigation'>
        <Navigation steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
      </div>

      {/* Shows the active tab 
      PS I dont want to re-load the page when the state changes 
      (bcs that would delete previous state of those pages)
      rather keep them alive and only change whether they are visible
      */}
      <div className={activeStep === 2 ? "active": "non-active"}>
        <SuMoBuildingValidation />
      </div>
      <div className={activeStep === 3 ? "active": "non-active"}>
        <UQ />
      </div>

      {/* Shows additional elements within the page (oSPARC logo, etc) 
      TODO osparc logo on bottom left; access to runner status wheel on bottom right */}
      <div className='AppLogo'>
        oSPARC logo
      </div>

    </div>
    </ThemeProvider>
  );
}

export default App;

import './App.css';
import UQ from './UQ';
import SuMoBuildingValidation from './SuMoBuilding';
import Navigation from './components/Navigation';
import { useState } from 'react';
import JobIndex from "./components/JobIndex"


function App() {
  const steps = [
    // { id: 1, label: "Setup" },
    { id: 2, label: "SuMo" },
    { id: 3, label: "UQ" }
  ];
  const [activeStep, setActiveStep] = useState(steps[0].id)
  
  function ArrowsWrapper(props) {
    // OPTION 1: In the middle of the screen (not-widthstanding the size of the MMUX box)
    // return (
    // <div style={{ display: 'flex', justifyContent: "space-between", marginLeft:"5px", marginRight: "5px",  marginBottom:"3px", marginTop:"10px"}}>
    //   <div style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(50%)', cursor: 'pointer' }} onClick={() => setActiveStep(prev => Math.max(prev - 1, steps[0].id))}>
    //     &#9664; 
    //   </div>
    //   <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={() => setActiveStep(prev => Math.min(prev + 1, steps[steps.length - 1].id))}>
    //     &#9654;
    //   </div>
    //   {props.children}
    // </div>
    // )
  
    // OPTION 2: WELL CENTERED VERTICALLY wrt the MMUX box
    return (
      <div style={{ position: 'relative', justifyContent: "space-between", width: '100%' }}>
          <div style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={() => setActiveStep(prev => Math.max(prev - 1, steps[0].id))}>
            &#9664; 
          </div>
            <div style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={() => setActiveStep(prev => Math.min(prev + 1, steps[steps.length - 1].id))}>
            &#9654;
          </div>
          {props.children}
      </div>
  
    )
  }

  return (
    <ArrowsWrapper>
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

        {/* Function Index and Job Index */}
        <div className={activeStep === 99 ? "active": "non-active"}>
          <JobIndex />
        </div>

        {/* Shows additional elements within the page (oSPARC logo, etc) 
        TODO osparc logo on bottom left; access to runner status wheel on bottom right */}
        {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '100%' }}></div> */}
        <div style={{ display: 'flex', justifyContent: "space-between", marginLeft:"5px", marginRight: "5px",  marginBottom:"3px", marginTop:"10px"}}>
          <img src='osparc-logo.png' height={25} />
          <img src="osparc-loading-symbol.png" height={25} alt="Jobs" onClick={()=>setActiveStep(99)}/>
        </div>
      </div>
    </ArrowsWrapper>

  );
}

export default App;

import React from 'react';
import { Button } from '@mui/material';
import './Navigation.css';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
      main: '#392061',
      background: "#222222",
      inactive: "#222222",
    //   light: '#E9DB5D',
    //   dark: '#A29415',
    //   contrastText: '#242105',
    },
});


function Navigation(props) {
  return (
    <div className="nav-bar">
      {props.steps.map((step) => (
        <Button
            key={step.id}
            disableRipple
            disableElevation   
            variant={props.activeStep === step.id ? "contained" : "outlined"}
            onClick={() => props.setActiveStep(step.id)}
            // sx={{bgcolor:props.activeStep === step.id ? theme.palette.main : theme.palette.inactive}}
        >
          {step.id}: {step.label}
        </Button>
      ))}
    </div>
  );
}
export default Navigation;
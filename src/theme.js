import { createTheme } from "@mui/material";
import { deepPurple } from '@mui/material/colors';

export function setupTheme() {
    return createTheme({
        palette: { primary: deepPurple },
        // shape: { borderRadius: 10 }
        components: {
            MuiButton: {
                defaultProps: {
                    disableRipple: true,
                    disableElevation: true,
                },
                styleOverrides: {
                    root: {
                        backgroundColor: 'white', // Use the light version of the palette
                        '&:hover': {
                            backgroundColor: deepPurple[300], // Slightly darker on hover
                        },
                    },
                },
            },
        },
    });
}
import React from 'react';
import { Card, Typography } from "@mui/material";
import './Header.css';


function Header(props) {
    return (
        <Card className={props.headerType}>
            <Typography variant="h5" color="white" component="div">
                MetaModelingUX  -  {props.tabTitle}
            </Typography>
        </Card>
    );
};

export default Header;
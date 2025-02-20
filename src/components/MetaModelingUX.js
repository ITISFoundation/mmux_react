import { useState } from "react";
import { Card, CardContent, Typography, Button, Collapse } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import "./MetaModelingUX.css";
import CollapsibleSection from "./CollapsibleSection";


export default function MetaModelingUX(props) {
    return (
        <Card className="background-card">
            <Card className={props.headerType}>
                <Typography variant="h5" color="white" component="div">
                    MetaModelingUX  -  {props.tabTitle}
                </Typography>
            </Card>
            {props.children}
        </Card>
    );
}
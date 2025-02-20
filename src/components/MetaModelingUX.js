import { useState } from "react";
import { Card, CardContent, Typography, Button, Collapse } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import "./MetaModelingUX.css";
import CollapsibleSection from "./CollapsibleSection";


export default function MetaModelingUX(props) {
    return (


        <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "16px" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
                {/* Header */}
                <Card variant="outlined" style={{ marginBottom: "16px", backgroundColor: "#0F1B2D", padding: "16px", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}>
                    <Typography variant="h5" style={{ fontWeight: "bold", color: "#FFFFFF" }}>
                        MetaModeling UX - Surrogate Model Building & Validation
                    </Typography>
                </Card>

                {/* Sections */}
                <CollapsibleSection title="Sampling & Surrogate Model">
                    <Typography>Sampling: <Button variant="contained">Select</Button></Typography>
                    <Typography>Surrogate Model: <Button variant="contained">Gaussian Process</Button></Typography>
                </CollapsibleSection>

                <CollapsibleSection title="Surrogate Model Analysis and Validation" previewText="View cross-validation metrics and response curves">
                    <Typography>Samples Pairplot</Typography>
                    <Typography>Cross-Validation Metrics: RMSE, MAE, STD</Typography>
                    <Typography>Response Curve & Plane Inspection</Typography>
                </CollapsibleSection>
            </div>
        </div>
    );
}
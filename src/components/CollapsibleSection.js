import { useState } from "react";
import { Card, CardContent, Button, Collapse } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import "./MetaModelingUX.css";



const CollapsibleSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card variant="outlined" className="collapsible-card">
            <Button
                onClick={() => setIsOpen(!isOpen)}
                fullWidth
                className="collapsible-button"
            >
                {isOpen ? <ExpandLess /> : <ExpandMore />} {title}
            </Button>
            <Collapse in={isOpen}>
                <CardContent>{children}</CardContent>
            </Collapse>
        </Card>
    );
};

export default CollapsibleSection;
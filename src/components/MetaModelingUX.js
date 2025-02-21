import { Card } from "@mui/material";
import "./MetaModelingUX.css";
import Header from "./Header";


export default function MetaModelingUX(props) {
    return (
        <Card className="background-card">
            <Header tabTitle={props.tabTitle} headerType={props.headerType} />
            {/* <Header props={props} /> */}
            {/* <Header props=props /> */}
            {/* <Header {props} /> */}
            {props.children}
            {/* TODO osparc logo on bottom left; access to runner status wheel on bottom right */}
        </Card>
    );
}
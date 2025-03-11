import { Card } from "@mui/material";
import "./MetaModelingUX.css";
import Header from "./Header";


export default function MetaModelingUX(props) {
    return (
        <Card>
            <Header tabTitle={props.tabTitle} headerType={props.headerType} />
            {/* <Header props={props} /> */}
            {/* <Header props=props /> */}
            {/* <Header {props} /> */}
            {props.children}
        </Card>
    );
}
import React, { useState, useEffect } from 'react';
import { Card, Typography, Table, TableRow, TableCell, TableBody, TableHead, Paper, Button } from "@mui/material";
// import ApiClient from '../../functions-api-react-client'; // Importing the folder outside of "components"
// Assuming your folder structure is: project-root/components/your-file.js
// If it's not directly under components/, you can adjust this path accordingly.
// import { ApiClient } from "../functions-api-react-client"; // the "index" in this module is not found -- do I need to npm install it?
import ApiClient from "../functions-api-js-client/src/ApiClient.js";
import FunctionApi from "../functions-api-js-client/src/api/FunctionApi.js";
import { Api } from '@mui/icons-material';
// import FunctionJobApi from "../functions-api-react-client/src/api/FunctionJobApi.js";
// Attempted import error: './ValidationErrorLocInner' does not contain a default export (imported as 'ValidationErrorLocInner').
// ERROR in ./src/functions-api-react-client/src/model/ValidationError.js 58:59-82
// export 'default' (imported as 'ValidationErrorLocInner') was not found in './ValidationErrorLocInner' (module has no exports)


function FunctionIndex(props) {
    const [functions, setFunctions] = useState(
        [
        { id: 1, name: "Example Function 1", input_schema: ["a", "b", "c"], output_schema: ["d", "e"] },
        ]
    );


    function refreshFunctionList() {
        const c = new ApiClient('http://127.0.0.1:8087')
        const t = new FunctionApi(c);
        t.listFunctions(
            (error, response, body) => {
                console.debug("error: ", error)
                console.debug("response: ", response);
                console.debug("body: ", body);
                if (body.statusCode !== 200) {
                    return { type: 'error', message: error.message };
                }
                setFunctions( response)
            }
        )
    }

    function showList(list) {
        // return [list.map(input => `'${input}'`).join(', ')]
        if (list === null) {
            console.log("No input/output schema")
            return [""]



            
        }

        return [list.join(', ')]
    }

    return (
        <Card variant="plain" sx={{ marginBottom: "10px" }}>
            <Typography variant="h4" textAlign={"center"} >
                Function Index
            </Typography>
            <Button onClick={() => refreshFunctionList()}>Refresh Function List</Button>
            <Table component={Paper}>
                <TableHead>
                    <TableRow>
                        {/* Adjust headers based on your data sTableRowucture */}
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Inputs</TableCell>
                        <TableCell>Outputs</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {functions.map(item => (
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{showList(item.input_schema)}  </TableCell>
                            <TableCell>{showList(item.output_schema)}</TableCell>
                            <TableCell align='right'>{<Button variant="contained" onClick={() => handleFunctionClick(item.id)}>Select</Button>}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </Card>

    );
};

export default FunctionIndex;
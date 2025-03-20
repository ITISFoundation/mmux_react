import React, { useState, useEffect } from 'react';
import { Card, Typography, Table, TableRow, TableCell, TableBody, TableHead, Paper, Button } from "@mui/material";
// import ApiClient from '../../functions-api-react-client'; // Importing the folder outside of "components"
// Assuming your folder structure is: project-root/components/your-file.js
// If it's not directly under components/, you can adjust this path accordingly.
// import { ApiClient } from "../functions-api-react-client"; // the "index" in this module is not found -- do I need to npm install it?
import ApiClient from "../functions-api-js-client/src/ApiClient.js";
import FunctionApi from "../functions-api-js-client/src/api/FunctionApi.js";
// import FunctionJobApi from "../functions-api-react-client/src/api/FunctionJobApi.js";
// Attempted import error: './ValidationErrorLocInner' does not contain a default export (imported as 'ValidationErrorLocInner').
// ERROR in ./src/functions-api-react-client/src/model/ValidationError.js 58:59-82
// export 'default' (imported as 'ValidationErrorLocInner') was not found in './ValidationErrorLocInner' (module has no exports)


function FunctionIndex(props) {
    const [functions, setFunctions] = useState([
        { id: 1, name: "Example Function 1", inputs: ["a", "b", "c"], outputs: ["d", "e"] },
    ]);

    function handleFunctionClick(function_id) {
        console.log("Function clicked:", function_id);
        const t = new FunctionApi();
        console.log("FunctionApi:", t)
        // TODO check how API calls (to Flask) were working, and the syntax in general
        // t.listFunctions()
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         return response.json();
        //     })
        //     .then(console.log) // just logging
        //     .catch(error => console.error('Error:', error));
        t.listFunctions(
            (error, response, body) => {
                if (error || response.statusCode !== 200) {
                    return { type: 'error', message: error.message };
                }

                console.log(response);
                console.log(body);
            }
        );
    }

    function showList(list) {
        // return [list.map(input => `'${input}'`).join(', ')]
        return [list.join(', ')]
    }

    return (
        <Card variant="plain" sx={{ marginBottom: "10px" }}>
            <Typography variant="h4" textAlign={"center"} >
                Function Index
            </Typography>
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
                            <TableCell>{showList(item.inputs)}  </TableCell>
                            <TableCell>{showList(item.outputs)}</TableCell>
                            <TableCell align='right'>{<Button variant="contained" onClick={() => handleFunctionClick(item.id)}>Select</Button>}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </Card>

    );
};

export default FunctionIndex;
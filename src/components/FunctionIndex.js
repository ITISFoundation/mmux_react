import React, { useState, useEffect } from 'react';
import { Card, Typography, Table, TableRow, TableCell, TableBody, TableHead, Paper, Button} from "@mui/material";

function FunctionIndex(props) {
    const [functions, setFunctions] = useState([
      {id: 1, name: "Example Function 1", inputs: ["a", "b", "c"], outputs: ["d", "e"]},
    ]);

    function handleFunctionClick(function_id) {
        console.log("Function clicked:", function_id)
    }
    function showList(list) {
        // return [list.map(input => `'${input}'`).join(', ')]
        return [list.join(', ')]
    }
    return (
        <Card variant="plain" sx={{marginBottom:"10px"}}>
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
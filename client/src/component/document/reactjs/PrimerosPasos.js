import React from "react"
import { Typography } from '@material-ui/core';
import   "./Index.css"

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
const Prueva = () => {
  const codeString = '(num) => num + 1';
  return (
    <SyntaxHighlighter language="javascript" style={tomorrow}>
      {codeString}
    </SyntaxHighlighter>
  );
};


function PrimerosPasos (){
    return(
     
         <div className="cont PrimerosPasos"> 
        <Typography style={{fontSize:"bold",marginTop:"10px"}}
         className="Titulo" variant="h4" align="center">
        Primeros Pasos
        </Typography> 
        <br/>
        <div className="cont-1">
        <Typography display="block" align="justify" variant="body1">
        
        </Typography>
        
        </div>
        <Prueva/>
         
        </div>
    
    )
}

export default PrimerosPasos;
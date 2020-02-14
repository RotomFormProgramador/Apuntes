import React from "react"
import { Typography } from '@material-ui/core';
import   "./Index.css"

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';


const sourceC = {
    crearAPP:'npm create-react-app my-name-app',
    startSer:'npm start'
};

const Hcode = (props) => {
  
  return (
    <SyntaxHighlighter language="javascript" style={tomorrow}>
      {props.code}
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

        <Typography display="block"   variant="h5">
        Creacion de aplicacion de React
        </Typography>
        <div className="cont-1">
        <Typography display="block" align="justify" variant="body1">
        La forma mas facil de comenzar con react es creando un aplicacion de react y esto se logro con el siguiente comando en la consola
        </Typography>
        
        </div>
        <Hcode code={sourceC.crearAPP}/>

        <Typography display="block" align="justify" variant="body1">
        Al ejecutar este comando se creara un proyecto que contine todas
        las herramientas de react, las configuraciones nesesarias para el
        funcionamiento (wedpack), y contiene un pequeño proyeto para comenzar a modificar.
        </Typography>

        <br/>
         <Typography display="block" align="justify" variant="body1">
         El archivo contiene tu aplicacion en App.js  que esta ubicado en src/App.js desde
         aqui puedes comenzar  a crear  tu proyecto. Este archivo ya contiene un componente hecho,
         puedes borrar parte de este componete pero deja el div que tiene la clase #App, ya que en este
         div se contruye tu aplicacion.

         </Typography>
        <br/>

        <Typography display="block"   variant="h5">
        Creacion de server para desarrollo
        </Typography>

        <Typography display="block" align="justify" variant="body1">
        Se puede crear facilmente un servidor que ejecuta tu aplicacion con  el siguiente comando 
        </Typography>

        <Hcode code={sourceC.startSer} />

        <br/>
        <br/>
        <br/>



        </div>
    
    )
}

export default PrimerosPasos;



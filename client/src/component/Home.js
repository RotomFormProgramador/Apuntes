import React from "react";
import "./css/Home.css";
import {Typography} from '@material-ui/core'

export default function Home() {
  return (
    <div className="home">
      <div className="cont cont-1">
        <div className="info">
            <Typography variant='h4' >
            Bienvenido a las guia faciles
            </Typography>
            <br/>
            <Typography variant='body1' style={{fontFamily:" 'Courier New', Courier, monospace"}}>
            En esta pagina encontraras la guias mas faciles para aprender sobre 
                desarrollo wed . Veras que en cada guia los ejemplos 
                mostrados son sencillos  mas sin embargo enseñan lo que ocupas saber para 
                para poder generalizar a problemas mas complicados.Tambien habran algunas documentacion  
                que muestran solo las operaciones mas usadas  de las tecnologias, esto lo hago para que ellas 
                personas que se les olvido una parte de tecnologia y lo unico que nesesitan en revisarla rapidamente  para poder 
                aplicarlas.  
            </Typography>
        </div>
      </div>
      <div className="cont cont-2">
      </div>
    </div>
  );
}

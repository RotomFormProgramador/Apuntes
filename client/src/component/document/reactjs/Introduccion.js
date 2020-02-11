import React from 'react';
import { Typography } from '@material-ui/core';
import   "./Index.css"


export default function Introduccion (){
    return(
        <div className="Introduccion"> 
        <Typography style={{fontSize:"bold",marginTop:"10px"}}
         className="Titulo" variant="h4" align="center">
        Introduccion
        </Typography> 
        <br/>
        <div className="cont-1">
        <Typography display="block" align="justify" variant="body1">
        La razon por la que escribo esta guia es por que queria enseñar a la gente 
        a usar react  comenzando con los hooks en vez las clases y ciclos de vida para tener componentes con estado.
        En la guia oficial  de React se comienza  con la construccion de componentes de estados usando clases mas sin embargo pienso que empezar con este enfoque es complicado
        ya que en javascript las clases son algo dificil de entender ademas de que usar clases lleva a la consecuencia de  verbosismo por que usar clases en vez funciones se escribe  menos 
        codigo ademas de que los hoks simplican en la construccion de estados .
        Cuando  descubri los hooks me encantaron por su simplicidad en la construccion de componentes ya 
        que cuando contruia los componentes  usando clases me parecia que hacia malavarismo en javascrip.
        Por esto en esta guia solo enseñare a usar React usando hooks y no clases.Te puedo decir los hooks son de igual de poderos 
        que las clases en la construccion de componentes  y como ejemplo de lo dicho esta pagina wed fue construido sin usar clases.
        </Typography>
        
        </div>
        
        </div>
    )
}
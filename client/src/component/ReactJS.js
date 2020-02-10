import React from 'react'
import './css/ReactJS.css'
import {Typography} from "@material-ui/core"
import {Link,Switch} from "react-router-dom"
import "./document/reactjs/Introduccion.css"


export default function ReactJS (){

    

    return(
        <div className="ReactJS">
        <div className="content">
            <Typography   style={{marginTop:"15px"}} variant="h6" align="center">
                ReactJs
            </Typography>
            <Typography  variant="subtitle1" align="center">
            <Link className="indice">
            Introduccion
            </Link>
            </Typography>
            </div>

        <div className="documentation">
        </div>

        </div>
    )
}
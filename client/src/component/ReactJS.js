import React from 'react'
import './css/ReactJS.css'
import { Typography } from "@material-ui/core"
import { Link, Switch, Route, useRouteMatch } from "react-router-dom"
import Introduccion from "./document/reactjs/Introduccion"
import PrimerosPasos from "./document/reactjs/PrimerosPasos"



export default function ReactJS() {
    let { path, url } = useRouteMatch()
    return (
        <div className="ReactJS">
            <div className="content">
                <Typography style={{ marginTop: "15px" }} variant="h6" align="center">
                    ReactJs
            </Typography>
                <Typography variant="subtitle1" align="center">
                    <Link className="indice" to={`${url}`}>
                        Introduccion
            </Link>
                    <Link className="indice" to={`${url}/PrimerosPasos`}>Primeros Pasos</Link>
                </Typography>
            </div>

            <div className="documentation">
                <Switch>
                    <Route exact path={path}><Introduccion /></Route>
                    <Route path={`${path}/PrimerosPasos`}><PrimerosPasos /></Route>
                </Switch>
            </div>

        </div>
    )
}
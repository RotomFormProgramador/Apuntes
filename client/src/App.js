import React from "react";
import "./App.css";
import Bar from "./component/Bar";
import Home from './component/Home'
import ReactJS  from './component/ReactJS'
import {Switch,Route} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Bar />
            <Switch>
                <Route path="/ReactJS">
                <ReactJS/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark"  >
                <Navbar.Brand  as={Link} to="/">
                    React-Bootstrap
                </Navbar.Brand>

                <Nav className="mr-auto">
                    <Nav.Link className="navegador" as={Link} to="/About">About</Nav.Link>
                    <Nav.Link as={Link} to="/Support">Suport</Nav.Link>

                </Nav>

            </Navbar>
        </div>
    );
}

export default App;

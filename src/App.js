import React from 'react';
import {Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./assets/css/index.scss";
import Routes from './routes/Routes';
function App() {
    const mainContainerClasses = `main-container`;

    return ( < Router >
            <Container fluid className = { mainContainerClasses }>
               {<Routes />}
            </Container>   
        </Router >
    );
}

export default App;
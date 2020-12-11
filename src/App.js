import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import InicioSesion from './pages/InicioSesion'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={InicioSesion}/>
                <Route exact path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

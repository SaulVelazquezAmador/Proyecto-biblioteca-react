import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Home from './pages/Home'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/inicio-registro" component={Inicio}/>
                <Route exact path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

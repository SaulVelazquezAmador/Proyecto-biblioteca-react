import React, {useState} from 'react'
import SideBar from '../components/home/SideBar'
import Inicio from './Inicio'
import Autores from './Autores'
import Editoriales from './Editoriales'
import Clientes from './Clientes'
import Libros from './Libros'
import Prestamos from './Prestamos'
import Usuarios from './Usuarios'
import {useHistory} from 'react-router-dom'

const Home = () =>{

    const [pagina, setPagina] = useState("Inicio")
    const history = useHistory();

    if (!localStorage.getItem("correo")) {
        alert("Debe iniciar sesión")
        history.push("/");
    }

    if (pagina === "Inicio") {

        return(
            <div className="d-flex flex-row">
                <SideBar setPagina={setPagina}/>
                <Inicio title={pagina}/>
            </div>
        )   
    }
    if (pagina === "Prestamos") {
        return(
            <div className="d-flex flex-row">
                <SideBar setPagina={setPagina}/>
                <Prestamos title={pagina}/>
            </div>
        )   
    }
    if (pagina === "Libros") {
        return(
            <div className="d-flex flex-row">
                <SideBar setPagina={setPagina}/>
                <Libros title={pagina}/>
            </div>
        )   
    }
    if (pagina === "Clientes") {
        return(
            <div className="d-flex flex-row">
                <SideBar setPagina={setPagina}/>
                <Clientes title={pagina}/>
            </div>
        )   
    }
    if (pagina === "Editoriales") {
        return(
            <div className="d-flex flex-row">
                <SideBar setPagina={setPagina}/>
                <Editoriales title={pagina}/>
            </div>
        )   
    }
    if (pagina === "Autores") {
        return(
            <div className="d-flex flex-row">
                <SideBar setPagina={setPagina}/>
                <Autores title={pagina}/>
            </div>
        )   
    }
    if (pagina === "Usuarios") {

        return(
            <div className="d-flex flex-row">
                <SideBar setPagina={setPagina}/>
                <Usuarios title={pagina}/>
            </div>
        )   
    }
    // Cerrar Sesión
    if (pagina === "Cerrar Sesión") {
        history.push("/");
    }
}

export default Home
import React from 'react'
import ButtonSidebar from './ButtonSidebar'
import Home from './images/home.svg'
import Prestamos from './images/prestamos.svg'
import Libros from './images/libros.svg'
import Clientes from './images/clientes.svg'
import Editoriales from './images/editoriales.svg'
import Autores from './images/autores.svg'
import Usuarios from './images/usuarios.svg'
import Salir from './images/salir.svg'

const styles = {
    bar:{
        backgroundColor: '#222222',
        width: '20%',
        height: '100vh',
        color: '#fff',
    }
}

const SideBar = (props) =>{

    const {setPagina} = props

    const botones = [
        {name: "Inicio", icon: Home}, 
        {name: "Prestamos", icon: Prestamos}, 
        {name: "Libros", icon: Libros}, 
        {name: "Clientes", icon: Clientes}, 
        {name: "Editoriales", icon: Editoriales}, 
        {name: "Autores", icon: Autores}, 
        {name: "Usuarios", icon: Usuarios}, 
        {name: "Cerrar Sesión", icon: Salir}
    ]

    return(
        <div style={styles.bar}>
            { botones.map((boton, index) => (
                <div key={index}>
                    <ButtonSidebar 
                        title={boton.name}
                        icon={boton.icon}
                        setPagina={setPagina}
                    />
                </div>
            )) }
        </div>
    )
}

export default SideBar
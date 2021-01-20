import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const styles = {
    inputsForm:{
        background: "none",
        fontSize: "24px",
        transition: "border-color .25s ease, box-shadow .25s ease",
        border : "1px solid #a0b3b0",
        color: "#ffffffff"
    },
    botonIniciar:{
        fontSize: "24px",
        backgroundColor: "#01a87a",
        border: "none",
        cursor: 'pointer',
        color: "#ffffffff"
    }
}

const FormularioRegistro = () =>{

    const contenedor = {
            NombreBibliotecario:"",
            ApellidoBibliotecario:"",
            Correo:"",
            Contraseña:""
        }

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [correo, setCorreo] = useState("")
    const [clave, setClave] = useState("")
    const history = useHistory();

    const handleRegistro = (e) =>{
        e.preventDefault()
        contenedor.NombreBibliotecario = nombre
        contenedor.ApellidoBibliotecario = apellido
        contenedor.Correo = correo
        contenedor.Contraseña = clave

        axios.post(`http://localhost:49827/api/Bibliotecarios`,contenedor)
        .then(res => {
            console.log(res);
            console.log(res.data);
          })
        
        localStorage.setItem("correo", correo);
        localStorage.setItem("clave", clave);
        history.push("/home");
    }


    return(
        <form 
            onSubmit={handleRegistro}
            className="d-flex flex-column mx-4 my-4">
            <input 
                style={styles.inputsForm} 
                className="my-2" 
                type="text" 
                name="nombre"  
                placeholder="Nombre*"
                onChange={(e)=>{setNombre(e.target.value)}}
            />
            <input 
                style={styles.inputsForm} 
                className="my-2" 
                type="text" 
                name="apellido" 
                placeholder="Apellidos*"
                onChange={(e)=>{setApellido(e.target.value)}}
            />
            <input 
                style={styles.inputsForm} 
                className="my-2" 
                type="text" 
                name="correo"  
                placeholder="Correo*"
                onChange={(e)=>{setCorreo(e.target.value)}}
            />
            <input 
                style={styles.inputsForm} 
                className="my-2" 
                type="password" 
                name="clave"
                onChange={(e)=>{setClave(e.target.value)}}
            />
            <button 
                style={styles.botonIniciar} 
                type="submit" 
                className="my-3 py-1" 
                value="registrar">
                    Registrar
            </button>
        </form>
    )
}

export default FormularioRegistro
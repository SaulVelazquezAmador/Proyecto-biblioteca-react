import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import {useHistory} from 'react-router-dom'

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

const FormularioIniciarsesion = () =>{

    const contenedor = {
        Correo:"",
        Contraseña:""
    }

    const [correo, setCorreo] = useState("")
    const [clave, setClave] = useState("")
    const [data, setData] = useState([])
    const history = useHistory();

    useEffect(()=>{
        async function fetchData() {
            const res = await Axios.get(`http://localhost:49827/api/Bibliotecarios`)
            setData(res.data)
        }
        fetchData();
    },[])

    const handleSubmit =(e)=>{
        e.preventDefault()
        contenedor.Correo = correo
        contenedor.Contraseña = clave
        console.log(data)
        data.map((b)=>{
            if (b.correo === correo && b.contraseña === clave) {
                localStorage.setItem("correo", correo);
                localStorage.setItem("clave", clave);
                history.push("/home");
            }
        })
    }

    return(
        <form onSubmit={handleSubmit} className="d-flex flex-column mx-4 my-4">
            <input onChange={(e)=>{setCorreo(e.target.value)}} style={styles.inputsForm} className="my-3" type="text" name="correo"  placeholder="Correo*"/>
            <input onChange={(e)=>{setClave(e.target.value)}}  style={styles.inputsForm} className="my-3" type="password" name="clave" placeholder="Contraseña"/>
            <button style={styles.botonIniciar} type="submit" className="my-3 py-1" value="iniciar">Iniciar</button>
        </form>
    )
}

export default FormularioIniciarsesion
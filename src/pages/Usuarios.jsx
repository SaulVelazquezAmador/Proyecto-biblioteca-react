import React, { useState, useEffect } from 'react'
import Header from '../components/home/Header'
import Axios from 'axios'

const styles = {
    general:{
        width: '100%',
        height: '100vh',
    },
    body:{
        backgroundColor: "#eee"
    },
}

const Usuarios = (props) =>{

    const {title} = props
    const [correo, setCorreo] = useState("")
    const [data, setData] = useState([])
    useEffect(()=>{
        setCorreo(localStorage.getItem("correo"))
        async function fetchData() {
            const res = await Axios.get(`http://localhost:49827/api/Bibliotecarios/`)
            setData(res.data)
        }
        fetchData();
    },[])
    return(
        <div style={styles.general}>
            <Header title={title}/>
            <div className="mx-5 my-3 px-5 rounded-top rounded-bottom" style={styles.body}>
                <div className="text-center pt-3 pb-2">
                    {data.map((b,index)=>(
                        b.correo === correo ? 
                        <div key={index}>
                            <h3>Usuario Actual</h3><br/><br/>
                            <p>Nombre: {b.nombreBibliotecario}</p>
                            <p>Apellido: {b.apellidoBibliotecario}</p>
                        </div> 
                        : <p key={index}></p> 
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Usuarios
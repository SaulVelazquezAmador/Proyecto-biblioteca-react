import React, {useState, useEffect} from 'react'
import Header from '../components/home/Header'
import TablaClientes from '../components/home/TablaClientes'
import Axios from 'axios'

const styles = {
    form:{
        backgroundColor: "#eee"
    },
    general:{
        width: '100%',
        height: '100vh',
    },
    inputCliente:{
        width: '35%'
    },
    addCliente:{
        width: '20%'
    },
}

const Clientes = (props) =>{

    const contenedor = {
        nombre:"",
        apellido:"",
        edad:0,
        direccion:"",
        correo:"",
        telefono:0,
        prestamosActivos:0,
    }

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [edad, setEdad] = useState(0)
    const [direccion, setDireccion] = useState("")
    const [correo, setCorreo] = useState("")
    const [telefono, setTelefono] = useState(0)
    const [data, setData] = useState([])
    const {title} = props

    const handleDelete = (lector) =>{
        Axios.delete(`http://localhost:49827/api/Lector/${lector.idLector}`)
        .then(() => {
            Axios.get(`http://localhost:49827/api/Lector`)
            .then(res =>{
                setData(res.data)
            })
          })
    }

    const handleCliente = (e) =>{
        e.preventDefault()
        contenedor.nombre = nombre
        contenedor.apellido = apellido
        contenedor.edad = edad
        contenedor.direccion = direccion
        contenedor.correo = correo
        contenedor.telefono = telefono
        console.log(contenedor)
        Axios.post(`http://localhost:49827/api/Lector`,contenedor)
        .then(() => {
            Axios.get(`http://localhost:49827/api/Lector`)
            .then(res =>{
                setData(res.data)
            })
        })
        fetchData();
    }

    async function fetchData() {
        const res = await Axios.get(`http://localhost:49827/api/Lector`)
        setData(res.data)
    }

    useEffect(()=>{
        fetchData();
    },[])


    return(
        <div style={styles.general}>
            <Header title={title}/>
            <div className="mx-5 my-3 px-5 rounded-top rounded-bottom" style={styles.form}>
                <div className="text-center pt-3 pb-2">
                    <p>Agregar cliente</p>
                </div>
                <form onSubmit={handleCliente} className="d-flex flex-column">
                    <div className="d-flex flex-row">
                        <label className="ml-5 mb-3 mt-3">Nombre: </label>
                        <input style={styles.inputCliente} 
                                className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom" 
                                type="text" 
                                name="nombre"
                                onChange={(e)=>{setNombre(e.target.value)}}
                                />
                        <label className="ml-5 mb-3 mt-3">Apellido: </label>
                        <input style={styles.inputCliente} 
                                className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom" 
                                type="text" 
                                name="apellido"
                                onChange={(e)=>{setApellido(e.target.value)}}
                                />
                    </div>
                    <div className="d-flex flex-row">
                        <label className="ml-5 mb-3 mt-3">Edad: </label>
                        <input style={styles.inputCliente} 
                                className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom" 
                                type="text" 
                                name="edad"
                                onChange={(e)=>{setEdad(parseInt(e.target.value))}}
                                />
                        <label className="ml-5 mb-3 mt-3">Direccion: </label>
                        <input style={styles.inputCliente} 
                                className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom" 
                                type="text" 
                                name="direccion"
                                onChange={(e)=>{setDireccion(e.target.value)}}
                                />
                    </div>
                    <div className="d-flex flex-row">
                        <label className="ml-5 mb-3 mt-3">Correo: </label>
                        <input style={styles.inputCliente} 
                                className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom" 
                                type="text" 
                                name="correo"
                                onChange={(e)=>{setCorreo(e.target.value)}}
                                />
                        <label className="ml-5 mb-3 mt-3">Telefono: </label>
                        <input style={styles.inputCliente} 
                                className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom" 
                                type="text" 
                                name="telefono"
                                onChange={(e)=>{setTelefono(e.target.value)}}
                                />
                    </div>
                    <div className="text-center">
                        <button style={styles.addCliente} 
                                type="submit" 
                                className="my-3 btn btn-success rounded-pill" 
                                value="registrar">Registrar</button>
                    </div>
                </form>
            </div>
            <TablaClientes handleDelete={handleDelete} data={data}/>
        </div>
    )
}
export default Clientes
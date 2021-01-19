import React, {useState, useEffect} from 'react'
import Header from '../components/home/Header'
import TablaEditoriales from '../components/home/TablaEditoriales'
import Axios from 'axios'

const styles = {
    form:{
        backgroundColor: "#eee"
    },
    general:{
        width: '100%',
        height: '100vh'
    },
    inputEditorial:{
        width: '35%'
    },
    addEditorial:{
        width: '20%'
    },
}

const Editoriales = (props) =>{
    const contenedor = {
        NombreEditorial:"",
    }
    const {title} = props
    const [data, setData] = useState([])
    const [nombreEditorial, setNombreEditorial] = useState("")

    const handleEditorial = (e) =>{
        e.preventDefault()
        contenedor.NombreEditorial = nombreEditorial

        Axios.post(`http://localhost:49827/api/Editoriales`,contenedor)
        .then(res => {
            console.log(res);
            console.log(res.config.data);
        })
    }

    async function fetchData() {
        const res = await Axios.get(`http://localhost:49827/api/Editoriales`)
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
                    <p>Agregar Editorial</p>
                </div>
                <form onSubmit={handleEditorial} className="d-flex flex-column text-center">
                    <div>
                        <label 
                            className="ml-5 mb-3 mt-3">
                            Nombre: 
                        </label>
                        <input 
                            style={styles.inputEditorial} 
                            className="ml-3 mb-3 mt-3 border border-white" 
                            type="text" 
                            name="nombre"
                            onChange={(e)=>{setNombreEditorial(e.target.value)}}
                        />
                    </div>
                    <div className="text-center">
                        <button 
                            style={styles.addEditorial} 
                            type="submit" 
                            className="my-3 btn btn-success rounded-pill" 
                            value="registrar">
                                Registrar
                        </button>
                    </div>
                </form>
            </div>
            <TablaEditoriales data={data}/>
        </div> 
    )
}

export default Editoriales
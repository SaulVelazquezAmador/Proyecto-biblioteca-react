import React, {useState} from 'react'
import Header from '../components/home/Header'

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

    const {title} = props
    const [nombreEditorial, setNombreEditorial] = useState("")
    const [ciudadEditorial, setCiudadEditorial] = useState("")
    const handleEditorial = (e) =>{
        e.preventDefault()
        console.log(nombreEditorial)
        console.log(ciudadEditorial)
    }

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
                    <div>
                        <label 
                            className="ml-5 mb-3 mt-3">
                            Ciudad: 
                        </label>
                        <input 
                            style={styles.inputEditorial} 
                            className="ml-3 mb-3 mt-3 border border-white" 
                            type="text" 
                            name="ciudad"
                            onChange={(e)=>{setCiudadEditorial(e.target.value)}}
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
        </div> 
    )
}

export default Editoriales
import React, {useState} from 'react'
import Header from '../components/home/Header'

const styles = {
    form:{
        backgroundColor: "#eee"
    },
    general:{
        width: '100%',
        height: '100vh',
    },
    inputAutor:{
        width: '35%'
    },
    addAutor:{
        width: '20%'
    },
}

const Autores = (props) =>{

    const {title} = props
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [nacionalidad, setNacionalidad] = useState("")

    const handleAutor = (e) =>{
        e.preventDefault()
        console.log(nombre)
        console.log(apellido)
        console.log(nacionalidad)
    }

    return(
        <div style={styles.general}>
            <Header title={title}/>
            <div className="mx-5 my-3 px-5 rounded-top rounded-bottom" style={styles.form}>
                <div className="text-center pt-3 pb-2">
                    <p>Agregar Autor</p>
                </div>
                <form onSubmit={handleAutor} className="d-flex flex-column">
                    <div className="d-flex flex-row">
                        <label className="ml-5 mb-3 mt-3">Nombre: </label>
                        <input 
                            style={styles.inputAutor} 
                            className="ml-3 mb-3 mt-3 border border-white" 
                            type="text" 
                            name="nombre"
                            onChange={(e) => {setNombre(e.target.value)}}
                        />
                        <label className="ml-5 mb-3 mt-3">Apellido: </label>
                        <input 
                            style={styles.inputAutor} 
                            className="ml-3 mb-3 mt-3 border border-white" 
                            type="text" 
                            name="apellido"
                            onChange={(e) => {setApellido(e.target.value)}}
                        />
                    </div>
                    <div className="d-flex flex-row">
                        <label className="ml-5 mb-3 mt-3">Nacionalidad: </label>
                        <input 
                            style={styles.inputAutor} 
                            className="ml-3 mb-3 mt-3 border border-white" 
                            type="text" 
                            name="nacionalidad"
                            onChange={(e) => {setNacionalidad(e.target.value)}}
                        />
                    </div>
                    <div className="text-center">
                        <button 
                            style={styles.addAutor} 
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

export default Autores
import React, {useState} from 'react'
import Header from '../components/home/Header'

const styles = {
    form:{
        backgroundColor: "#eee"
    },
    formulario:{
        height: "30vh",
        overflow: "auto"
    },
    general:{
        width: '100%',
        height: '100vh'
    },
    inputLibro:{
        width: '35%'
    },
    addLibro:{
        width: '20%'
    },
}

const Libros = (props) =>{
    const {title} = props
    const [autores, setAutores] = useState("---")
    const [ubicacion, setUbicacion] = useState("---")
    
    return(
        <div style={styles.general}>
            <Header title={title}/>
            <div className="mx-5 my-3 px-5 rounded-top rounded-bottom" style={styles.form}>
                <div className="text-center pt-3 pb-2">
                    <p>Agregar Libros</p>
                </div>
                <form style={styles.formulario} className="d-flex flex-column text-center">
                    <div className="d-flex flex-row text-center">
                        <label className="ml-5 mb-3 mt-3">ISBN:</label>
                        <input 
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom" 
                            type="text" 
                            name="isbn"/>
                        <label className="ml-5 mb-3 mt-3">Titulo</label>
                        <input
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom" 
                            type="text" 
                            name="titulo"/>
                    </div>
                    <div className="d-flex flex-row text-center">
                        <label className="ml-5 mb-3 mt-3">Año:</label>
                        <input 
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom" 
                            type="text" 
                            name="año"/>
                        <label className="ml-5 mb-3 mt-3">Ejemplares</label>
                        <input
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom" 
                            type="text" 
                            name="ejemplares"/>
                    </div>
                    <div className="d-flex flex-row text-center">
                        <label className="ml-5 mb-3 mt-3">Clasificacion:</label>
                        <select 
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="clasificacion"/>
                        <label className="ml-5 mb-3 mt-3">Subclasificacion</label>
                        <select
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="subclasificacion"/>
                    </div>
                    <div className="d-flex flex-row text-center">
                        <label className="ml-5 mb-3 mt-3">No. de autores:</label>
                        <select 
                            onChange={(e) =>{setAutores(e.target.value)}}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="clasificacion">
                                <option value="---">---</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                        </select>
                        <label className="ml-5 mb-3 mt-3">Editorial</label>
                        <select
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="subclasificacion"/>
                    </div>
                    <div className="d-flex flex-column">
                        {autores === "1" && 
                        <div>
                            <label className="ml-5 mb-3 mt-3">Autor:</label>
                            <select
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="autor1"/>
                        </div>
                        }
                        {autores === "2" && 
                        <div>
                            <label className="ml-5 mb-3 mt-3">Autor 1:</label>
                            <select
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="autor1"/>

                            <label className="ml-5 mb-3 mt-3">Autor 2:</label>
                            <select
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="autor2"/>
                        </div>
                        }
                        {autores === "3" && 
                        <div>
                            <label className="ml-5 mb-3 mt-3">Autor 1:</label>
                            <select
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="autor1"/>

                            <label className="ml-5 mb-3 mt-3">Autor 2:</label>
                            <select
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="autor2"/>

                            <label className="ml-5 mb-3 mt-3">Autor 3:</label>
                            <select
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="autor3"/>
                        </div>
                        }
                        {autores === "4" && 
                        <div>
                            <label className="ml-5 mb-3 mt-3">Autor 1:</label>
                            <select
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="autor1"/>

                            <label className="ml-5 mb-3 mt-3">Autor 2:</label>
                            <select
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="autor2"/>

                            <label className="ml-5 mb-3 mt-3">Autor 3:</label>
                            <select
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="autor3"/>

                            <label className="ml-5 mb-3 mt-3">Autor 4:</label>
                            <select
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="autor4"/>
                        </div>                        
                        }
                        {autores === "5" && 
                       <div>
                            <label className="ml-5 mb-3 mt-3">Autor 1:</label>
                            <select
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="autor1"/>

                            <label className="ml-5 mb-3 mt-3">Autor 2:</label>
                            <select
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="autor2"/>

                            <label className="ml-5 mb-3 mt-3">Autor 3:</label>
                            <select
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="autor3"/>

                            <label className="ml-5 mb-3 mt-3">Autor 4:</label>
                            <select
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="autor4"/>

                            <label className="ml-5 mb-3 mt-3">Autor 5:</label>
                            <select
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="autor5"/>
                        </div>  
                        }
                    </div>
                    <div className="d-flex flex-row">
                        <label className="ml-5 mb-3 mt-3">Ubicación:</label>
                        <select 
                            // style={styles.inputLibro}
                            onChange={(e) =>{setUbicacion(e.target.value)}}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="clasificacion">
                                <option value="---">---</option>
                                <option value="0-1">0-1</option>
                                <option value="2-3">2-3</option>
                                <option value="4-5">4-5</option>
                                <option value="6-7">6-7</option>
                                <option value="8-9">8-9</option>
                                <option value="A-B">A-B</option>
                                <option value="C-D">C-D</option>
                                <option value="E-F">E-F</option>
                                <option value="G-H">G-H</option>
                                <option value="I-J">I-J</option>
                                <option value="K-L">K-L</option>
                                <option value="M-N">M-N</option>
                                <option value="Ñ-O">Ñ-O</option>
                                <option value="P-Q">P-Q</option>
                                <option value="R-S">R-S</option>
                                <option value="T-U">T-U</option>
                                <option value="V-W">V-W</option>
                                <option value="X-Y">X-Y</option>
                                <option value="Z">Z</option>
                        </select>
                        <label className="ml-5 mb-3 mt-3">{ubicacion}</label>
                    </div>
                    <div className="text-center">
                        <button style={styles.addLibro} 
                                type="submit" 
                                className="my-3 btn btn-success rounded-pill" 
                                value="registrar">Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Libros
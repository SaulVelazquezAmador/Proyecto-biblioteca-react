import React from 'react'
import Header from '../components/home/Header'

const styles = {
    form:{
        backgroundColor: "#eee"
    },
    general:{
        width: '100%',
        height: '100vh'
    },
    selectPrestamos:{
        width: '35%'
    },
    addPrestamo:{
        width: '20%'
    },
}

const Prestamos = (props) =>{

    const {title} = props

    return(
        <div style={styles.general}>
            <Header title={title}/>
            <div className="mx-5 my-3 px-5 rounded-top rounded-bottom" style={styles.form}>
                <div className="text-center pt-3 pb-2">
                    <p>Agregar Prestamos</p>
                </div>
                <form style={styles.formulario} className="d-flex flex-column">

                    <div className="d-flex flex-row text-center">
                        <label className="ml-5 mb-3 mt-3">Cliente</label>
                        <select
                            style={styles.selectPrestamos}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="cliente">
                        </select>
                        <label className="ml-5 mb-3 mt-3">Libro</label>
                        <select
                            style={styles.selectPrestamos}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="libro">
                        </select>
                    </div>

                    <div>
                        <label className="ml-5 mb-3 mt-3">Tipo de prestamo: </label>
                        <select
                            style={styles.selectPrestamos}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="tipoprestamo">
                        </select>
                    </div>

                    <div className="d-flex flex-row text-center">
                        <label className="ml-5 mb-3 mt-3">Inicio:</label>
                        <select
                            style={styles.selectPrestamos}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="finicio">
                        </select>
                        <label className="ml-5 mb-3 mt-3">Devolucion</label>
                        <select
                            style={styles.selectPrestamos}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="ffin">
                        </select>
                    </div>
                    <div className="text-center">
                        <button style={styles.addPrestamo} 
                                type="submit" 
                                className="my-3 btn btn-success rounded-pill" 
                                value="registrar">Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Prestamos
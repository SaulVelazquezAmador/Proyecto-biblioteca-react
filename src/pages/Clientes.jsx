import React from 'react'
import Header from '../components/home/Header'

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

    const {title} = props

    return(
        <div style={styles.general}>
            <Header title={title}/>
            <div className="mx-5 my-3 px-5 rounded-top rounded-bottom" style={styles.form}>
                <div className="text-center pt-3 pb-2">
                    <p>Agregar cliente</p>
                </div>
                <form className="d-flex flex-column">
                    <div className="d-flex flex-row">
                        <label className="ml-5 mb-3 mt-3">Nombre: </label>
                        <input style={styles.inputCliente} 
                                className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom" 
                                type="text" 
                                name="nombre"/>
                        <label className="ml-5 mb-3 mt-3">Apellido: </label>
                        <input style={styles.inputCliente} 
                                className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom" 
                                type="text" 
                                name="apellido"/>
                    </div>
                    <div className="d-flex flex-row">
                        <label className="ml-5 mb-3 mt-3">Edad: </label>
                        <input style={styles.inputCliente} 
                                className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom" 
                                type="text" 
                                name="nombre"/>
                        <label className="ml-5 mb-3 mt-3">Direccion: </label>
                        <input style={styles.inputCliente} 
                                className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom" 
                                type="text" 
                                name="apellido"/>
                    </div>
                    <div className="d-flex flex-row">
                        <label className="ml-5 mb-3 mt-3">Correo: </label>
                        <input style={styles.inputCliente} className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom" type="text" name="nombre"/>
                        <label className="ml-5 mb-3 mt-3">Telefono: </label>
                        <input style={styles.inputCliente} 
                                className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom" 
                                type="text" 
                                name="apellido"/>
                    </div>
                    <div className="text-center">
                        <button style={styles.addCliente} 
                                type="submit" 
                                className="my-3 btn btn-success rounded-pill" 
                                value="registrar">Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Clientes
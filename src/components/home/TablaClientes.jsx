import React from 'react'
import Axios from 'axios'

const styles = {
    Conttabla:{
        margin                 : "auto}",
        borderCollapse         : "collapse",
        backgroundColor        : "#ffffff",
        width                  : "90%",
        height                 : "30vh",
        borderBottomLeftRadius : "10px",
        borderBottomRightRadius: "10px",
        borderTopLeftRadius    : "10px",
        borderTopRightRadius   : "10px",
        boxShadow              : "2px 2px 2px 2px #757575",
        overflow               : "auto"
    },
    tabla:{
        width: "100%"
    }
}

const TablaClientes = (props) =>{

    const {data} = props

    return(
        <div className="text-center ml-5" style={styles.Conttabla}>
            <table className="text-center" style={styles.tabla}>
                <thead className="border-bottom">
                    <tr className="py-1">
                        <th className="px-3">Nombre</th>
                        <th className="px-3">Apellido</th>
                        <th className="px-3">Edad</th>
                        <th className="px-3">Direccion</th>
                        <th className="px-3">Correo</th>
                        <th className="px-3">Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((lector,index)=>(
                            <tr className="py-1" key={index}>
                                <th>{lector.nombre}</th>
                                <th>{lector.apellido}</th>
                                <th>{lector.edad}</th>
                                <th>{lector.direccion}</th>
                                <th>{lector.correo}</th>
                                <th>{lector.telefono}</th>
                                <th>
                                    <button 
                                        onClick={()=>(
                                            Axios.delete(`http://localhost:49827/api/Lector/${lector.idLector}`)
                                            .then(res => {
                                                console.log(res);
                                                console.log(res.config.data);
                                              })
                                        )} 
                                        type="button" 
                                        className="btn btn-sm btn-danger">
                                            Eliminar
                                    </button>
                                </th>
                                <th><button type="button" className="btn btn-sm btn-primary">Editar</button></th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TablaClientes
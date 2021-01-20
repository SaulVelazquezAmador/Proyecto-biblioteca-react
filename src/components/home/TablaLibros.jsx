import React from 'react'

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

const TablaLibros = (props) =>{

    const {data, handleDelete} = props

    return(
        <div className="text-center ml-5" style={styles.Conttabla}>
            <table className="text-center" style={styles.tabla}>
                <thead className="border-bottom">
                    <tr className="py-1">
                        <th className="px-3">ISBN</th>
                        <th className="px-3">Titulo</th>
                        <th className="px-3">Año</th>
                        <th className="px-3">Existencias</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((libro,index)=>(
                            <tr className="py-1" key={index}>
                                <th>{libro.isbn}</th>
                                <th>{libro.titulo}</th>
                                <th>{libro.año}</th>
                                <th>{libro.existencias}</th>
                                <th>
                                    <button 
                                        onClick={()=>(handleDelete(libro))} 
                                        type="button" 
                                        className="btn btn-sm btn-danger">
                                            Eliminar
                                    </button>
                                </th>
                                {/* <th><button type="button" className="btn btn-sm btn-primary">Editar</button></th> */}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TablaLibros
import React from 'react'

const styles = {
    Conttabla:{
        margin                    : "auto}",
        borderCollapse            :"collapse",
        backgroundColor           :"#ffffff",
        width                     : "90%",
        height                    : "40vh",
        borderBottomLeftRadius    : "10px",
        borderBottomRightRadius   : "10px",
        borderTopLeftRadius       : "10px",
        borderTopRightRadius      : "10px",
        boxShadow : "2px 2px 2px 2px #757575",
        overflow: "auto"
    },
    tabla:{
        width: "100%"
    }
}

const TablaEditoriales = (props) =>{

    const {data, handleDeleteEditorial} = props

    return(
        <div className="text-center ml-5" style={styles.Conttabla}>
            <table className="text-center" style={styles.tabla}>
                <thead className="border-bottom">
                    <tr className="py-1">
                        <th className="px-3">Nombre</th>
                        <th className="px-3">Eliminar</th>
                        {/* <th className="px-3">Editar</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((editorial,index)=>(
                            <tr className="py-1" key={index}>
                                <th>{editorial.nombreEditorial}</th>
                                <th>
                                    <button 
                                        onClick={()=>(handleDeleteEditorial(editorial))} 
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

export default TablaEditoriales
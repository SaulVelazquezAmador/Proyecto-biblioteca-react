import React from 'react'

const styles = {
    inputsForm:{
        background: "none",
        fontSize: "24px",
        transition: "border-color .25s ease, box-shadow .25s ease",
        border : "1px solid #a0b3b0",
        color: "#ffffffff"
    },
    botonIniciar:{
        fontSize: "24px",
        backgroundColor: "#01a87a",
        border: "none",
        cursor: 'pointer',
        color: "#ffffffff"
    }
}

const FormularioIniciarsesion = () =>{
    return(
        <form className="d-flex flex-column mx-4 my-4">
            <input style={styles.inputsForm} className="my-3" type="text" name="correo"  placeholder="Correo*"/>
            <input style={styles.inputsForm} className="my-3" type="password" name="clave" placeholder="Contraseña"/>
            <input style={styles.botonIniciar} className="my-3 py-1" type="button" value="Iniciar"/>
        </form>
    )
}

export default FormularioIniciarsesion
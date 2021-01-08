import React, {useState} from 'react'
import ButtonLogin from '../components/Inicio/ButtonLogin'
import FormularioIniciarsesion from '../components/Inicio/FormularioIniciarsesion'
import FormularioRegistro from '../components/Inicio/FormularioRegistro'

const styles = {
    form:{
        backgroundColor: "#42515b"
    }
}
const InicioSesion = () =>{
    const [tipoInicio, setTipoinicio] = useState("Iniciar Sesión")
    return(
        <div className="container d-flex justify-content-center">
            <div style={styles.form} className="border border-white rounded-lg my-5 mx-3">
                <div className="d-flex flex-row mx-4 my-4">
                    <ButtonLogin 
                        title={"Iniciar Sesión"} 
                        setTipoinicio={setTipoinicio}
                    />
                    <ButtonLogin 
                        title={"Registrarse"} 
                        setTipoinicio={setTipoinicio}
                    />                    
                </div>
                {
                    tipoInicio === "Iniciar Sesión"
                    ?
                    <FormularioIniciarsesion/>
                    :
                    <FormularioRegistro/>
                }                
            </div>

        </div>
    )
}

export default InicioSesion
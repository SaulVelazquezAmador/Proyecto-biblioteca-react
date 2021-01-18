import React from 'react'
import Header from '../components/home/Header'
import Imagen1 from './images/imagen1.jpg'
import Imagen2 from './images/imagen2.jpg'
import Imagen3 from './images/imagen3.jpg'
import Imagen4 from './images/imagen4.jpg'
import './styles/Inicio.css'

const styles = {
    general:{
        width: '100%',
        height: '100vh'
    },
    frases:{
        height: '30vh'
    },
    p:{
        marginBottom: '0%'
    }
}
const Inicio = (props) =>{
    const {title} = props
    return(
        <div style={styles.general}>
            <Header title={title}/>
            <div className="slider mt-4">
                <ul>
                    <li><img className="slider" src={Imagen1} alt=""></img></li>
                    <li><img className="slider" src={Imagen2} alt=""></img></li>
                    <li><img className="slider" src={Imagen3} alt=""></img></li>
                    <li><img className="slider" src={Imagen4} alt=""></img></li>
                </ul>
            </div>
            <div style={styles.frases} className="frases">
                <ul>
                    <li>
                        <p style={styles.p}>
                            “De los diversos instrumentos inventados por el hombre, el más asombroso es el libro; todos los demás son extensiones de su cuerpo… Sólo el libro es una extensión de la imaginación y la memoria”
                            <br/>
                            <br/>
                            Jorge Luis Borges.
                        </p>
                    </li>
                    <li>
                        <p style={styles.p}>
                            “Es un buen libro aquel que se abre con expectación y se cierra con provecho”
                            <br/>
                            <br/>
                            Amos Bronson Alcott.
                        </p>
                    </li>
                    <li>
                        <p style={styles.p}>
                            “La Biblioteca es una esfera cuyo centro cabal es cualquier hexágono, cuya circunferencia es inaccesible"
                            <br/>
                            <br/>
                            Jorge Luis Borges.
                        </p>
                    </li>
                    <li>
                        <p style={styles.p}>
                            “La lectura de un buen libro es un diálogo incesante en que el libro habla y el alma contesta”.
                            <br/>
                            <br/>
                            André Maurois.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Inicio
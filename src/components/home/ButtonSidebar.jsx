import React, {useState} from 'react'

const styles = {
    boton: (backgroundColor) =>({
        backgroundColor: backgroundColor,
        color: "white",
        cursor: 'pointer'
    }),
    icono:{
        width: "10%",
        filter: "invert(100%)"
    }
}

const ButtonSidebar = ( props ) =>{

    const {title, icon, setPagina} = props

    const [backgroundColor, setBackgroundcolor] = useState("#222222")

    const handleLeave = () =>{
        setBackgroundcolor("#222222")
    }

    const handleHover = () =>{
        setBackgroundcolor("#23303e")
    }

    return(
        <div style={styles.boton(backgroundColor)} 
            className="text-left py-3 pl-5 d-flex flex-row" 
            onMouseOver={handleHover} 
            onMouseLeave={handleLeave}
            onClick={()=>{setPagina(title)}}
        >
            <img src={icon} alt="icon" style={styles.icono}/>
            <p className="mx-0 my-0 px-2 py-0">{title}</p>
        </div>
    )
}

export default ButtonSidebar
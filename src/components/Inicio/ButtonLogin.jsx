import React, {useState} from 'react'

const styles = {
    boton: (backgroundColor) =>({
        backgroundColor: backgroundColor,
        cursor: 'pointer',
        color: "#ffffffff",
        fontSize: "24px",
    })
}

const ButtonLogin = (props) =>{

    const [backgroundColor, setBackgroundcolor] = useState("#01a87a")
    const {title, setTipoinicio} = props
    const handleLeave = () =>{
        setBackgroundcolor("#01a87a")
    }

    const handleHover = () =>{
        setBackgroundcolor("#23303e")
    }

    return(
        <div 
            style={styles.boton(backgroundColor)}
            className="text-left py-2 px-5" 
            onClick={()=>{setTipoinicio(title)}}
            onMouseOver={handleHover} 
            onMouseLeave={handleLeave}
            >
            {title}
        </div>
    )
}
export default ButtonLogin
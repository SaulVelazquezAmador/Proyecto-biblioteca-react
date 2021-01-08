import React from 'react'

const styles = {
    header:{
        backgroundColor: "#01a87a",
        fontFamily: "'Kotta One', serif",
        fontSize: "25px"
    }
}

const Header = (props) =>{

    const {title} = props

    return(
        <div className="card rounded-0 text-center" style={styles.header}>
            <div className="card-header p-3 titulo">
                {title}
            </div>
        </div>
    )
}

export default Header
import React, {useState, useEffect} from 'react'
import Header from '../components/home/Header'
import Axios from 'axios'
import TablaLibros from '../components/home/TablaLibros'

const styles = {
    form:{
        backgroundColor: "#eee"
    },
    formulario:{
        height: "30vh",
        overflow: "auto"
    },
    general:{
        width: '100%',
        height: '100vh'
    },
    inputLibro:{
        width: '35%'
    },
    addLibro:{
        width: '20%'
    },
}

const Libros = (props) =>{

    const contenedor = {
        isbn: "fg",
        titulo: "hi",
        rAutor: 0,
        rEditorial: 0,
        rClasificacion: 0,
        rSubclasificacion: 0,
        rUbicacion: 0,
        año: 0,
        existencias: 0,
    }

    const {title} = props
    const [selClasificacion, setSelclas] = useState([])
    const [selSubclasificacion, setSelsubclas] = useState([])
    const [selEditorial, setSeleditorial] = useState([])
    const [selAutor, setSelautor] = useState([])
    const [selLibreros, setSellibreros] = useState([])
    // ---------------------------------------------
    const [isbn, setIsbn] = useState("")
    const [titulo, setTitulo] = useState("")
    const [año, setAño] = useState("")
    // const [ejemplares, setEjemplares] = useState("")
    const [autores, setAutores] = useState("")
    const [clasificacion, setClasificacion] = useState("")
    const [subclasificacion, setSubclasificacion] = useState("")
    const [ubicacion, setUbicacion] = useState("")
    const [editorial, setEditorial] = useState("")
    const [data, setData] = useState([])

    const handleDelete = (libro) =>{
        Axios.delete(`http://localhost:49827/api/Libros/${libro.isbn}`)
        .then(() => {
            Axios.get(`http://localhost:49827/api/Libros`)
            .then(res =>{
                setData(res.data)
            })
          })
    }

    const handleLibros = (e) =>{
        e.preventDefault()
        // eslint-disable-next-line
        selClasificacion.map((c)=>{
            c.nombreClasificacion === clasificacion ? contenedor.rClasificacion = c.idClasificacion : console.log("")
        })
        // eslint-disable-next-line
        selSubclasificacion.map((c)=>{
            c.nombreSubclasificacion === subclasificacion ? contenedor.rSubclasificacion = c.idSubclasificacion : console.log("")
        })
        // eslint-disable-next-line
        selLibreros.map((c)=>{
            c.nombreLibrero === ubicacion ? contenedor.rUbicacion = c.idLibrero : console.log("")
        })
        // eslint-disable-next-line
        selAutor.map((c)=>{
            c.nombreAutor+" "+c.apellidoAutor=== autores ? contenedor.rAutor = c.idAutor: console.log("")
        })
        // eslint-disable-next-line  
        selEditorial.map((c)=>{
            c.nombreEditorial === editorial ? contenedor.rEditorial = parseInt(c.idEditorial): console.log("")
        })

        contenedor.isbn = isbn
        contenedor.titulo = titulo
        contenedor.año =año

        console.log(contenedor)

        Axios.post(`http://localhost:49827/api/Libros`,contenedor)
        .then(r => {
            console.log(r.data)
            console.log(r.status)
            Axios.get(`http://localhost:49827/api/Libros`)
            .then(res =>{
                setData(res.data)
            })
        })
    }

    async function fetchData() {
        const resc = await Axios.get(`http://localhost:49827/api/Clasificacion`)
        setSelclas(resc.data)
        const ress = await Axios.get(`http://localhost:49827/api/Subclasificacion`)
        setSelsubclas(ress.data)
        const resedit = await Axios.get(`http://localhost:49827/api/Editoriales`)
        setSeleditorial(resedit.data)
        const resAutor = await Axios.get(`http://localhost:49827/api/Autor`)
        setSelautor(resAutor.data)
        const resLibrero = await Axios.get(`http://localhost:49827/api/LibrerosL`)
        setSellibreros(resLibrero.data)

        const res = await Axios.get(`http://localhost:49827/api/Libros`)
        console.log(res.data)
        setData(res.data)
    }

    useEffect(()=>{
        fetchData();
    },[])
    
    return(
        <div style={styles.general}>
            <Header title={title}/>

            <div className="mx-5 my-3 px-5 rounded-top rounded-bottom" style={styles.form}>
                <div className="text-center pt-3 pb-2">
                    <p>Agregar Libros</p>
                </div>
                <form onSubmit={handleLibros} style={styles.formulario} className="d-flex flex-column text-center">

                    <div className="d-flex flex-row text-center">
                        <label className="ml-5 mb-3 mt-3">ISBN:</label>
                        <input 
                            onChange={(e) =>{setIsbn(e.target.value)}}
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom" 
                            type="text" 
                            name="isbn"/>
                        <label className="ml-5 mb-3 mt-3">Titulo</label>
                        <input
                            onChange={(e) =>{setTitulo(e.target.value)}}
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom" 
                            type="text" 
                            name="titulo"/>
                    </div>

                    <div className="d-flex flex-row text-center">
                        <label className="ml-5 mb-3 mt-3">Año:</label>
                        <input 
                            onChange={(e) =>{setAño(parseInt(e.target.value))}}
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom" 
                            type="text" 
                            name="año"/>
                        <label className="ml-5 mb-3 mt-3">Ejemplares</label>
                        <input
                            onChange={(e) =>{contenedor.existencias =  parseInt(e.target.value)}}
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom" 
                            type="text" 
                            name="ejemplares"/>
                    </div>

                    <div className="d-flex flex-row text-center">
                        <label className="ml-5 mb-3 mt-3">Clasificacion:</label>
                        <select 
                            onChange={(e) =>{setClasificacion(e.target.value)}}
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="clasificacion">
                                {selClasificacion.map((clas,index)=>(
                                    <option key={index} value={clas.nombreClasificacion}>{clas.nombreClasificacion}</option>
                                ))}
                        </select>
                        <label className="ml-5 mb-3 mt-3">Subclasificacion</label>
                        <select
                            onChange={(e) =>{setSubclasificacion(e.target.value)}}
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="subclasificacion">
                                {selSubclasificacion.map((subclas,index)=>(
                                    <option key={index} value={subclas.nombreSublasificacion}>{subclas.nombreSubclasificacion}</option>
                                ))}
                        </select>
                    </div>

                    <div className="d-flex flex-row text-center">
                        <label className="ml-5 mb-3 mt-3">Autor:</label>
                        <select
                        onChange={(e) =>{setAutores(e.target.value)}}
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="autor1">
                            {selAutor.map((a,index)=>(
                                <option key={index} value={a.nombreAutor+" "+a.apellidoAutor}>{a.nombreAutor+" "+a.apellidoAutor}</option>
                            ))}  
                        </select>
                        <label className="ml-5 mb-3 mt-3">Editorial</label>
                        <select
                            onChange={(e) =>{setEditorial(e.target.value)}}
                            style={styles.inputLibro}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="subclasificacion">
                                {selEditorial.map((e,index)=>(
                                    <option key={index} value={e.nombreEditorial}>{e.nombreEditorial}</option>
                                ))}
                        </select>
                    </div>

                    <div className="d-flex flex-row">
                        <label className="ml-5 mb-3 mt-3">Ubicación:</label>
                        <select 
                            // style={styles.inputLibro}
                            onChange={(e) =>{setUbicacion(e.target.value)}}
                            className="ml-3 mb-3 mt-3 border border-white rounded-top rounded-bottom"  
                            name="clasificacion">
                                {selLibreros.map((l,index)=>(
                                    <option key={index} value={l.nombreLibrero}>{l.nombreLibrero}</option>
                                ))}    
                        </select>
                    </div>

                    <div className="text-center">
                        <button style={styles.addLibro} 
                                type="submit" 
                                className="my-3 btn btn-success rounded-pill" 
                                value="registrar">Registrar</button>
                    </div>
                </form>
            </div>
            <TablaLibros handleDelete={handleDelete} data={data}/>
        </div>
    )
}

export default Libros
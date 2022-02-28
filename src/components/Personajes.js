import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Personaje.css";

const Personajes = () =>{

    const [personajes, setPersonajes] = useState([]);

    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(data => setPersonajes(data.results))
    }, [])

    return (
        <div className="card-contenedor"> 
            {personajes.map(personaje => (
            <Link className="card-personaje" to={`/personajes/${personaje.id}`}> 
                <h2>{personaje.name}</h2>
                <img src={personaje.image}/>
            </Link>
            
      ))}
        </div>
    )
}

export default Personajes;
import { Link } from "react-router-dom";

const NavBar = () =>{
    return (
        <div>
            <Link to="/">Principal</Link>
            <Link to="/personajes">Personajes</Link>
            <Link to="/episodios">Episodios</Link>
        </div>
        
    )
}

export default NavBar;
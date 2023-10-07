import { Link } from "react-router-dom";



function NavBar(){

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Menu">Menu</Link>
            <Link to="/Nosotros">Nosotros</Link>
            <Link to="/Contacto">Contacto</Link>
        </nav>

    )

}

export default NavBar;
import { Link } from "react-router-dom";
const Nav = (props) => {
    return (
        <nav>
        <div>
            <ul>
                <li><Link to="/Homepage">Homepage</Link></li>
                <li><Link to="/Quienessomos">Quienessomos</Link></li>
                <li><Link to="/Servicios">Servicios</Link></li>
                <li><Link to="/Novedades">Novedades</Link></li>
                <li><Link to="/Contacto">Contacto</Link></li>
            </ul>
        </div>
        </nav>
    )
}

export default Nav;

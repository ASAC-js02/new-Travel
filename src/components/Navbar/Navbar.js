import './Navbar.css'
import {Link} from "react-router-dom";
export default function Navbar(props){
    return(
        <nav>
            <Link to= "/">Home</Link>
        </nav>
    )
}
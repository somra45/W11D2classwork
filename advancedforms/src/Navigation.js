import { NavLink } from "react-router-dom/cjs/react-router-dom.min";



export default function Navigation() {
    return (
        <div>
            <button> <NavLink to="/sensory">Sensory Preference Survey</NavLink> </button>
            <button><NavLink to="/sample">Sample Survey</NavLink></button>
        </div>
    )
}
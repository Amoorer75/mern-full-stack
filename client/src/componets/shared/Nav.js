import {NavLink} from "react-router-dom"

export default function Nav(){

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shoping-list-items">Shoping List</NavLink>
            <NavLink to="/create-item">Add to list</NavLink>
        </nav>
    )
}
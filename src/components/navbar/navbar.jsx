import React from "react";
import  ReactDOM  from "react-dom/client";
import './navbar.css'

const Navbar = ()=>{
    return(
        <div className="navbar">
             <div className="leftSideNav">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" className="logo"/>
            <ul>
                <li>Home</li>
                <li>TVShows</li>
                <li>Movies</li>
            </ul>
            </div>
            <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" className="avatar" />
            </div>
        </div>
    )
}

export default Navbar;
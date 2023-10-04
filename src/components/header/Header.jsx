import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import logo from "./1.png"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src={logo} /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <Link to="https://github.com/itxxbilal" style={{textDecoration: "none"}}><span>Github</span></Link>
            </div>
        </div>
    )
}

export default Header
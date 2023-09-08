import { Link } from 'react-router-dom';
import './navbar.css';
import styled from "styled-components"

const Navbar = () => {

    return (

        <div className="navbar">
            <div className="homepage">
                <Link to="/"  className="link">
                    Homepage
                </Link>
            </div>
            <div className="listPosts">
                <Link to="/newsfeed" className="link">
                    Newsfeeds
                </Link>
            </div>
        </div>


    )
}

export default Navbar;
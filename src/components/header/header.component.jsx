import React from 'react'

import { ReactComponent as Logo } from '../../Assets/original.svg'
import { Link } from 'react-router-dom'
import './header.styles.scss'

const Header = ()=> (
    <div className="header" >
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop" >Shop</Link>
            <Link className="option" to="/" >Contact Us</Link>
        </div>
    </div>
)

export default Header;
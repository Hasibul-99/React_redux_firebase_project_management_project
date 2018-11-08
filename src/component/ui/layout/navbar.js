import React from 'react';
import { Link } from 'react-router-dom';
import SignInLink from './singIn';
import SignOutLink from './signOut';

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
               <Link to="/" className="brand-logo">REACT</Link>
               <SignInLink />
               <SignOutLink />
            </div>
        </nav>
    )
}


export default Navbar;
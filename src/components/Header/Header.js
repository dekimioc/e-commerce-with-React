import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import './Header.style.scss';

import { ReactComponent as Logo} from '../../assets/crown.svg';

const Header = ({currentUsers}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo />
        </Link>
        <div className="options">
             <Link className="option" to="/shop">
                 SHOP
             </Link>
             <Link className="option" to="/shop">
                CONTACT
             </Link>
             {
                 currentUsers ? 
                 <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> 
                 
                 : <Link className="option" to="/signin">SIGN IN</Link>
             }
        </div>
    </div>
)

export default Header;
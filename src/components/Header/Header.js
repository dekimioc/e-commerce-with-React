import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import  Cart  from '../cartIcon/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';

import './Header.style.scss';

import { ReactComponent as Logo} from '../../assets/crown.svg';

const Header = ({currentUsers, hidden}) => (
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
              <Cart />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
)

const mapStateToProps = ({user: {currentUsers}, cart: {hidden} }) => ({
    currentUsers,
    hidden
})

export default connect(mapStateToProps)(Header);
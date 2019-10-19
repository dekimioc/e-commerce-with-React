import React from 'react';
import  CartItem from '../cartItem/CartItem';

import {connect} from 'react-redux';

import CustomButton from '../customButton/CustomButton';

import { selectCartItem } from '../../redux/cart/cart.selector';

import './CartDropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items" >
        {
            cartItems.map(cartItem => <CartItem id={cartItem.id} item={cartItem}/>)
        }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItem(state)
})

export default connect(mapStateToProps)(CartDropdown);
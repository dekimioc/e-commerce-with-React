import React from 'react';
import  CartItem from '../cartItem/CartItem';

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

import CustomButton from '../customButton/CustomButton';

import { selectCartItem } from '../../redux/cart/cart.selector';
import { toogleCartHidden } from '../../redux/cart/cart.actions';

import './CartDropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items" >
           
        {
            cartItems.length ? 

            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>) : 

            <span className="empty-message">Your cart is empty</span>
        } 
        </div>
        <CustomButton onClick={() => {history.push('/checkout', dispatch(toogleCartHidden()))}}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItem(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
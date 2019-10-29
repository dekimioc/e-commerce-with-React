import React from 'react';
import { connect } from 'react-redux';
import { selectCartItem, selectCartTotal } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect';

import  CheckoutItem  from '../../components/checkoutItem/CheckoutItem';

import StripeButtonCheckout from '../../components/stripe-button/stripe-button';

import "./Checkout.page.styles.scss";

const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
        <div className="total">TOTAL: ${total}</div>
        <div className="test-warning">
            *Please use the folowing test credit card for payment*
            <br />
            4242 4242 4242 4242 - Exp: 01 / 20 CVV: 123
        </div>
        <StripeButtonCheckout price={total}/>
    </div>
);

const mapStateToProps = () => createStructuredSelector({
    cartItems: selectCartItem,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
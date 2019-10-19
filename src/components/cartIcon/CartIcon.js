import React from 'react';

import { connect } from 'react-redux';
import {toogleCartHidden} from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import {selectCartItemQuantity} from '../../redux/cart/cart.selector';

import '../../redux/cart/cart.selector';

import './CartIcon.styles.scss';

const Cart = ({toogleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toogleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapStateToProps = state => ({
    itemCount: selectCartItemQuantity(state)
})

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
import { cartActionType } from './cart.types';
import {AddMultipleItemToCart, removeItemFromCart} from './cartUtills';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case cartActionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionType.ADD_ITEM:
            return {
                ...state,
                cartItems: AddMultipleItemToCart(state.cartItems, action.payload)
            }
        case cartActionType.REMOVE_ITEM_FROM_CART: 
        return {
            ...state,
            cartItems: removeItemFromCart(state.cartItems, action.payload)
        }
        case cartActionType.CLEAR_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)    
                }
        default:
            return state
    }
}

export default CartReducer;
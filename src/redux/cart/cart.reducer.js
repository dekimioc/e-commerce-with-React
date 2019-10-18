import { cartActionType } from './cart.types';
import {AddMultipleItemToCart} from './cartUtills';

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
        default:
            return state
    }
}

export default CartReducer;
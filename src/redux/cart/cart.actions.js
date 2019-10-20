import {cartActionType} from './cart.types'

export const toogleCartHidden = () => ({
    type: cartActionType.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: cartActionType.ADD_ITEM,
    payload: item
})

export const removeItemFromCart = item => ({
    type: cartActionType.REMOVE_ITEM_FROM_CART,
    payload: item
})

export const clearItem = item => ({
    type: cartActionType.CLEAR_ITEM,
    payload: item
})
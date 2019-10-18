export const AddMultipleItemToCart = (cartItems, cartItemToAdd) => {
    const isItemExist = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(isItemExist) {
      return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
            )
           
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
   
}
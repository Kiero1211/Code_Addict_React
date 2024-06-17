import constants from "./constants";

const {
  CLEAR_CART, 
  REMOVE_ITEM, 
  INCREASE_ITEM, 
  DECREASE_ITEM,
  GET_TOTALS
} = constants;

const reducer = (state, action) => {
  let newCart;
  const {type, payload} = action;
  switch (type) {
    case CLEAR_CART:
      return {
        ...state,
        cart: []
      }
    case REMOVE_ITEM:
      newCart = state.cart.filter(item => item.id !== payload);
      return {
        ...state,
        cart: newCart
      }
    case INCREASE_ITEM:
      newCart = returnModifiedCartObject(state, payload, INCREASE_ITEM);
      return {
        ...state,
        cart: newCart
      }
    case DECREASE_ITEM:
      newCart = returnModifiedCartObject(state, payload, DECREASE_ITEM);
      return {
        ...state,
        cart: newCart
      }
    case GET_TOTALS:
      let {totalPrice, quantity} = state.cart.reduce((cartTotals, cartItem) => {
        const {price, amount} = cartItem;
        const itemTotal = Math.round(price * amount);

        cartTotals.quantity += amount;
        cartTotals.totalPrice += itemTotal;
        return cartTotals;
      }, {
        quantity: 0,
        totalPrice: 0
      })
      return {
        ...state,
        totalPrice,
        quantity
      }
    default:
      throw new Error("Invalid action");
  }
}

const returnModifiedCartObject = (state, payload, type) => {
  //Initialize a copy of cart item
  const newCart = [...state.cart];

  if (!payload) {
    throw new Error("Invalid item");
  }
  // Iterate through the newCart object
  return newCart.map(item => {
    if (item.id === payload) {
      if (type === INCREASE_ITEM) {
        const newItem = {...item, amount: Number(item.amount) + 1}
        return newItem;
      } else if (type === DECREASE_ITEM) {
        const currentAmount = Number(item.amount);
        return {...item, amount: currentAmount > 0 ? currentAmount - 1 : 0};
      } else {
        throw new Error("Invalid type");
      }
    } else return item;
  })
}

export default reducer;
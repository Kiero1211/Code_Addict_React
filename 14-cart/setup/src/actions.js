import constants from "./constants";

const {
    CLEAR_CART, 
    REMOVE_ITEM, 
    INCREASE_ITEM, 
    DECREASE_ITEM,
    GET_TOTALS,
    LOADING,
    DISPLAY_ITEMS
} = constants;

const loading = () => {
    return {
        type: LOADING
    }
}

const displayItems = payload => {
    return {
        type: DISPLAY_ITEMS,
        payload
    }
}

const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

const removeItem = itemID => {
    return {
        type: REMOVE_ITEM,
        payload: itemID
    }
}

const increaseItem = itemID => {
    return {
        type: INCREASE_ITEM,
        payload: itemID
    }
}

const decreaseItem = itemID => {
    return {
        type: DECREASE_ITEM,
        payload: itemID
    }
}

const getTotals = () => {
    return  {
        type: GET_TOTALS
    }
}

const actions = {
    clearCart,
    removeItem,
    increaseItem,
    decreaseItem,
    getTotals,
    loading,
    displayItems
}

export default actions;
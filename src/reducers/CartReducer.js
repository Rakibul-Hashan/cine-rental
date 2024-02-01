const initialState = {
  cartData: [],
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartData: [...state.cartData, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartData: state.cartData.filter((i) => i.id !== action.payload.id),
      };

    default:
      break;
  }
};

export { CartReducer, initialState };

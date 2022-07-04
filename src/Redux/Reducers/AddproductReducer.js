const initailState = {
  product: []
};

const ProductReducer = (state = initailState, action) => {
  switch (action.type) {
    case "Add_Product_Data":
      return {
        ...state,
        product: [...state.product, action.payload]
      };
    default:
      return state;
  }
};
export default ProductReducer;

const initailState = {
  store: []
};

const StoreReducer = (state = initailState, action) => {
  switch (action.type) {
    case "Add_Store_Data":
      return {
        ...state,
        store: [...state.store, action.payload]
      };
    default:
      return state;
  }
};
export default StoreReducer;

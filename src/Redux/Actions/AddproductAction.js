export const AddProduct = (text) => async (dispatch) => {
  try {
    dispatch({
      type: "Add_Product_Data",
      payload: text
    });
  } catch (err) {
    console.log(err);
  }
};

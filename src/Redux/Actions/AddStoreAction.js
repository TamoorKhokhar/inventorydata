export const AddStore = (text) => async (dispatch) => {
  try {
    dispatch({
      type: "Add_Store_Data",
      payload: text
    });
  } catch (err) {
    console.log(err);
  }
};

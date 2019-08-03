const initialState = {
  flag: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOWNEXTCOMPONENT":
      return {
        flag: !state.flag
      };
    default:
      return state;
  }
};

export default reducer;

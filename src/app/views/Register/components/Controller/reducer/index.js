const initialState = {
  isComplete: false
};

export default function navBarReducer(state = initialState, action) {
  switch (action.type) {
    case "COMPLETE_REGISTER":
      return {
        ...state,
        isComplete: !state.isComplete
      };
      break;
    default:
      return state;
      break;
  }
}

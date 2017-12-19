// Dependencies

// Initial State
const initialState = (options = {}) => ({
  ...options,
  nav: {}
});

export default function navReducer(state = initialState({}), action) {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        nav: {
          new: "new action"
        }
      };
      break;
    }
    default: {
      return state;
      break;
    }
  }
}

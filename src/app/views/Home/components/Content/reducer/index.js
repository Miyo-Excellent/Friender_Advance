// Dependencies

// Initial State
const initialState = (options = {}) => ({
  ...options,
  ultimate_posts: []
});

export default function contentReducer(state = initialState({}), action) {
  switch (action.type) {
    case "LOAD_ULTIMATE_POSTS": {
      return {
        ...state,
        ultimate_posts: action.data
      };
      break;
    }
    default: {
      return state;
      break;
    }
  }
}

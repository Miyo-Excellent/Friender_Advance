// Dependencies

// Initial State
const initialState = (options = {}) => ({
  ...options,
  config: {
    mobile: {
      menu_bar: false,
      log_bar: false
    }
  }
});

export default function navReducer(state = initialState({}), action) {
  switch (action.type) {
    case "CHANGE_MENU_BAR": {
      return {
        ...state,
        config: {
          ...state.config,
          mobile: {
            ...state.config.mobile,
            menu_bar: !state.config.mobile.menu_bar
          }
        }
      };
      break;
    }
    case "CHANGE_LOG_BAR": {
      return {
        ...state,
        config: {
          ...state.config,
          mobile: {
            ...state.config.mobile,
            log_bar: !state.config.mobile.log_bar
          }
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

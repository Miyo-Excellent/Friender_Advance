const initialState = {
  loggin: {
    email: '',
    password: ''
  },
  show: {
    menu: false,
    loggin: false
  }
};

export default function navBarReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_EMAIL':
      return {
        ...state,
        loggin: {
          ...state.loggin,
          email: action.email
        }
      };
      break;
    case 'CHANGE_SHOW_LOGGIN':
      return {
        ...state,
        show: {
          ...state.show,
          loggin: !state.show.loggin
        }
      };
    case 'CHANGE_SHOW_MENU':
      return {
        ...state,
        show: {
          ...state.show,
          menu: !state.show.menu
        }
      };
      break;
    case 'CHANGE_PASSWORD':
      return {
        ...state,
        loggin: {
          ...state.loggin,
          password: action.password
        }
      };
      break;

    default:
      return state;
      break;
  }
}

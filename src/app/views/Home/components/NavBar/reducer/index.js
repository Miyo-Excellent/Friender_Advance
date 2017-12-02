const initialState = {
  email: '',
  password: ''
};

export default function navBarReducer(state = initialState, action) {
  switch (action.type) {
    case 'EMAIL':
      return {
        ...state,
        email: action.email
      };
      break;
    case 'PASSWORD':
      return {
        ...state,
        password: action.password
      };
      break;

    default:
      return state;
      break;
  }
}

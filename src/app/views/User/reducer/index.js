const initialState = {
  userData: {
    name: 'filanito',
    lastname: 'menganito'
  }
};

export default function homeReducer(state = initialState, action) {
  switch (action.tyle) {
    case 'USER_DATA_NAME':
      return {
        ...state,
        userData: {
          ...state.userData,
          name: action.name
        }
      };
      break;
    case 'USER_DATA_LASTNAME':
      return {
        ...state,
        userData: {
          ...state.userData,
          lastname: action.name
        }
      };
      break;

    default:
      return state;
      break;
  }
}

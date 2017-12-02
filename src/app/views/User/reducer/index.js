// Dependencies

// Initial State
const initialState = options => {
  const {
    lastname = "menganito",
    nit = /([0-9]{3}(\.|\\|\/|\-)[0-9]{3}(\.|\\|\/|\-)[0-9]{3}\-[a-zA-Z])/ || '000.000.000-F',
    type = "people",
    typeOfCompany = 'headquarters'
  } = options;
  const commonConfig = {
    address: {
      province: "antioquia",
      munincipality: "medellin"
    },
    email: "email@friender.co",
    name: "filanito",
    nickname: "Friender",
    phone: "3000000000",
    picture: 'https://avatars0.githubusercontent.com/u/24364747?s=460&v=4',
    type
  };

  if (type === "people") {
    return {
      ...commonConfig,
      lastname
    };
  } else if (type === 'company') {
    return {
      ...commonConfig,
      nit,
      typeOfCompany
    };
  }
};

export default function homeReducer(state = initialState({}), action) {
  switch (action.tyle) {
    case "USER_DATA_NAME":
      return {
        ...state,
        userData: {
          ...state.userData,
          name: action.name
        }
      };
      break;
    case "USER_DATA_LASTNAME":
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

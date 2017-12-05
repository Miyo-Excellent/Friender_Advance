// Dependencies

// Initial State
const initialState = options => {
  const {
    lastname = "menganito",
    nit = /([0-9]{3}(\.|\\|\/|\-)[0-9]{3}(\.|\\|\/|\-)[0-9]{3}\-[a-zA-Z])/ ||
      "000.000.000-F",
    type = "people",
    typeOfCompany = "headquarters"
  } = options;
  const commonConfig = {
    address: {
      province: "antioquia",
      munincipality: "medellin"
    },
    email: "email@friender.co",
    header: "http://eskipaper.com/images/best-wallpapers-hd-6.jpg",
    followers: 35457,
    followins: 2134,
    name: "filanito",
    nickname: "Friender",
    phone: "3000000000",
    picture: "https://avatars0.githubusercontent.com/u/24364747?s=460&v=4",
    profession: "Web-Developer",
    profil: {
      aplicated: 2000,
      completed: 456,
      editing: false,
      evaluated: 789,
      interested: 123
    },
    posts: {
      services: []
    },
    type
  };

  if (type === "people") {
    return {
      ...commonConfig,
      lastname
    };
  } else if (type === "company") {
    return {
      ...commonConfig,
      nit,
      typeOfCompany
    };
  }
};

export default function homeReducer(state = initialState({}), action) {
  switch (action.type) {
    case "CHANGE_EDITNG": {
      return {
        ...state,
        profil: {
          ...state.profil,
          editing: !state.profil.editing
        }
      };
      break;
    }
    case "USER_DATA_NAME": {
      return {
        ...state,
        userData: {
          ...state.userData,
          name: action.name
        }
      };
      break;
    }
    case "USER_DATA_LASTNAME": {
      return {
        ...state,
        userData: {
          ...state.userData,
          lastname: action.name
        }
      };
      break;
    }
    case "LOAD_SERVICES_POSTS": {
      console.log(action.data);
      return {
        ...state,
        posts: {
          ...state.posts,
          // services: state.posts.services.concat(...action.data)
          services: action.data
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

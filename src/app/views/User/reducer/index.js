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
      interested: 123,
      evaluated: 789,
      completed: 456
    },
    posts: {
      services: [
        {
          img:
            "http://www.zhangshidai.com/cheats/resources/logoquiz/mcdonalds.png",
          califacation: 3,
          honorary: "1200000",
          title: "MC Donalds",
          about: "Sellers",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate vel labore quasi veritatis exercitationem laborum quo voluptatem numquam, alias mollitia vitae. Neque cupiditate cumque recusandae!"
        },
        {
          img:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_Earth_Logo.svg/2000px-Google_Earth_Logo.svg.png",
          califacation: 5,
          honorary: "2200000",
          title: "Google",
          about: "Forjando el fut...",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate vel labore quasi veritatis exercitationem laborum quo voluptatem numquam, alias mollitia vitae. Neque cupiditate cumque recusandae!"
        },
        {
          img:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/2000px-Facebook_icon_2013.svg.png",
          califacation: 4,
          honorary: "3600000",
          title: "Facebook",
          about: "back-end develo...",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate vel labore quasi veritatis exercitationem laborum quo voluptatem numquam, alias mollitia vitae. Neque cupiditate cumque recusandae!"
        }
      ]
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

    case "LOAD_SERVICES_POSTS":
      return {
        ...state,
        posts: {
          ...state.posts,
          services: state.posts.services.concat()
        }
      };
      break;

    default:
      return state;
      break;
  }
}

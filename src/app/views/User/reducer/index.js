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
      AddNewService: {
        address: {
          munincipality: "",
          privince: ""
        },
        category: "",
        description: "",
        direction: "",
        schedule: {
          from: {
            hour: 8,
            minutes: 30,
            system: 'am'
          },
          to: {
            hour: 5,
            minutes: 30,
            system: 'pm'
          }
        },
        tags: [],
        title: "",
        value: 0
      },
      editing: false,
      newServiceConfig: [],
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
    case "ADD_DESCRIPTION": {
      return {
        ...state,
        posts: {
          ...state.posts,
          AddNewService: {
            ...state.posts.AddNewService,
            description: action.description
          }
        }
      };
      break;
    }
    case "ADD_DIRECTION": {
      return {
        ...state,
        posts: {
          ...state.posts,
          AddNewService: {
            ...state.posts.AddNewService,
            direction: action.direction
          }
        }
      };
      break;
    }
    case "ADD_CATEGORY": {
      return {
        ...state,
        posts: {
          ...state.posts,
          AddNewService: {
            ...state.posts.AddNewService,
            category: action.category
          }
        }
      };
      break;
    }
    case "ADD_MUNINCIPALITY": {
      return {
        ...state,
        posts: {
          ...state.posts,
          AddNewService: {
            ...state.posts.AddNewService,
            address: {
              ...state.posts.AddNewService.address,
              munincipality: action.munincipality
            }
          }
        }
      };
      break;
    }
    case "ADD_PROVINCE": {
      return {
        ...state,
        posts: {
          ...state.posts,
          AddNewService: {
            ...state.posts.AddNewService,
            address: {
              ...state.posts.AddNewService.address,
              privince: action.privince
            }
          }
        }
      };
      break;
    }
    case "ADD_TAG": {
      return {
        ...state,
        posts: {
          ...state.posts,
          AddNewService: {
            ...state.posts.AddNewService,
            tags: state.posts.AddNewService.tags.concat(action.tag)
          }
        }
      };
      break;
    }
    case "ADD_SCHEDULE_FROM_HOUR": {
      return {
        ...state,
        posts: {
          ...state.posts,
          AddNewService: {
            ...state.posts.AddNewService,
            schedule: {
              ...state.posts.AddNewService.schedule,
              from: {
                ...state.posts.AddNewService.schedule.from,
                hour: action.hour
              }
            }
          }
        }
      };
      break;
    }
    case "ADD_SCHEDULE_FROM_MINUTES": {
      return {
        ...state,
        posts: {
          ...state.posts,
          AddNewService: {
            ...state.posts.AddNewService,
            schedule: {
              ...state.posts.AddNewService.schedule,
              from: {
                ...state.posts.AddNewService.schedule.from,
                minutes: action.minutes
              }
            }
          }
        }
      };
      break;
    }
    case "ADD_SCHEDULE_FROM_SYSTEM": {
      return {
        ...state,
        posts: {
          ...state.posts,
          AddNewService: {
            ...state.posts.AddNewService,
            schedule: {
              ...state.posts.AddNewService.schedule,
              from: {
                ...state.posts.AddNewService.schedule.from,
                system: action.system
              }
            }
          }
        }
      };
      break;
    }
    case "ADD_SCHEDULE_TO_HOUR": {
      return {
        ...state,
        posts: {
          ...state.posts,
          AddNewService: {
            ...state.posts.AddNewService,
            schedule: {
              ...state.posts.AddNewService.schedule,
              to: {
                ...state.posts.AddNewService.schedule.to,
                hour: action.hour
              }
            }
          }
        }
      };
      break;
    }
    case "ADD_SCHEDULE_TO_MINUTES": {
      return {
        ...state,
        posts: {
          ...state.posts,
          AddNewService: {
            ...state.posts.AddNewService,
            schedule: {
              ...state.posts.AddNewService.schedule,
              to: {
                ...state.posts.AddNewService.schedule.to,
                minutes: action.minutes
              }
            }
          }
        }
      };
      break;
    }
    case "ADD_SCHEDULE_TO_SYSTEM": {
      return {
        ...state,
        posts: {
          ...state.posts,
          AddNewService: {
            ...state.posts.AddNewService,
            schedule: {
              ...state.posts.AddNewService.schedule,
              to: {
                ...state.posts.AddNewService.schedule.to,
                system: action.system
              }
            }
          }
        }
      };
      break;
    }
    case "ADD_TITLE": {
      return {
        ...state,
        posts: {
          ...state.posts,
          AddNewService: {
            ...state.posts.AddNewService,
            title: action.title
          }
        }
      };
      break;
    }
    case "ADD_VALUE": {
      return {
        ...state,
        posts: {
          ...state.posts,
          AddNewService: {
            ...state.posts.AddNewService,
            value: action.value
          }
        }
      };
      break;
    }
    case "DELETE_TAG": {
      return {
        ...state,
        posts: {
          ...state.posts,
          AddNewService: {
            ...state.posts.AddNewService,
            tags: state.posts.AddNewService.tags.filter(oldTag => oldTag !== action.tag)
          }
        }
      };
      break;
    }
    case "CHANGE_EDITNG_STATE": {
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
      return {
        ...state,
        posts: {
          ...state.posts,
          services: action.data
        }
      };
      break;
    }
    case "LOAD_NEW_SERVICES_CONFIG": {
      return {
        ...state,
        posts: {
          ...state.posts,
          newServiceConfig: action.data
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

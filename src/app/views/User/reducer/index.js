// Dependencies

// Services default config
const NEW_SERVICE_STATE = {
  address: {
    munincipality: "", province: ""
  },
  category: "", description: "", direction: "",
  schedule: {
    from: {
      hour: 8, minutes: 30, system: 'am'
    },
    to: {
      hour: 5, minutes: 30, system: 'pm'
    }
  },
  tags: [], title: "", value: 0
};

// Initial State
const initialState = options => {
  const {
    address = {
      province: "", munincipality: ""
    },
    email = "",
    favorites = [],
    connectors = [],
    header = "", lastname = "C.A", name = "Friender", nickname = "C.A",
    nit = "00-00-00-F", // ReGex = /([0-9]{3}(\.|\\|\/|\-)[0-9]{3}(\.|\\|\/|\-)[0-9]{3}\-[a-zA-Z])/i
    phone = "3123559419",
    picture = "https://avatars0.githubusercontent.com/u/24364747?s=460&v=4",
    posts = {
      AddNewService: NEW_SERVICE_STATE,
      editing: false, newServiceConfig: [], services: [], servicesState: []
    },
    postulations = [],
    profession = ["Web-Developer"],
    profile = {
      aplicated: 0, completed: 0,
      editing: false, evaluated: 0,
      interested: 0, networks: []
    },
    request = [],
    type = "people", typeOfCompany = "headquarters"
  } = options;

  const commonConfig = {
    address, email, favorites,
    header, connectors,
    name, nickname,
    phone, picture,
    posts, postulations,
    profession, profile,
    request, type
  };

  if (type === "people") {
    return {
      ...commonConfig, lastname
    };
  } else if (type === "company") {
    return {
      ...commonConfig, nit, typeOfCompany
    };
  }
};

export default function homeReducer(state = initialState({}), action) {
  switch (action.type) {
    case "ADD_CATEGORY": {
      return {
        ...state, posts: {
          ...state.posts, AddNewService: {
            ...state.posts.AddNewService, category: action.category
          }
        }
      };
      break;
    }
    case "ADD_DESCRIPTION": {
      return {
        ...state, posts: {
          ...state.posts, AddNewService: {
            ...state.posts.AddNewService, description: action.description
          }
        }
      };
      break;
    }
    case "ADD_DIRECTION": {
      return {
        ...state, posts: {
          ...state.posts, AddNewService: {
            ...state.posts.AddNewService, direction: action.direction
          }
        }
      };
      break;
    }
    case "ADD_FAVORITE": {
      return {
        ...state,
        favorites: state.favorites.concat(action.favorite)
      };
      break;
    }
    case "ADD_NEW_COMMIT": {
      return {
        ...state,
        posts: {
          ...state.posts,
          services: state.posts.services.map(service => service._id === action._id
            ? ({
              ...service,
              comments: service.comments.concat({
                "_id": service.comments.length,
                "comment": action.commit,
                "date": {
                  "day": new Date().getDate(),
                  "month": new Date().getMonth(),
                  "year": new Date().getFullYear(),
                  "time": {
                    "seconds": new Date().getSeconds(),
                    "minutes": new Date().getMinutes(),
                    "hour": new Date().getHours()
                  }
                },
                "score": 2,
                "user": {
                  "address": state.address,
                  "email": state.email,
                  "name": state.name,
                  "nickname": state.nickname,
                  "phone": state.phone,
                  "picture": state.picture,
                  "professions": state.profession,
                  "type": state.type
                }
              })
            }) : ({
              ...service
            })
          )
        }
      };
      break;
    }
    case "ADD_MUNINCIPALITY": {
      return {
        ...state, posts: {
          ...state.posts, AddNewService: {
            ...state.posts.AddNewService, address: {
              ...state.posts.AddNewService.address, munincipality: action.munincipality
            }
          }
        }
      };
      break;
    }
    case "ADD_POSTULATION": {
      return {
        ...state,
        postulations: state.postulations.concat(action.postulation)
      };
      break;
    }
    case "ADD_PROVINCE": {
      return {
        ...state, posts: {
          ...state.posts, AddNewService: {
            ...state.posts.AddNewService, address: {
              ...state.posts.AddNewService.address, province: action.province
            }
          }
        }
      };
      break;
    }
    case "ADD_REQUEST": {
      return {
        ...state,
        requests: state.requests.concat(action.request)
      };
      break;
    }
    case "ADD_SCHEDULE_FROM_HOUR": {
      return {
        ...state, posts: {
          ...state.posts, AddNewService: {
            ...state.posts.AddNewService, schedule: {
              ...state.posts.AddNewService.schedule, from: {
                ...state.posts.AddNewService.schedule.from, hour: action.hour
              }
            }
          }
        }
      };
      break;
    }
    case "ADD_SCHEDULE_FROM_MINUTES": {
      return {
        ...state, posts: {
          ...state.posts, AddNewService: {
            ...state.posts.AddNewService, schedule: {
              ...state.posts.AddNewService.schedule, from: {
                ...state.posts.AddNewService.schedule.from, minutes: action.minutes
              }
            }
          }
        }
      };
      break;
    }
    case "ADD_SCHEDULE_FROM_SYSTEM": {
      return {
        ...state, posts: {
          ...state.posts, AddNewService: {
            ...state.posts.AddNewService, schedule: {
              ...state.posts.AddNewService.schedule, from: {
                ...state.posts.AddNewService.schedule.from, system: action.system
              }
            }
          }
        }
      };
      break;
    }
    case "ADD_SCHEDULE_TO_HOUR": {
      return {
        ...state, posts: {
          ...state.posts, AddNewService: {
            ...state.posts.AddNewService, schedule: {
              ...state.posts.AddNewService.schedule, to: {
                ...state.posts.AddNewService.schedule.to, hour: action.hour
              }
            }
          }
        }
      };
      break;
    }
    case "ADD_SCHEDULE_TO_MINUTES": {
      return {
        ...state, posts: {
          ...state.posts, AddNewService: {
            ...state.posts.AddNewService, schedule: {
              ...state.posts.AddNewService.schedule, to: {
                ...state.posts.AddNewService.schedule.to, minutes: action.minutes
              }
            }
          }
        }
      };
      break;
    }
    case "ADD_SCHEDULE_TO_SYSTEM": {
      return {
        ...state, posts: {
          ...state.posts, AddNewService: {
            ...state.posts.AddNewService, schedule: {
              ...state.posts.AddNewService.schedule, to: {
                ...state.posts.AddNewService.schedule.to, system: action.system
              }
            }
          }
        }
      };
      break;
    }
    case "ADD_TAG": {
      return {
        ...state, posts: {
          ...state.posts, AddNewService: {
            ...state.posts.AddNewService, tags: state.posts.AddNewService.tags.concat(action.tag)
          }
        }
      };
      break;
    }
    case "ADD_NEW_SERVICE_STATE": {
      return {
        ...state,
        requests: state.requests.concat(action.request)
      };
      break;
    }
    case "ADD_TITLE": {
      return {
        ...state, posts: {
          ...state.posts, AddNewService: {
            ...state.posts.AddNewService, title: action.title
          }
        }
      };
      break;
    }
    case "ADD_VALUE": {
      return {
        ...state, posts: {
          ...state.posts, AddNewService: {
            ...state.posts.AddNewService, value: action.value
          }
        }
      };
      break;
    }
    case "CHANGE_EDITNG_STATE": {
      return {
        ...state, profile: {
          ...state.profile, editing: !state.profile.editing
        }
      };
      break;
    }
    case "CHANGE_ALL_DATA_USER": {
      return {
        ...action.data
      };
      break;
    }
    case "CHANGE_THIS_SHOW_COMMITS_STATE": {
      return {
        ...state,
        posts: {
          ...state.posts,
          services: state.posts.services.map(service => service._id === action._id
            ? {
              ...service,
              state: {
                ...service.state,
                showCommits: !service.state.showCommits
              }
            } : {
              ...service
            }
          )
        }
      };
      break;
    }
    case "CHANGE_THIS_SHOW_FORM_NEW_COMMIT": {
      return {
        ...state,
        posts: {
          ...state.posts,
          services: state.posts.services.map(service => service._id === action._id
            ? {
              ...service,
              state: {
                ...service.state,
                formCommitActive: !service.state.formCommitActive
              }
            } : service
          )
        }
      };
      break;
    }
    case "CREATE_NEW_SERVICE": {
      return {
        ...state, posts: {
          ...state.posts, services: state.posts.services.concat({
            "about": `${action.service.tags[0]}, ${action.service.tags[1]}, ${action.service.tags[2]}, ${action.service.tags[3]}`,
            "address": action.service.address, "califacation": 0,
            "categoty": action.service.category, "description": action.service.description,
            "direction": action.service.direction, "honorary": action.service.value,
            "img": state.picture, "tags": action.service.tags, "title": action.service.title
          },)
        }
      };
      break;
    }
    case "DELETE_NEW_SERVICE_STATE": {
      return {
        ...state, posts: {
          ...state.posts, AddNewService: NEW_SERVICE_STATE
        }
      };
      break;
    }
    case "DELETE_TAG": {
      return {
        ...state, posts: {
          ...state.posts, AddNewService: {
            ...state.posts.AddNewService, tags: state.posts.AddNewService.tags.filter(oldTag => oldTag !== action.tag)
          }
        }
      };
      break;
    }
    case "LOAD_SERVICES_POSTS": {
      return {
        ...state, posts: {
          ...state.posts, services: action.data
        }
      };
      break;
    }
    case "LOAD_NEW_SERVICES_CONFIG": {
      return {
        ...state, posts: {
          ...state.posts, newServiceConfig: action.data
        }
      };
      break;
    }
    case "REMOVE_FAVORITE": {
      return {
        ...state,
        favorites: state.favorites.filter(favorite => favorite._id !== action._id)
      };
      break;
    }
    case "REMOVE_POSTULATION": {
      return {
        ...state,
        postulations: state.postulations.filter(postulation => postulation._id !== action._id)
      };
      break;
    }
    case "USER_DATA_LASTNAME": {
      return {
        ...state, userData: {
          ...state.userData, lastname: action.name
        }
      };
      break;
    }
    case "USER_DATA_NAME": {
      return {
        ...state, userData: {
          ...state.userData, name: action.name
        }
      };
      break;
    }
    case "SERVICE_ADD_NEW_COMMIT": {
      return {
        ...state,
        posts: {
          ...state.posts,
          services: state.posts.services.map(service => service._id === action._id
            ? {
              ...service,
              comments: service.comments.concat({
                ...action.commit,
                id: state.posts.services.length
              })
            } : service
          )
        }
      };
      break;
    }
    default: {
      return state; break;
    }
  }
}

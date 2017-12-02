const initialState = (type, state = {}) => {
  const {
    email = 'Mi@correo.com',
    lastname = 'Apellido: Gutiérrez ',
    munincipality = 'Medellin',
    name = 'Nombre: Alexander',
    nickname = 'Friender',
    nit = '',
    phone = '30012345678',
    password = '',
    province = 'Antioquia',
    typeOfCompany = '',
    step = 1
  } = state;

  if (type === 'people') {
    return {
      address: {
        province,
        munincipality
      },
      email,
      lastname,
      name,
      nickname,
      password,
      phone,
      type,
      step
    };
  } else if (type === 'company') {
    return {
      address: {
        province,
        munincipality
      },
      email,
      name,
      nickname,
      nit,
      password,
      phone,
      type,
      typeOfCompany,
      step
    };
  }
};

const State = (type = 'people', options = {}) => initialState(type, options);

export default (state = State('people', {}), action) => {
  switch (action.type) {
    case 'BACK_STEP':
      return {
        ...state,
        step: state.step - 1
      };
      break;

    case 'CHANGE_EMAIL':
      return {
        ...state,
        email: action.email
      };
      break;

    case 'CHANGE_ENTITY':
      return action.entity === 'people' ? State('people', state) : State('company', state);
      break;

    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
      break;

    case 'CHANGE_NICKNAME':
      return {
        ...state,
        nickname: action.nickname
      };
      break;
    case 'CHANGE_NIT':
      return {
        ...state,
        nit: action.nit
      };
      break;

    case 'CHANGE_LASTNAME':
      return {
        ...state,
        lastname: action.lastname
      };
      break;

    case 'CHANGE_PASSWORD':
      return {
        ...state,
        password: action.password
      };
      break;

    case 'CHANGE_PHONE':
      return {
        ...state,
        phone: action.phone
      };
      break;

    case 'CHANGE_PROVINCE':
      return {
        ...state,
        address: {
          ...state.address,
          province: action.province
        }
      };
      break;

    case 'CHANGE_MUNINCIPALITY':
      return {
        ...state,
        address: {
          ...state.address,
          munincipality: action.munincipality
        }
      };
      break;

    case 'CHANGE_TYPE':
      return {
        ...state,
        type: action.type
      };
      break;

    case 'CHANGE_TYPE_OF_COMPANY':
      return {
        ...state,
        typeOfCompany: action.typeOfCompany
      };
      break;

    case 'NEXT_STEP':
      return {
        ...state,
        step: state.step + 1
      };
      break;

    default:
      return state;
      break;
  }
};

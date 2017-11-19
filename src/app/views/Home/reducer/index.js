const initialState = {
  commits: []
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case 'NEW_COMMIT':
      return {
        ...state,
        commits: state.commits.concat(action.commit)
      };
      break;

    default:
      return state;
      break;
  }
}

const INITAL = {};

function login(state = INITAL, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, value: action.value };
    default:
      return state;
  }
}

export default login;

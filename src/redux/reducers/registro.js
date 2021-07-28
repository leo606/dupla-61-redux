const INITIAL = [];

function registro(state = INITIAL, action) {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.value];
    default:
      return state;
  }
}

export default registro;

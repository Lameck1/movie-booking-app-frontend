export default (state, action) => {
  switch (action.type) {
    case 'start':
      return {
        rotating: action.payload,
      };
    default:
      return state;
  }
};

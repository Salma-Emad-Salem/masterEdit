
const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return {
        ...state,
        authed: true,
      }    
    default:
      return state;
  }
};

export default authReducer;

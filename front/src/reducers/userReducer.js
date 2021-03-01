const initialState = {
  email: 'captain.nemo@herocorp.io',
  password: 'secret',
  isLoggedIn: true,
  firstName: 'captain',
  lastName: 'nemo',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

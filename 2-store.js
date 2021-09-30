const {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
} = require('redux');

// **** Initial State **** //

const initialState = {
  value: 0,
};

// **** Action type**** //
const INCREMENT = 'INCREMENT';
const ADD = 'ADD';

// **** Action Creator **** //
const increment = () => ({ type: INCREMENT });
const add = (amount) => ({ type: ADD, payload: amount });

// The reducer function will take 2 arguments one is initialState and another is action

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };

    case ADD:
      return { value: state.value + action.payload };

    default:
      return state;
  }
};

const store = createStore(reducer);

console.log('store=>', store);

store.dispatch(increment());

console.log('getState=>', store.getState());

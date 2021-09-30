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

// *** subscriber *** //
// subscribe care every time the state changes here is a function that i will give you to go a head and call this function every time the state changes

const subscriber = () => console.log('SUBSCRIBER=>', store.getState().value);
store.subscribe(subscriber);

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(add(250));

// *** bindActionCreators *** //
// Simple functions that create actions
// bindActionCreators just gives as a way to do some shorthand
// like in the 45,46,47 we say store.dipatch increment , store.dipatch increment and add a 1000 what if we just wanted to make functions that were bound to the dispatch and we just call this function thats were bindActionCreatores come in

const actions = bindActionCreators({ increment, add }, store.dispatch);

actions.increment();
actions.add(2);

/*
// Note ----> bindActionCreators peechay behind the scene kaisy chal raha hota hain uski example 👇
// simple version of bindActionCreators

const functionArray = [increment, add];

const [dispatchIncrement, dispatchAdd] = functionArray.map((fn) =>
  compose(store.dispatch, fn)
);

dispatchIncrement();
*/

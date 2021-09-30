const { applyMiddleware, createStore } = require('redux');

// The most common use case for middleware is to support asynchronous actions without much boilerplate code or dependency
// the most famous use case for middleware is a libraray that is using redux toolkit  and very commonly in redux applications called redux-thunk.
// In redux-thunk you need to make AJAX request or fetch http request

const reducer = (state = { count: 1 }) => state;

const logMiddleware = (store) => (dispatch) => (action) => {
  console.log('old state', store.getState(), action);

  dispatch(action);

  console.log('new state', store.getState(), action);
};

const store = createStore(reducer, applyMiddleware(logMiddleware));

store.dispatch({ type: 'HELLO' });

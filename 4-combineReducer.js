const { createStore, combineReducers } = require('redux');

// **** Initial State **** //

const initialState = {
  users: [
    { id: 1, name: 'Arsalan' },
    { id: 2, name: 'bilal' },
  ],

  tasks: [{ title: 'start learning redux' }, { title: 'Order food' }],
};

// **** Action types**** //

const ADD_USER = 'ADD_USER';
const ADD_TASK = 'ADD_TASK';

// **** Action Creators **** //

const addTask = (title) => ({ type: ADD_TASK, payload: title });
const addUser = (name) => ({ type: ADD_USER, payload: name });

// **** Reducers **** //

const userReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, { id: state.length + 1, name: action.payload }];

    default:
      return state;
  }
};

const taskReducer = (state = initialState.tasks, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, { title: action.payload }];

    default:
      return state;
  }
};

// **** Combine Reducers **** //
// Combine Reducers just basically makes one reducer add up a bunch of small ones and we can eventually get this reducer on createStore

const reducer = combineReducers({
  users: userReducer,
  tasks: taskReducer,
});

// **** Store **** //

const store = createStore(reducer);

// *** subscriber *** //
// subscribe care every time the state changes here is a function that i will give you to go a head and call this function every time the state changes

const subscriber = () => console.log('SUBSCRIBER=>', store.getState());
store.subscribe(subscriber);

store.dispatch(addUser('noman'));
store.dispatch(addUser('taha'));

store.dispatch(addTask('20 mins walk on 5pm'));

// **** Imporing Libraries **** //
const { createStore, applyMiddleware } = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

// *** Initial State **** //
const initialState = {
  loading: false,
  users: [],
  error: '',
};

// **** Action Types **** //
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// **** Action Creators **** //
const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });

const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

const fetchUsersFailure = (erro) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

// *** Reducer **** //

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };

    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload, loading: false };

    case FETCH_USERS_FAILURE:
      return { ...state, users: [], error: action.payload, loading: false };

    default:
      return state;
  }
};

// **** Async action creators **** //
// two packages we need 1. axios and the second is 2. redux-thunk
// redux-thunk --> package from the redux ecosystem and is the standard way to define asynchronous action creators in our application the redux-thunk library basically is a middleware we will be applying to our redux store

// an action creators returns an action

// what the thunk-middleware brings to the table is the ability for an action creator to return a function instead of an action object

// this is an action creator -> this is not a pure function

const fetchUsers = (payload) => async (dispatch) => {
  // it is a special function and it does't have to be pure so this is allowed to have sideeffects such as async api calls and this function can also dispatch actions like the ones that we seen before
  console.log('this is payload we passing=>', payload);
  try {
    dispatch(fetchUsersRequest());

    const resp = await axios.get('https://jsonplaceholder.typicode.com/users');

    const users = resp.data.map((user) => user.id);

    dispatch(fetchUsersSuccess(users));
  } catch (error) {
    dispatch(fetchUsersFailure(error.message));
  }
};

// **** Store ***** //
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => console.log('store>', store.getState()));

store.dispatch(fetchUsers('PayLOAD'));

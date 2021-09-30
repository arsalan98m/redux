const {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
} = require('redux');

// **** Compose Example ***** //

const makeLouder = (string) => string.toUpperCase();
const repeatThreeTimes = (string) => string.repeat(3);
const embolden = (string) => string.bold();

// without compose
// const makeLouderRepeatThreeTimesAndEmbolden = (string) =>
//   embolden(repeatThreeTimes(makeLouder(string)));

// With Compose
const makeLouderRepeatThreeTimesAndEmbolden = compose(
  makeLouder,
  repeatThreeTimes,
  embolden
);

console.log(makeLouderRepeatThreeTimesAndEmbolden('this is string'));

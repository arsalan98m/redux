import {
  ITEM_ADDED,
  ITEM_REMOVED,
  ITEM_PRICE_UPDATED,
  ITEM_QUANTITY_UPDATED
} from './actions';

import { produce } from 'immer';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'aloo Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

// Without immer
/*
export const reducer = (state = initialItems, action) => {
  switch (action.type) {
    case ITEM_ADDED:
      const item = { uuid: id++, quantity: 1, ...action.payload };
      return [...state, item];

    case ITEM_REMOVED:
      return state.filter((item) => item.uuid !== action.payload);

    case ITEM_PRICE_UPDATED:
      return state.map((item) => {
        if (item.uuid === action.payload.uuid) {
          return { ...item, price: parseInt(action.payload.price || 0) };
        }
        return item;
      });

    case ITEM_QUANTITY_UPDATED:
      return state.map((item) => {
        if (item.uuid === action.payload.uuid) {
          return { ...item, quantity: parseInt(action.payload.quantity || 0) };
        }
        return item;
      });

    default:
      return state;
  }
};
*/

export const reducer = produce((state = initialItems, action) => {
  switch (action.type) {
    case ITEM_ADDED:
      const item = { uuid: id++, quantity: 1, ...action.payload };
      state.push(item);
      return;

    case ITEM_REMOVED:
      return state.filter((item) => item.uuid !== action.payload);

    case ITEM_PRICE_UPDATED: {
      const item = state.find((item) => item.uuid === action.payload.uuid);
      item.price = parseInt(action.payload.price || 0);
      return;
    }

    case ITEM_QUANTITY_UPDATED: {
      const item = state.find((item) => item.uuid === action.payload.uuid);
      item.quantity = parseInt(action.payload.quantity || 0);
      return;
    }

    default:
      return state;
  }
}, initialItems);

// With Immer
export default reducer;

// immer -> immer is also a built in redux toolkit helping you to treats immutable objects like the mutable and figure it out the different forms
// immer ko use kar k hum apni state ko direct mutate kar sakty hai

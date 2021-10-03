import { connect } from 'react-redux';
import { Summary } from '../components/Summary';
import {
  selectSubtotal,
  selectTipAmount,
  selectTotal
} from '../store/items/selectors';

const mapStateToProps = (state) => {
  const subtotal = selectSubtotal(state);
  const tipAmount = selectTipAmount(state);
  const total = selectTotal(state);

  return {
    subtotal,
    tipAmount,
    total
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);

// Now this calculation is very simple we are adding numbers we are multiplying numbers we are taking pieces from our state manipulating it the way what the components expect  and returning through the props what gonna we do if things gain a little bit  expensive and the thinks we know about react   there are patterens earlier we saw usememo and usecallback they work like we say hey dont call this again unless something in this array will change

// most of the apis in react taken an array of things and say hey dont call this again unless something in this array   changes in react we use useCallback and useMemo we are saying like no matter how many times this hook can called unless something this array different in the last time you called it dont even try to compute it the value just give me back the same thing you got last time and thats solve lots of our problem

// But there is also a libray that is frquently used with react which is  Rselect and Rselect is allows we to do very similar to the array like syntax for caching values  that we see in  useMemo and useCallback

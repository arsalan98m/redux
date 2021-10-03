import { useSelector } from 'react-redux';
import {
  selectCount,
  increment,
  decrement,
  incrementByAmount,
} from './features/counterSlice';
import './App.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const value = useSelector(selectCount);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(incrementByAmount(+input));
  };

  return (
    <div className='app'>
      <h1>Value of counter is: {value} </h1>

      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <hr />

      <h2>Increment by value:</h2>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit'>set value</button>
      </form>
    </div>
  );
}

export default App;

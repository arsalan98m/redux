import { useEffect, useState } from 'react';
import { set } from './redux/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const SetCounter = () => {
  const countFromStore = useSelector((state) => state.count);
  const [inputValue, setInputValue] = useState(countFromStore);
  const dispatch = useDispatch();

  useEffect(() => {
    setInputValue(countFromStore);
  }, [countFromStore]);

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(inputValue));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type="submit" />
      </form>
    </section>
  );
};

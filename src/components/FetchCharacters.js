import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCharactresFromAPI } from '../feature/charactersSlice';

const FetchCharacters = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCharactresFromAPI(input));
    setInput('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Search star wars characters'
        />
        <br />
        <button type='submit'>Serach</button>
      </form>
    </div>
  );
};

export default FetchCharacters;

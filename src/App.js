import Characters from './components/Characters';
import FetchCharacters from './components/FetchCharacters';

function App() {
  return (
    <div>
      <h1>Star wars characters</h1>

      <FetchCharacters />
      <hr />
      <Characters />
    </div>
  );
}

export default App;

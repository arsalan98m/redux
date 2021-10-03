import { useSelector } from 'react-redux';

const Characters = () => {
  const characters = useSelector((state) => state.characters.data);
  const loading = useSelector((state) => state.characters.loading);

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {characters.map((character) => (
        <article>
          <a
            href={`https://star-wars-characters.glitch.me/api/characters/${character.id}`}
          >
            {character.name}
          </a>
        </article>
      ))}
    </div>
  );
};

export default Characters;

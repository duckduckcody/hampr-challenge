import { useState } from 'react';
import styled from 'styled-components';
import { Champions } from './components/Champions/Champions';
import { List } from './components/List/List';
import { Masthead } from './components/Masthead/Masthead';
import jsonData from './data/characters.json';
import type { Character } from './types';

// when using any kind of external data in Typescript you need to first validate it.
// use something like zod to check the structure of the json matches the type before using.
const characters: Character[] = jsonData as Character[];
// here the json doesn't match the type as some characters don't always have tags
// for time I haven't made a zod parser and instead changed the type.
// (the correct way would be to make a parser)

const StyledChampions = styled(Champions)`
  padding: 24px 0 38px 0;
`;

function App() {
  const [champions, setChampions] = useState<Character[]>([
    characters[0],
    characters[1],
    characters[2],
  ]);

  const onChampionRemoveClick = (character: Character) => {
    setChampions((champions) =>
      champions.filter((champion) => champion.id !== character.id)
    );
  };

  return (
    <div>
      <Masthead />
      <StyledChampions
        onChampionRemoveClick={onChampionRemoveClick}
        champions={champions}
      />
      <List characters={characters} />
    </div>
  );
}

export default App;

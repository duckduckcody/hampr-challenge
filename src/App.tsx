import { List } from './components/List/List';
import { Masthead } from './components/Masthead/Masthead';
import jsonData from './data/characters.json';
import type { Character } from './types';

const characters: Character[] = jsonData as Character[];
console.log('characters', characters);

function App() {
  return (
    <div>
      <Masthead />
      <List characters={characters} />
    </div>
  );
}

export default App;

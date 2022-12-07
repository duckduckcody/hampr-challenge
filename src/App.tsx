import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Champions } from './components/Champions/Champions';
import { List } from './components/List/List';
import { Masthead } from './components/Masthead/Masthead';
import { Search } from './components/Search/Search';
import { TagsFilter } from './components/TagsFilter/TagsFilter';
import jsonData from './data/characters.json';
import { useTags } from './hooks/useTags';
import type { Character } from './types';

// when using any kind of external data in Typescript you need to first validate it.
// use something like zod to check the structure of the json matches the type before using.
const characters: Character[] = jsonData as Character[];
// here the json doesn't match the type as some characters don't always have tags
// also Android 21 (Lab Coat) doesn't have a thumbnail image
// for time I haven't made a zod parser and instead changed the type.
// (the correct way would be to make a parser)

const StyledChampions = styled(Champions)`
  padding: 24px 0 38px 0;
`;

const StyledSearch = styled(Search)`
  padding: 0 0 40px 0;
`;

const StyledTagsFilter = styled(TagsFilter)`
  padding: 0 44px 58px 44px;
`;

const NoResultsText = styled.p`
  text-align: center;
`;

function App() {
  const [champions, setChampions] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [myTeamFilter, setMyTeamFilter] = useState(false);

  const tags = useTags(characters);

  useEffect(() => {
    setFilteredCharacters(() => {
      let filteredCharacters = characters;
      if (search) {
        filteredCharacters = filteredCharacters.filter((character) => {
          const nameIncludes = character.name.includes(search);
          const tagIncludes = character.tags?.some((tag) =>
            tag.tag_name.includes(search)
          );

          return nameIncludes || tagIncludes;
        });
      }

      if (myTeamFilter) {
        filteredCharacters = filteredCharacters.filter((character) =>
          champions.some((champion) => champion.id === character.id)
        );
      }

      // create an exclusive filter
      if (selectedTags.length) {
        // filteredCharacters = filteredCharacters.filter((character) => {
        //   const sameLength = selectedTags.length = character.
        // }
        // character.tags?.some((tag) => selectedTags.includes(tag.tag_name))
        // );
      }

      return filteredCharacters;
    });
  }, [champions, myTeamFilter, search, selectedTags]);

  const onChampionRemoveClick = (character: Character) => {
    setChampions((champions) =>
      champions.filter((champion) => champion.id !== character.id)
    );
  };

  const onCharacterAdd = (character: Character) => {
    const isNewCharacter = !champions.some(
      (champion) => champion.id === character.id
    );

    if (isNewCharacter && champions.length < 6) {
      setChampions((champions) => champions.concat(character));
    }
  };

  const onSearchChange = (value: string) => setSearch(value);

  const onTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags((selectedTags) =>
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags((selectedTags) => selectedTags.concat(tag));
    }
  };

  const onTagsFilterClearAllClick = () => {
    setSelectedTags([]);
    setMyTeamFilter(false);
  };

  const onMyTeamFilterClick = () => {
    setMyTeamFilter((myTeamFiler) => !myTeamFiler);
  };

  return (
    <div>
      <Masthead />
      <StyledChampions
        onChampionRemoveClick={onChampionRemoveClick}
        champions={champions}
      />

      <StyledSearch value={search} onChange={onSearchChange} />

      <StyledTagsFilter
        tags={tags}
        onTagClick={onTagClick}
        selectedTags={selectedTags}
        onTagsFilterClearAllClick={onTagsFilterClearAllClick}
        myTeamFilter={myTeamFilter}
        onMyTeamFilterClick={onMyTeamFilterClick}
      />

      {filteredCharacters.length > 0 && (
        <List
          characters={filteredCharacters}
          onCharacterAdd={onCharacterAdd}
          onChampionRemoveClick={onChampionRemoveClick}
          champions={champions}
        />
      )}

      {filteredCharacters.length === 0 && (
        <NoResultsText>No characters match your search</NoResultsText>
      )}
    </div>
  );
}

export default App;

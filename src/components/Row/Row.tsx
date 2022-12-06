import { FC, useMemo } from 'react';
import styled from 'styled-components';
import { Character } from '../../types';
import { TagBadge } from '../TagBadge/TagBadge';
import { Thumbnail } from '../Thumbnail/Thumbnail';

const Container = styled.tr<{ highlight: boolean }>`
  background: ${(p) => (p.highlight ? '#EDF5FF' : 'white')};

  &:hover {
    background: #f5f9ff;
  }
`;

const NameContainer = styled.td`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  padding: 24px 0 24px 24px;
`;

const Name = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  margin-left: 26px;
`;

const TagsContainer = styled.td`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  gap: 8px;
`;

const AbilityScore = styled.td<{ highlight?: boolean }>`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: ${(p) => (p.highlight ? '#FF0000' : '#000000')};
  text-align: center;
`;

const ActionCell = styled.td`
  padding: 0 12px 0 0;
`;

const Button = styled.button`
  width: 75px;
  padding: 5px 0;
`;

const FullSquadText = styled.p`
  margin: 0;
  text-align: center;
`;

export interface RowProps {
  character: Character;
  onCharacterAdd: (character: Character) => void;
  champions: Character[];
  onChampionRemoveClick: (character: Character) => void;
}

export const Row: FC<RowProps> = ({
  character,
  onCharacterAdd,
  champions,
  onChampionRemoveClick,
}) => {
  // an api's only concern is data.
  // don't rely on api response for order, guarantee order manually.
  // and inside a memo so these finds are only run once.
  const abilities = useMemo(() => {
    const power = character.abilities.find(
      (ability) => ability.abilityName === 'Power'
    );

    const mobility = character.abilities.find(
      (ability) => ability.abilityName === 'Mobility'
    );

    const technique = character.abilities.find(
      (ability) => ability.abilityName === 'Technique'
    );

    const survivability = character.abilities.find(
      (ability) => ability.abilityName === 'Survivability'
    );

    const energy = character.abilities.find(
      (ability) => ability.abilityName === 'Energy'
    );

    return [power, mobility, technique, survivability, energy];
  }, [character.abilities]);

  const isAChampion = useMemo(
    () => champions.some((champion) => champion.id === character.id),
    [champions, character.id]
  );

  const championsAreFull = champions.length === 6;

  return (
    <Container highlight={isAChampion}>
      <NameContainer>
        <Thumbnail src={character.thumbnail} />
        <Name>{character.name}</Name>
      </NameContainer>

      <td>
        <TagsContainer>
          {character.tags?.map((tag) => (
            <TagBadge tag={tag} key={tag.slot} />
          ))}
        </TagsContainer>
      </td>

      {abilities.map((ability) => (
        <AbilityScore
          highlight={ability?.abilityScore === 10}
          key={ability?.abilityName}
        >
          {ability?.abilityScore}
        </AbilityScore>
      ))}

      <ActionCell>
        {isAChampion && (
          <Button onClick={() => onChampionRemoveClick(character)}>
            Remove
          </Button>
        )}

        {!isAChampion && championsAreFull && (
          <FullSquadText>Squad is full</FullSquadText>
        )}

        {!isAChampion && !championsAreFull && (
          <Button onClick={() => onCharacterAdd(character)}>Add</Button>
        )}
      </ActionCell>
    </Container>
  );
};

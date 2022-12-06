import { FC, useMemo } from 'react';
import styled from 'styled-components';
import { Character } from '../../types';
import { TagBadge } from '../TagBadge/TagBadge';
import { Thumbnail } from '../Thumbnail/Thumbnail';

const Container = styled.tr``;

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

export interface RowProps {
  character: Character;
}

export const Row: FC<RowProps> = ({ character }) => {
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
  }, [character]);

  return (
    <Container>
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

      <td>
        <button>Add</button>
      </td>
    </Container>
  );
};

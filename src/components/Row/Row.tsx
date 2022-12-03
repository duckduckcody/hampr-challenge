import { FC, useMemo } from 'react';
import styled from 'styled-components';
import { Character } from '../../types';
import { TagBadge } from '../TagBadge/TagBadge';
import { Thumbnail } from '../Thumbnail/Thumbnail';

const Container = styled.tr`
  align-items: center;
  /* justify-content: ; */
`;

const NameContainer = styled.td`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const Input = styled.input`
  margin-right: 29px;
`;

const Name = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  margin-left: 26px;
`;

const TagsContainer = styled.td`
  gap: 15px;
`;

const AbilityScore = styled.td<{ highlight?: boolean }>`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: ${(p) => (p.highlight ? '#FF0000' : '#000000')};
`;

export interface RowProps {
  character: Character;
}

export const Row: FC<RowProps> = ({ character }) => {
  // don't rely on api response for order, guarantee order manually.
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
        <Input type='checkbox' />
        <Thumbnail src={character.thumbnail} />
        <Name>{character.name}</Name>
      </NameContainer>

      <TagsContainer>
        {character.tags?.map((tag) => (
          <TagBadge tag={tag} key={tag.slot} />
        ))}
      </TagsContainer>

      {abilities.map((ability) => (
        <AbilityScore
          highlight={ability?.abilityScore === 10}
          key={ability?.abilityName}
        >
          {ability?.abilityScore}
        </AbilityScore>
      ))}
    </Container>
  );
};

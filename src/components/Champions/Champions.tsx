import { FC } from 'react';
import styled from 'styled-components';
import { Character } from '../../types';
import { ChampionAverages } from '../ChampionAverages/ChampionAverages';
import { ChampionImage } from '../ChampionImage/ChampionImage';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Heading = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  margin: 0;
  margin-bottom: 16px;
`;

const ChampionsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 8px;
  margin-bottom: 24px;
`;

const ChampionContainer = styled.div`
  flex-flow: column nowrap;
  max-width: 80px;
`;

const ChampionName = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
`;

interface ChampionsProps {
  champions: Character[];
  onChampionRemoveClick: (character: Character) => void;
  className?: string;
}

export const Champions: FC<ChampionsProps> = ({
  champions,
  onChampionRemoveClick,
  className,
}) => {
  // always render 6 image borders to represent that you should select 6 champions
  const championsRange = Array.from({ length: 6 }, (x, i) => i);

  return (
    <Container className={className}>
      <Heading>Your Champions!</Heading>

      <ChampionsContainer>
        {championsRange.map((index) => (
          <ChampionContainer
            key={
              champions[index]?.id ? `character-${champions[index]?.id}` : index
            }
          >
            <ChampionImage
              champion={champions[index]}
              onRemoveClick={onChampionRemoveClick}
            />
            <ChampionName>
              {champions[index] && champions[index].name}
            </ChampionName>
          </ChampionContainer>
        ))}
      </ChampionsContainer>

      <ChampionAverages champions={champions} />
    </Container>
  );
};

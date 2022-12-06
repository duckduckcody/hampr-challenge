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

const ChampionImages = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 8px;
  margin-bottom: 40px;
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
  const championsRange = Array.from({ length: 6 }, (x, i) => i);

  return (
    <Container className={className}>
      <Heading>Your Champions!</Heading>

      <ChampionImages>
        {championsRange.map((index) => (
          <ChampionImage
            key={champions[index]?.id ?? index}
            champion={champions[index]}
            onRemoveClick={onChampionRemoveClick}
          />
        ))}
      </ChampionImages>

      <ChampionAverages champions={champions} />
    </Container>
  );
};

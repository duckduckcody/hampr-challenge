import { FC } from 'react';
import styled from 'styled-components';
import { Character } from '../../types';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  gap: 8px;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: 1px solid #217aff;
`;

const EmptyImage = styled(Image).attrs({ as: 'div' })`
  border: 1px solid grey;
`;

const RemoveButton = styled.button`
  all: unset;

  background: lightgrey;
  color: black;
  cursor: pointer;
  position: absolute;
  right: 0;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
`;

export interface ChampionImageProps {
  champion: Character | undefined;
  onRemoveClick: (character: Character) => void;
}

export const ChampionImage: FC<ChampionImageProps> = ({
  champion,
  onRemoveClick,
}) => (
  <Container>
    {!champion && <EmptyImage></EmptyImage>}
    {champion && (
      <>
        <Image src={champion.image}></Image>
        <RemoveButton onClick={() => onRemoveClick(champion)}>X</RemoveButton>
      </>
    )}
  </Container>
);

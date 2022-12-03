import { FC } from 'react';
import styled from 'styled-components';
import { Character } from '../../types';
import { Row } from '../Row/Row';

const Container = styled.table`
  width: 100%;
`;

const TableHeading = styled.th`
  text-align: left;
`;

export interface ListProps {
  characters: Character[];
}

export const List: FC<ListProps> = ({ characters }) => (
  <Container>
    <tr>
      <TableHeading>Character</TableHeading>
      <TableHeading>Tags</TableHeading>
      <TableHeading>Power</TableHeading>
      <TableHeading>Mobility</TableHeading>
      <TableHeading>Technique</TableHeading>
      <TableHeading>Survivability</TableHeading>
      <TableHeading>Energy</TableHeading>
    </tr>

    {characters.map((character) => (
      <Row character={character} key={character.id} />
    ))}
  </Container>
);

import { FC } from 'react';
import styled from 'styled-components';
import { Character } from '../../types';
import { Row } from '../Row/Row';

const Container = styled.table`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
`;

const TableHeading = styled.th`
  text-align: left;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  padding-bottom: 10px;
`;

const TableHeadingAbility = styled(TableHeading)`
  text-align: center;
  width: 100px;
`;

const TableBody = styled.tbody`
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export interface ListProps {
  characters: Character[];
}

export const List: FC<ListProps> = ({ characters }) => (
  <Container>
    <thead>
      <tr>
        <TableHeading>Character</TableHeading>
        <TableHeading>Tags</TableHeading>
        <TableHeadingAbility>Power</TableHeadingAbility>
        <TableHeadingAbility>Mobility</TableHeadingAbility>
        <TableHeadingAbility>Technique</TableHeadingAbility>
        <TableHeadingAbility>Survivability</TableHeadingAbility>
        <TableHeadingAbility>Energy</TableHeadingAbility>
      </tr>
    </thead>

    <TableBody>
      {characters.map((character) => (
        <Row character={character} key={character.id} />
      ))}
    </TableBody>
  </Container>
);

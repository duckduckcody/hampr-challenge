import { FC } from 'react';
import styled from 'styled-components';
import MortalKombatLogo from '../../img/Mortal-Kombat-Logo.png';

const Container = styled.div`
  width: 100%;
  height: 76px;
  background-color: black;
  position: relative;
  margin-bottom: 45px;
`;

const Image = styled.img`
  height: 90px;
  width: auto;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 0;
  transform: translateY(50%);
`;

export interface MastheadProps {}

export const Masthead: FC<MastheadProps> = () => (
  <Container>
    <Image src={MortalKombatLogo} alt='Mortal Kombat Logo' />
  </Container>
);

import { FC, useMemo } from 'react';
import styled from 'styled-components';
import { Character } from '../../types';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 22px;
`;

const AveragesContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 34px;
`;

const AverageContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
`;

const AverageName = styled.p`
  all: unset;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;

const AverageValue = styled.p`
  all: unset;

  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
`;

const Disclaimer = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #666666;
`;

export interface ChampionAveragesProps {
  champions: Character[];
}

export const ChampionAverages: FC<ChampionAveragesProps> = ({ champions }) => {
  const averages = useMemo(() => {
    const totals = champions.reduce(
      (prev, current) => {
        const power = current.abilities.find(
          (ability) => ability.abilityName === 'Power'
        )?.abilityScore;

        const mobility = current.abilities.find(
          (ability) => ability.abilityName === 'Mobility'
        )?.abilityScore;

        const technique = current.abilities.find(
          (ability) => ability.abilityName === 'Technique'
        )?.abilityScore;

        const survivability = current.abilities.find(
          (ability) => ability.abilityName === 'Survivability'
        )?.abilityScore;

        const energy = current.abilities.find(
          (ability) => ability.abilityName === 'Energy'
        )?.abilityScore;

        return {
          power: (prev.power += power ?? 0),
          mobility: (prev.mobility += mobility ?? 0),
          technique: (prev.technique += technique ?? 0),
          survivability: (prev.survivability += survivability ?? 0),
          energy: (prev.energy += energy ?? 0),
        };
      },
      { power: 0, mobility: 0, technique: 0, survivability: 0, energy: 0 }
    );

    for (const [key, value] of Object.entries(totals)) {
      // @ts-ignore
      totals[key] = (value / champions.length).toFixed(2);
    }

    return totals;
  }, [champions]);

  return (
    <Container>
      <AveragesContainer>
        {Object.entries(averages).map(([key, value]) => (
          <AverageContainer key={key}>
            <AverageName>{key}</AverageName>
            <AverageValue>{value}</AverageValue>
          </AverageContainer>
        ))}
      </AveragesContainer>

      <Disclaimer>* Totals as average for squad</Disclaimer>
    </Container>
  );
};

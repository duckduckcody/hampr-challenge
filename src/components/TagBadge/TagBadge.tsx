import { FC } from 'react';
import styled from 'styled-components';
import { CharacterTag } from '../../types';

const Container = styled.span`
  background: #ffffff;
  border: 1px solid #217aff;
  border-radius: 20px;
  color: #217aff;
  padding: 10px 14px;
`;

export interface TagBadgeProps {
  tag: CharacterTag;
}

export const TagBadge: FC<TagBadgeProps> = ({ tag }) => (
  <Container>{tag.tag_name}</Container>
);

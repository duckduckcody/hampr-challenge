import { FC } from 'react';
import styled from 'styled-components';
import { CharacterTag } from '../../types';

const TagBadgeContainer = styled.span`
  background: #ffffff;
  border: 1px solid #217aff;
  border-radius: 20px;
  color: #217aff;
  padding: 10px 14px;
  text-transform: capitalize;
`;

export interface TagBadgeProps {
  tag: CharacterTag;
}

export const TagBadge: FC<TagBadgeProps> = ({ tag }) => (
  <TagBadgeContainer>{tag.tag_name}</TagBadgeContainer>
);

const TagButtonContainer = styled(TagBadgeContainer).attrs({
  as: 'button',
})<{ selected: boolean }>`
  color: ${(p) => (p.selected ? 'white' : '#217aff')};
  cursor: pointer;
  background-color: ${(p) => (p.selected ? '#217aff' : 'white')};
`;

export interface TagButtonProps {
  tag: string;
  selected: boolean;
  onTagClick: (tag: string) => void;
}

export const TagButton: FC<TagButtonProps> = ({
  tag,
  selected,
  onTagClick,
}) => (
  <TagButtonContainer selected={selected} onClick={() => onTagClick(tag)}>
    {tag}
  </TagButtonContainer>
);

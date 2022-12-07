import { FC } from 'react';
import styled from 'styled-components';
import { TagButton } from '../TagBadge/TagBadge';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
`;

export interface TagsFilterProps {
  tags: string[];
  onTagClick: (tag: string) => void;
  selectedTags: string[];
  onTagsFilterClearAllClick: () => void;
  myTeamFilter: boolean;
  onMyTeamFilterClick: () => void;
  className?: string;
}

export const TagsFilter: FC<TagsFilterProps> = ({
  tags,
  onTagClick,
  selectedTags,
  onTagsFilterClearAllClick,
  myTeamFilter,
  onMyTeamFilterClick,
  className,
}) => (
  <Container className={className}>
    {tags.length > 0 &&
      tags.map((tag) => (
        <TagButton
          key={tag}
          tag={tag}
          selected={selectedTags.includes(tag)}
          onTagClick={onTagClick}
        />
      ))}

    <TagButton
      tag={'My Team'}
      selected={myTeamFilter}
      onTagClick={onMyTeamFilterClick}
    />

    <button onClick={onTagsFilterClearAllClick}>Clear all</button>
  </Container>
);

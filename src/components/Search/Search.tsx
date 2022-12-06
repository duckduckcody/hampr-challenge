import { FC } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const SearchInput = styled.input`
  max-width: 500px;
  width: 100%;
  padding: 5px;
`;

export interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const Search: FC<SearchProps> = ({ className, value, onChange }) => {
  return (
    <SearchContainer className={className}>
      <SearchInput
        type='text'
        placeholder='Search Characters'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </SearchContainer>
  );
};

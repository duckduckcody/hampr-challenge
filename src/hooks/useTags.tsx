import { useMemo } from 'react';
import { Character } from '../types';

export const useTags = (characters: Character[]) => {
  return useMemo(() => {
    const uniqueTags: string[] = [];

    characters.forEach((character) =>
      character.tags?.forEach((tag) => {
        if (!uniqueTags.includes(tag.tag_name)) {
          uniqueTags.push(tag.tag_name);
        }
      })
    );

    return uniqueTags;
  }, [characters]);
};

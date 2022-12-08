import { useMemo } from 'react';
import { Character } from '../types';

/**
 * get all unique tags from the characters data
 * @param characters the character data
 * @returns string array of tag names
 */
export const useTags = (characters: Character[]): string[] => {
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

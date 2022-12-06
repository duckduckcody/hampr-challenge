import { FC } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 1px solid #217aff;
`;

export interface ThumbnailProps {
  src: string;
  className?: string;
}

export const Thumbnail: FC<ThumbnailProps> = ({ src, className }) => (
  <Image className={className} src={src} />
);

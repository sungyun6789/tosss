import styled from '@emotion/styled';

import type { EmptyImageType } from './EmptyImage.type';

export const EmptyImageStyle = styled.div<EmptyImageType>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  margin: auto;
  border-radius: 50%;
  border: 1px solid #f0f0f0;
`;

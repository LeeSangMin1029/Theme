import { memo } from 'react';
import styled, { keyframes } from 'styled-components';

const rotateColor = keyframes`
  from {
    filter: hue-rotate(0deg);
  }
  to{
    filter: hue-rotate(360deg);
  }
`;

const AnimImage = styled.img`
  :hover {
    animation: ${rotateColor} 1s linear infinite;
  }
`;

const Image = (props) => {
  const { src, alt } = props;
  return <AnimImage src={src} alt={alt} {...props} />;
};

export default memo(Image);

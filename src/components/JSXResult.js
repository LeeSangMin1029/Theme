import styled from 'styled-components';
import { LivePreview, withLive } from 'react-live';

const Error = styled.pre`
  color: red;
  font-size: 13px;
  white-space: pre-wrap;
  padding: 10px;
`;

const JSXResult = (props) => {
  const { live } = props;
  const { error } = live;
  return error ? <Error>{error}</Error> : <LivePreview Component={'div'} />;
};

export default withLive(JSXResult);

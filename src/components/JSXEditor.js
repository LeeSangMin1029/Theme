import styled from 'styled-components';
import { LiveProvider, LiveEditor } from 'react-live';
import JSXResult from './JSXResult.js';

const StyleEditor = styled(LiveEditor)`
  background-color: black;
  caret-color: white;
`;
const Header = styled.div((props) => ({
  backgroundColor: props.backgroundColor,
  padding: '0px 10px',
}));
const Title = styled.div`
  color: white;
  font-weight: 700;
  font-size: 15px;
  line-height: 3;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;
const Box = styled.div((props) => ({
  overflow: 'hidden',
  borderRadius: props.radius,
  border: props.border,
  flex: 1,
}));

const Container = styled.div`
  margin-top: 40px;
  display: flex;
`;

const JSXEditor = ({ code }) => {
  return (
    <LiveProvider code={code}>
      <Container>
        <Box radius='10px 0px 0px 10px'>
          <Header backgroundColor='#333333'>
            <Title>Live JSX Editor</Title>
          </Header>
          <StyleEditor />
        </Box>
        <Box radius='0px 10px 10px 0px' border='1px solid #EF5350'>
          <Header backgroundColor='#EF5350'>
            <Title>Result</Title>
          </Header>
          <JSXResult />
        </Box>
      </Container>
    </LiveProvider>
  );
};

export default JSXEditor;

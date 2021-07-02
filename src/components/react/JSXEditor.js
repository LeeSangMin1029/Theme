import { LiveProvider, LivePreview, LiveEditor, withLive } from 'react-live';
import styled from 'styled-components';

const StyleEditor = styled.div`
  background-color: black;
  caret-color: white;
  max-height: 300px;
  overflow: auto;
`;
const Header = styled.div((props) => ({
  backgroundColor: props.backgroundColor,
  padding: '0px 10px',
}));
const Title = styled.div((props) => ({
  color: props.color,
  fontWeight: '700',
  fontSize: '15px',
  lineHeight: '3',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
}));
const Box = styled.div((props) => ({
  borderRadius: props.radius,
  border: props.border,
  overflow: 'hidden',
  flex: 1,
}));
const Container = styled.div`
  margin-top: 40px;
  display: flex;
`;
const Error = styled.pre`
  color: red;
  font-size: 13px;
  white-space: pre-wrap;
  padding: 10px;
`;

const JSXResult = withLive((props) => {
  const { live } = props;
  const { error } = live;
  return (
    <Box
      radius='0px 10px 10px 0px'
      border={`1px solid ${error ? '#EF5350' : '#ECECEC'}`}
    >
      <Header backgroundColor={error ? '#EF5350' : '#ECECEC'}>
        <Title color={error ? 'white' : '#757575'}>Result</Title>
      </Header>
      {error ? <Error>{error}</Error> : <LivePreview Component={'div'} />}
    </Box>
  );
});

const JSXEditor = ({ code }) => {
  return (
    <LiveProvider code={code}>
      <Container>
        <Box radius='10px 0px 0px 10px'>
          <Header backgroundColor='#333333'>
            <Title color='white'>Live JSX Editor</Title>
          </Header>
          <StyleEditor>
            <LiveEditor />
          </StyleEditor>
        </Box>
        <JSXResult />
      </Container>
    </LiveProvider>
  );
};

export default JSXEditor;

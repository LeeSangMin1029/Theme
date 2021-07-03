import JSXEditor from '../JSXEditor';
import HelloMessage from './HelloMessage';

const scope = { HelloMessage };
const code = `
render(<HelloMessage name='sangmin'/>);
`;

const ExampleView = () => {
  return <JSXEditor code={code} scope={scope} noInline={true} />;
};

export default ExampleView;

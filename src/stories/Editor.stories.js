import JSXEditor from '../components/JSXEditor.js';
const code = `
function add(a, b){
  return a + b;
}
`;
export const Editor = () => {
  return (
    <JSXEditor
      code={code}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
  );
};
export default {
  title: 'Editor',
  component: JSXEditor,
};

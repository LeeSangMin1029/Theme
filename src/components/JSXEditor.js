import { useCallback, useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const JSXEditor = (props) => {
  const { code, style } = props;
  const [_code, setCode] = useState(code);
  const onChange = useCallback(
    (changed_code) => {
      setCode(changed_code);
    },
    [setCode]
  );
  return (
    <Editor
      value={_code}
      onValueChange={onChange}
      highlight={(code) => highlight(code, languages.js)}
      padding={10}
      style={style}
      {...props}
    />
  );
};
export default JSXEditor;

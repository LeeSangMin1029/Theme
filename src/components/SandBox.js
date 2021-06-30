import { useEffect, useState, useRef } from 'react';
import { createEditor } from '../utils/editor.js';

const SandBox = () => {
  const [code, setCode] = useState(`import x from 'x';

// edit this example

function Greet() {
  return <span>Hello World!</span>
}

<Greet />
`);
  const el = useRef();
  useEffect(() => {
    const editor = createEditor(el.current);
    editor.run(code);
  }, [code]);
  const onChange = (e) => {
    const { value } = e.target;
    setCode(value);
  };
  return (
    <>
      <textarea value={code} onChange={onChange} />
      <div ref={el}> </div>
    </>
  );
};

export default SandBox;

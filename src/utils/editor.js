/* eslint-disable */
import ObjPath from 'object-path';
import * as acorn from 'acorn';
import { generate as generateJs } from 'escodegen';
import { transform as babelTransform } from '@babel/standalone';

function isReactNode(node) {
  const type = node.type;
  const obj = ObjPath.get(node, 'expression.callee.object.name');
  const func = ObjPath.get(node, 'expression.callee.property.name');
  return (
    type === 'ExpressionStatement' &&
    obj === 'React' &&
    func === 'createElement'
  );
}

export function findReactNode(ast) {
  const { body } = ast;
  return body.find(isReactNode);
}

export function createEditor(domElement, moduleResolver = () => null) {
  function render(node) {
    import('react-dom').then((dom) => {
      dom.render(node, domElement);
    });
  }

  function require(moduleName) {
    return moduleResolver(moduleName);
  }

  function getWrapperFunction(code) {
    try {
      const tcode = babelTransform(code, { presets: ['es2015', 'react'] }).code;
      const ast = acorn.parse(tcode, {
        sourceType: 'module',
      });
      const rnode = findReactNode(ast);
      if (rnode) {
        const nodeIndex = ast.body.indexOf(rnode);
        const createElSrc = generateJs(rnode).slice(0, -1);
        const renderCallAst = acorn.parse(`render(${createElSrc})`).body[0];
        ast.body[nodeIndex] = renderCallAst;
      }
      return new Function('React', 'render', 'require', generateJs(ast));
    } catch (ex) {
      render(<pre style={{ color: 'red' }}>{ex.message}</pre>);
    }
  }

  return {
    compile(code) {
      return getWrapperFunction(code);
    },
    run(code) {
      (async () => {
        const react = await import('react');
        this.compile(code)(react, render, require);
      })();
    },
    getCompiledCode(code) {
      return getWrapperFunction(code).toString();
    },
  };
}

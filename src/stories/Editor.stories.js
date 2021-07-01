import React from 'react';
import JSXEditor from '../components/JSXEditor';

export default {
  component: JSXEditor,
  title: 'JSXEditor',
};

export const Primary = () => (
  <JSXEditor
    code={`class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(state => ({ count: state.count + 1 }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <center>
        <h3>
          {this.state.count}
        </h3>
      </center>
    )
  }
}`}
  />
);

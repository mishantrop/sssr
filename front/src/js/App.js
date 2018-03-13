import React from 'react';
import Counter from './Counter';

export default class App extends React.Component {
  render() {
    return(
      <div className="app">
        <Counter count={100} />
      </div>
    );
  };
}

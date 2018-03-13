import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.count
    }
  };

  static propTypes = {
    count: React.PropTypes.number.isRequired
  };

  static defaultProps = {
    count: 0
  };

  countUp() {
    this.setState({count: this.state.count + 1});
  };

  countDown() {
    this.setState({count: this.state.count - 1});
  };

  render() {
    return(
      <div className="counter">
        <button onClick={this.countDown.bind(this)}> V </button>
          <span className="count">
            {this.state.count}
          </span>
        <button onClick={this.countUp.bind(this)}> ^ </button>
      </div>
    );
  };
}

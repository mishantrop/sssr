import React from 'react';
import PropTypes from 'prop-types'

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.count,
    }
  };

  static propTypes = {
    count: PropTypes.number.isRequired,
  };

  static defaultProps = {
    count: 0,
  };

  countUp() {
    this.setState({
      count: parseInt(this.state.count, 10) + 1,
    });
  };

  countDown() {
    this.setState({
      count: parseInt(this.state.count, 10) - 1,
    });
  };

  render() {
    return(
      <div className="counter">
        <button onClick={() => { this.countDown(); }}> V </button>
          <span className="count">
            {this.state.count}
          </span>
        <button onClick={() => { this.countUp(); }}> ^ </button>
      </div>
    );
  };
}

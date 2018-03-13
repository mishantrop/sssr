import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.countUp = this.countUp.bind(this);
    this.countDown = this.countDown.bind(this);
    this.state = {
      count: this.props.count
    }
  };

   static defaultProps = {
    count: 0
  };

  static propTypes = {
    count: React.PropTypes.number.isRequired
  };

  countUp(event) {
    this.setState({count: this.state.count + 1});
  };

  countDown(event) {
    this.setState({count: this.state.count - 1});
  };

  render() {
    return(
      <div className='counter'>
        <span className='count'>
          {this.state.count}
        </span>
        <button onClick={this.countUp.bind(this)}> VVERH </button>
        <button onClick={this.countDown.bind(this)}> VNIZ </button>
      </div>
    );
  };
}

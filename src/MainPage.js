import React, { Component } from 'react';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      seconds: new Date().getSeconds()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      seconds: new Date().getSeconds()
    });
  }
  render() {
    return (
      <div>
      <p className="App-clock">
        {this.state.hour}:{this.state.minute}:{this.state.seconds}
      </p>
    </div>
    );
  }

}

export default MainPage;

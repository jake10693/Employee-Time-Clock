import React, { Component } from 'react';
import Clock from 'react-clock';
import './style.css'

class AnalogClock extends Component {
  
  constructor() {
      super(); 
      this.state = {date: new Date()};
  }

  componentDidMount() {
    this.update = setInterval(() =>
      this.setState({date: new Date()}),
      1000
    );
  }

  componentWillUnmount() { // delete the interval just before component is removed
    clearInterval(this.update);
  }
 
  render() {
    const { date } = this.state
    
    return (
      <>
        <Clock value={date} size={200}/>
      </>
    );
  }
}

export default AnalogClock;
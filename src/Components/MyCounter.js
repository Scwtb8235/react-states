/* eslint-disable no-unreachable */
import React, { Component } from 'react'
import CounterDisplayer from './CounterDisplayer'
import EvenCounterDisplayer from './EvenCounterDisplayer';

 class MyCounter extends Component {
   constructor() {
     super();
     this.state = {
       counter: 0,
     };
   }

  allClicksCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
   }

   render() {
     return (
     <>
    <h1>My Counter </h1>

    <button onClick={this.allClicksCounter}>Click Me!</button>
    <CounterDisplayer CounterDisplayer={this.state.counter} />
    <EvenCounterDisplayer EvenCounter={this.state.counter} />
     </>
     )
   }
 }
export default MyCounter
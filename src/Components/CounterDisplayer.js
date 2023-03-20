import React, { Component } from 'react'

 class CounterDisplayer extends Component {
  render() {
    return (
      <>
    <h3>allClicksCounter from CounterDisplayer: {this.props.CounterDisplayer}</h3>
      </>
    )
  }
}
export default CounterDisplayer
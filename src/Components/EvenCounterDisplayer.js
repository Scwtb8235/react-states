import React, { Component } from 'react'
class EvenCounterDisplayer extends Component {

render() {
const evenCounter = Math.floor(this.props.EvenCounter / 2) * 2;


    return (
    <>
        <h3>Even number Displayer :{evenCounter}</h3>
    </>
    )
}
}

export default EvenCounterDisplayer
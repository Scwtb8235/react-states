import React, { Component } from 'react'
class EvenCounterDisplayer extends Component {

render() {
const evenCounter = Math.floor(this.props.EvenCounter / 2) * 2;
// let x = [];
// const evenCounter=()=>{
//     for (; x <= x.length; x=+2) {
//     if (x%2===0) {
//         console.log(x + " is even");
//     } 
//     }
//     }
    return (
    <>
        <h3>Even number Displayer :{evenCounter}</h3>
    </>
    )

}
}

export default EvenCounterDisplayer


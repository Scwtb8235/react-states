import React,{useState,useEffect} from 'react'
function UseEffectForTitle() {
const [countValue,setCount]=useState(0)
useEffect(() => {
document.title= `count value ${countValue}`
}, [countValue]);
useEffect(() => {
alert("conmponent is mounted");
}, []);
const button=()=>setCount(countValue+1)
return (
    
    <div>
        <h1>UseEffect</h1>
        <h2>count {countValue}</h2>
        <button onClick={button}>please click me</button>
    </div>
)
}

export default UseEffectForTitle

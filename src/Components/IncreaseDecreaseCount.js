import React,{useState} from 'react'
function IncreaseDecreaseCount() {
    const [count,setCount] = useState(0);
return (
    <div>
        <div> "Value Holder" Inital Count: {count}</div>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
)
}

export default IncreaseDecreaseCount


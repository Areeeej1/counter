import React,{useState,useEffect} from 'react'


const Counter = () => {
   const [count,setCount]=useState(0)
   const [countClass,setCountClass]=useState("spanred");
   useEffect(()=>{
    
   count<0?setCountClass("spanred"):setCountClass("spanNotRed")
  
   },[count])
  const  handleClickAdd=()=>{
        setCount(count+1);
    }
   const handleClickSub=()=>{
       setCount(count-1);
    }
  return (
    <div className='firstDiv'><header>Counter</header>
    
        <button onClick={()=>{handleClickAdd()}}>Add</button>
        <button onClick={()=>{handleClickSub()}}>Sub</button>
    <div className='result'>
        Result: <span className={countClass}>{count}</span>
    </div>
    </div>
  )
}

export default Counter
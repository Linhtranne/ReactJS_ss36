import React, { useState,useEffect } from 'react'

export default function Ex2() {
    const [count,setCount]=useState(0);
    function handleChangeCount() {
        setCount(count+1);
    }
    useEffect(()=>{
        document.title=`${count}`;
    })
  return (
    <div>
        <button onClick={handleChangeCount}> Click {count} lần </button>
    </div>
  )
}
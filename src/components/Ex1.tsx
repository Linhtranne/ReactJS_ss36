import React, { useEffect, useState } from 'react'

export default function Ex1() {

    const [title,settitle]= useState("");
    function changeTitle(e: { target: { value: React.SetStateAction<string>; }; }) {
        settitle(e.target.value)
    }
    useEffect(()=>{
        document.title=title;
    })
  return (
    <div>
        <h1>Bài 1</h1>
        <input type="text" onChange={changeTitle} />
    </div>
  )
}
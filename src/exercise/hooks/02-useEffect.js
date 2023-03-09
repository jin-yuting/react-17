import React, { useState,useEffect,useRef } from 'react'
export default function App() {
  const [text,setText] = useState('linxi')
  const mytext = useRef() // 使用 useRef
  useEffect(()=>{
    setText(text.substring(0).toLocaleUpperCase())
  },[text])//传空数组
  return (
    <div>
      {text}
      <div ref={mytext}></div>
      <button onClick={()=>{setText('11')}}>add</button>
    </div>
  )
}

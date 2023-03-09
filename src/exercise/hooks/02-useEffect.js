import React, { useState,useEffect } from 'react'
export default function App() {
  const [text,setText] = useState('linxi')
  useEffect(()=>{
    setText(text.substring(0).toLocaleUpperCase())
  },[text])//传空数组
  return (
    <div>
      {text}
      <button onClick={()=>{setText('11')}}>add</button>
    </div>
  )
}

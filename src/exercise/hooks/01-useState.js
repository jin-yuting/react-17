import React,{useState} from 'react'

export default function App() {
  const [name,setName] = useState('linxi')
  const [text, setText] = useState('')
  const [list,setList] = useState(['1','2'])
  const handleChange = (evt)=>{
    setText(evt.target.value)
  }
  const handleAdd = ()=>{
    setList([...list,text])
    setText('')
  }
  const handleDel =(index)=>{
    let newList = [...list]
    newList.splice(index,1)
    setList(newList)
  }
  return (
    <div>
      <button onClick={()=>{
        setName('小明')
      }}>click</button>  
      {name}
      <br></br>
      <input onChange={handleChange} value={text}></input>
      <button onClick={handleAdd}>add</button>
      <ul>
        {
          list.map((item,index)=><li key={item}>
            {item}
            <button onClick={(index)=>handleDel(index)}>del</button>
          </li>)
        }
      </ul>
    </div>
  )
}

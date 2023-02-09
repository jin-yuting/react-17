import React, { Component } from 'react'

export default class Todolist extends Component {
  myref = React.createRef()
  state = {
    list:[
      {id:1,text:'测试'},
    ]
  }
  render() {
    return (
      <div>
        <input ref={this.myref} />
        <button onClick={ this.handleClick }>添加</button>
        <ul>
          {
            this.state.list.map( (item,index)=>
            <li key={item.id}>
              {item.text}
              {/* 富文本展示 */}
              {/* <span dangerouslySetInnerHTML={{
                _html:item.text}
              }></span> */}
              <button onClick={ ()=>this.handleDelete(index) }>delete</button>
            </li>)
          }
        </ul>
        {this.state.list.length === 0 && <div>暂无数据</div>}
        {/* <div className={this.state.list.length === 0?'':'hidden'}>暂无数据</div> */}
      </div>
    )
  }

  handleClick = ()=>{
    let newList = [...this.state.list]
    newList.push({
      id: Math.random()*10000000,
      text: this.myref.current.value
    })
    this.setState({
      list:newList
    })
  }
  handleDelete = (index)=>{
    console.log(index,'index');
    let newList = [...this.state.list]
    newList.splice(index,1)
    // splice 直接改变源数组，
    // slice 不改变源数组，返回新数组
    console.log(newList,'newList');
    this.setState({
      list:newList
    })
  }
}

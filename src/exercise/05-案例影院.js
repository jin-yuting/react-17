import React, { Component } from 'react'
import './style.css'
import Film from './component/Film'
import Cinema from './component/Cinema'
import Center from './component/Center'

export default class App extends Component {
  state = {
    list:[
      {id:1,text:'电影'},
      {id:1,text:'影院'},
      {id:1,text:'我的'},
    ],
    current:0
  }
  which(){
    switch(this.state.current){
      case 0:
        return <Film title='标题'></Film>
      case 1:
        return <Cinema></Cinema>
        case 2:
          return <Center></Center>
      default:
        return null
    }
  }
  render() {
    return (
      <div>
        {
          // 表达式-支持函数表达式
          this.which()
        }
        <ul>
          {
            this.state.list.map( (item,index)=>
            <li key={index} className={this.state.current === index?'active':''} onClick={()=>this.handleClick(index)}>
            {item.text}
            </li>)
          }
        </ul>
       
      </div>
    )
  }
  handleClick(index){
    this.setState({
      current: index
    })
  }
}

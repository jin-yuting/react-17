import React, { Component } from 'react'
import './style.css'
import Film from './component/Film'
import Cinema from './component/Cinema'
import Center from './component/Center'
import Tabbar from './component/Tabbar'
import Navbar from './component/Navbar'

export default class App extends Component {
  state ={
    current: 0
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
        <Navbar myevent={()=>{
          this.setState({
            current: 2
          })
        }}></Navbar>
        {
          // 表达式-支持函数表达式
          this.which()
        }
        <Tabbar myevent={
          (index)=>{
            this.setState({
              current: index
            })
          }
        } current={this.state.current}></Tabbar>
      </div>
    )
  }
  
}

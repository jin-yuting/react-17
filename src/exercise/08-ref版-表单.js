import React, { Component } from 'react'

class Filed extends Component {
  state ={
    value: ''
  }
  clear(){
    this.setState({
      value: ''
    })
  }
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type={this.props.type} onChange={(evt)=>{
          this.setState({
            value: evt.target.value
          })
        }} value={this.state.value}/>
      </div>
    )
  }
}

export default class App extends Component {
  usename = React.createRef();
  password = React.createRef()
  render() {
    return (
      <div>
        <h3>登录页面</h3>
        <Filed ref={this.usename} label='用户名' type='text'></Filed>
        <Filed ref={this.password} label='密码' type='password'></Filed>
        <button onClick={()=>{
          console.log(this.usename.current.state.value);
        }}>登录</button>
        <button onClick={()=>{
          this.usename.current.clear()
        }}>重置</button>
      </div>
    )
  }
}

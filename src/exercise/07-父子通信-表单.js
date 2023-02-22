import React, { Component } from 'react'

class Filed extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type={this.props.type} onChange={(evt)=>{
          this.props.onChangeEvent(evt.target.value)
        }} value={this.props.value}/>
      </div>
    )
  }
}

export default class App extends Component {
  state = {
    usename:'admin',
    password:''
  }
  render() {
    return (
      <div>
        <h3>登录页面</h3>
        <Filed onChangeEvent={(value)=>{
          this.setState({
            usename: value
          })
        }} value={this.state.usename} label='用户名' type='text'></Filed>
        <Filed onChangeEvent={(value)=>{
          this.setState({
            password:value
          })
        }} label='密码' value={this.state.password} type='password'></Filed>
        <button onClick={()=>{
          console.log(this.state.usename,this.state.password);
        }}>登录</button>
        <button onClick={()=>{
          this.setState({
            usename:'',
            password:''
          })
        }}>重置</button>
      </div>
    )
  }
}

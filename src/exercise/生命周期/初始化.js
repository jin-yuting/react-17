import React, { Component } from 'react'

class Box extends Component {
  // 更新阶段的周期-父组件修改引发
  UNSAFE_componentWillReceiveProps(nextProps){
    // nextProps 最早拿到父组件传来的属性
    // this.props 拿到的是老的数据
  }
  shouldComponentUpdate(nextProps){
    if(this.props.current === this.props.index || 
      nextProps.current === nextProps.index){
      return true
    }
    return false
  }
  render(){
    return (
      <div style={{width:'100px',height:'100px',margin:'10px',float:'left',
      border:this.props.current === this.props.index?'1px solid red':'1px solid gray'}}></div>
    )
  }
}
export default class App extends Component {
  state = {
    list :['01','02','03','04','05'],
    current: 0
  }
/*
 *类组件的生命周期
 * */
  // 1.初始化阶段
  componentWillUnmount(){
    console.log('将要挂载,一次');
    // 第一次上树前的最后修改机会
    // 初始化数据的作用
    // this.setState={}
  }
  componentDidMount(){
    console.log('已经挂载，一次');
    // 数据请求
    // 订阅函数调用
    // 定时器
    // 基于创建完的dom进行 初始化
  }
  // 2.运行阶段
  shouldComponentUpdate(){
            // 这是一个性能优化函数,面试会经常问
    return true; // 应该更新
    // return false; // 阻止更新  if else 
  }
  componentWillUpdate(){
    // 不安全
    // 很少用，容易造成死循环。下一个是render
  }
  componentDidUpdate(){
    // 更新后，想要获取dom节点
    // 缺点：会执行多次
  }
  // 3.
  render() {
    return (
      <div>
        <input type="number" onChange={(evt)=>{
          console.log(evt.target.value,'value');
          this.setState={
            current: Number(evt.target.value) 
          }
        }} value={this.state.current}></input>
        <div style={{overflow:'hidden'}}>
          {
            this.state.list.map((item,index)=><Box key={item} current={this.state.current} index={index}></Box>)
          }
        </div>
      </div>
    )
  }
}

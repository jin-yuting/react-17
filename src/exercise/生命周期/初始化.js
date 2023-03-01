import React, { Component } from 'react'
export default class App extends Component {
  state = {

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
      <div>App</div>
    )
  }
}

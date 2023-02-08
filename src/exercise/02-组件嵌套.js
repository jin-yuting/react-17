/*
1.组件嵌套练习
2.样式练习：react 推荐使用行内样式
*/
import { render } from '@testing-library/react'
import React, { Component } from 'react'

class Navbar extends Component{
  render(){
    // 样式练习
    let styleObj = {
      color:'red',
      fontSize: '12px',
    }
    return(<div style={styleObj}>Navbar</div>)
  }
}
function Swiper(){
  render(){
    return(<div className=''>Swiper</div>)
  }
}
const Tabbar= ()=><div>Tabbar</div>

export default class Nesting extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}

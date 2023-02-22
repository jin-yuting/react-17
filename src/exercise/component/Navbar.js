import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{background:'#4786ff',overflow:'hidden',textAlign:'center'}}>
        <button style={{float:'left'}}>back</button>
        <span>卖座电影</span>
        <button onClick={()=>{
          this.props.myevent()
        }} style={{float:'right'}}>center</button>
      </div>
    )
  }
}

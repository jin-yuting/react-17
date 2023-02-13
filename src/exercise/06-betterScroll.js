import React, { Component } from 'react'
import BetterScroll from 'better-scroll' 
export default class App extends Component {
  state = {
    list: []
  }
  render() {
    return (
      <div>
        <button onClick={ ()=>this.handleClick }>添加</button>
        <div className='wrapper' style={{height:'200px',background:'yellow',overflow:'hidden'}}>
          <ul className='content'>
            {
              this.state.list.map(item=><li key={item}>
                {item}
              </li>)
            }
          </ul>
        </div>
        
      </div>
    )
  }
  handleClick(){
    let newList = [0,1,2,3,4,5,6,7,8,9,10];
    this.setState({
      list: newList
    },()=>{
      // 没添加成功
      console.log(this.state.list,'list');
      new BetterScroll(".wrapper")
    })
  }
}

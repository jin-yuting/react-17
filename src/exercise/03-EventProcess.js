import React, { Component } from 'react'
// 事件处理练习
export default class EventProcess extends Component {
  // ref的应用
  myref = React.createRef()
  render() {
    return (
      <section>
          <div>03-事件处理</div>
          <button onClick={ this.handleClick }>add1</button>
          {/* <button onClick={ ()=>this.handleClick() }>add1-传参</button> */}
      
        {/* <input ref={this.myref} />
        <button onClick={()=>{
          console.log('click',this.myref.current.value);
        }}></button> */}
      </section>
    )
  }

  handleClick(){
    console.log('11');
  }
}

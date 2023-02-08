import React, { Component } from 'react'
// 事件处理练习
export default class EventProcess extends Component {
  render() {
    return (
      <section>
          <div>03-事件处理</div>
          <button onClick={ this.handleClick }>add1</button>
      </section>
    )
  }

  handleClick(){
    console.log('11');
  }
}

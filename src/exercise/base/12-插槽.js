import React, { Component } from 'react'
class Child extends Component {
  render() {
    return (
      <div>
        App1-优先
        {/* 插槽 */}
        {this.props.children}
      </div>
    )
  }
}
export default class App extends Component {
  render() {
    return (
      <div>
        <Child>
          <div>App2-内部</div>
        </Child>
      </div>
    )
  }
}

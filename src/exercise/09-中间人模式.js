import React, { Component } from 'react'
class filmItem extends Component {
  render() {
    let {name,poster} = this.props
    return (
      <div>
        <img src={poster} alt={name} />
        <h4>{name}</h4>
      </div>
    )
  }
}
class filmDetail extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }

}
export default class App extends Component {
  constructor(){
    super()
  this.state={
    filmList:[]
  }
  }
  render() {
    return (
      <div>
        {
          this.filmList.map((item)=>
            <filmItem key={item.filmId} {...item}></filmItem>
          )
        }
        <filmDetail></filmDetail>
      </div>
    )
  }
}

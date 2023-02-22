import React, { Component } from 'react'
import axios from 'axios'
export default class Cinema extends Component {
  constructor(){
    super()
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
      method:"get",
      headers:{
      'X-Client-Info' : '{"a" :"300","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
      'X-Host':'mall.film-ticket.cinema.list'
      }
    }).then(({data})=>{
      this.setState({
        cinemasList: data.data.cinemas
      })
    })
    this.state = {
      cinemasList: [],
      mytext:''
    }
  }
  
    
  render() {
    return (
      <div>
        <input value={this.state.mytext} className='cinema-input' 
        onChange={ (evt)=>{
          this.setState({
            mytext:evt.target.value
          })
          }} />

          {/* {
            this.getCinemaList.map((item,index)=>
              <dl key={index}>
                <dt>{item.name}</dt>
                <dd>{item.address}</dd>
              </dl>
            )
          } */}
      </div>
    )
  }
  getCinemaList(){
    return this.state.cinemasList.filter(item=>item.name.toUpperCase().includes(this.state.mytext.toUpperCase()))
  }
  handleClick = (event)=>{
    let newList = this.state.cinemasList.filter(item=>item.name.toUpperCase().includes(event.target.value.toUpperCase()))
    console.log(newList,'newList');
    // 存在问题：cinemasList 每次都会重新覆盖
    this.setState({
      cinemasList: newList
    })
  }
}

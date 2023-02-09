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
  }
  state = {
    cinemasList: []
  }
    
  render() {
    return (
      <div>
        <input onInput={()=>this.handleClick} />
          {
            this.state.cinemasList.map((item,index)=>
              <dl key={index}>
                <dt>{item.name}</dt>
                <dd>{item.address}</dd>
              </dl>
            )
          }
      </div>
    )
  }

  handleClick(event){
    console.log(event.target);
  }
}

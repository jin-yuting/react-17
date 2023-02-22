import React, { Component } from 'react'

export default class Tabbar extends Component {
  state = {
    list:[
      {id:1,text:'电影'},
      {id:1,text:'影院'},
      {id:1,text:'我的'},
    ],
  }
  render() {
    return (
      <ul>
          {
            this.state.list.map( (item,index)=>
            <li key={index} className={this.props.current === index?'active':''} onClick={()=>this.handleClick(index)}>
            {item.text}
            </li>)
          }
        </ul>
    )
  }
  handleClick(index){
    // 通知父组件状态 current
    this.props.myevent(index)
  }
}

// const Tabbar = (props)=>{
//   function handleClick(index){
//     props.myevent(index)
//   }
//   return <div>
//     <ul>
//       {
//         props.list.map( (item,index)=>
//         <li key={index} className={props.current === index?'active':''} onClick={()=>props.myevent(index)}>
//         {item.text}
//         </li>)
//       }
//     </ul>
//   </div>
// }
// export default Tabbar

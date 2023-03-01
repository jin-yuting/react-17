import React, { Component } from 'react'
var bus = {
  list: [],
  // 订阅
  subscribe(callback){
    this.list.push(callback)
  },
  // 发布
  publish(text){
    this.list.forEach(callback=>{
      callback && callback(text)
    })
  }
} 
class FilmItem extends Component {
  render() {
    let {name,poster} = this.props
    return (
      <div style={{overflow:'hidden',marginBottom:'10px'}} onClick={()=>{
        bus.publish(name)
      }}>
        <img style={{width:'100px',height:'100px',float:'left'}} src={poster} alt={name} />
        <h4>{name}</h4>
      </div>
    )
  }
}
class FilmDetail extends Component {
  constructor(){
    super()
    bus.subscribe((info)=>{
      this.setState({
        info: info
      })
    })
    this.state ={
      info: ''
    }
  }
  render() {
    return (
      <div style={{position:'fixed',right:'0',top:'100px',width:'250px',height:'300px',background:'#ccc'}}>
        <span>{this.state.info}</span>
      </div>
    )
  }

}
export default class App extends Component {
  constructor(){
    super()
    this.state={
      filmListData:[{
        "filmId": 6210,
        "name": "毒舌律师",
        "poster": "https://pic.maizuo.com/usr/movie/c369975b6185cc09c33722d0b2e5d2d5.jpg",
      }, {
        "filmId": 6211,
        "name": "蚁人与黄蜂女：量子狂潮",
        "poster": "https://pic.maizuo.com/usr/movie/6b1d822933f8a0d87e3be438f8d4834e.jpg",
      }, {
        "filmId": 6118,
        "name": "流浪地球2",
        "poster": "https://pic.maizuo.com/usr/movie/228a4e54fecfdb1c843f83ed28f947d6.jpg",
      }, {
        "filmId": 6196,
        "name": "满江红",
        "poster": "https://pic.maizuo.com/usr/movie/7a61b5f8e702ce6c705a9b51db7a62e7.jpg",
      }, {
        "filmId": 6197,
        "name": "深海",
        "poster": "https://pic.maizuo.com/usr/movie/a3096eb4b17355e4baf21554d682cc05.jpg",
      }, {
        "filmId": 6201,
        "name": "中国乒乓之绝地反击",
        "poster": "https://pic.maizuo.com/usr/movie/e17b6a0270fa219d48144909801879bf.jpg",
      }, {
        "filmId": 6193,
        "name": "熊出没·伴我“熊芯”",
        "poster": "https://pic.maizuo.com/usr/movie/5ad5870a1467a1c41b6652687c9c7180.jpg",
      }, {
        "filmId": 6198,
        "name": "无名",
        "poster": "https://pic.maizuo.com/usr/movie/40d6f1bd1f95a5fa103f593390a3078e.jpg",
      }, {
        "filmId": 6217,
        "name": "断网",
        "poster": "https://pic.maizuo.com/usr/movie/6674d4afa7f44ba8399ca369b58dc55a.jpg",
      }, {
        "filmId": 6205,
        "name": "不能流泪的悲伤",
        "poster": "https://pic.maizuo.com/usr/movie/da26a6eaff441777d497ec05be25c301.jpg",
      }],
    }
  }
  render() {
    return (
      <div>
        {
          this.state.filmListData.map((item)=>
            <FilmItem key={item.filmId} {...item} ></FilmItem>
          )
        }
        <FilmDetail value={this.state.info}></FilmDetail>
      </div>
    )
  }
}

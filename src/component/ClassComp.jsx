import { Component } from "react";


class  Sayac extends Component{
   //kurucu fonksiyon
    constructor(props){
        //miras alma
        super(props);
        this.state={
            count: 0,
        }
        console.log("constructor çalıştı")
    }
    //bileşen ekrana ilk geldiği anda çalışır.
    componentDidMount(){
        console.log("Component Did Mount Çalıştı")
    }

    //bileşenin içeriinde herhangi bir state değiştitğinde
componentDidUpdate(){
    console.log("component didupdate calıstı")
}
//bileşen ekrandan gittiği an
componentWillUnmount(){
    console.log("component ill unmount calişti");
}
    //butona tıklandığı anda state'i günceller
   handleClick = () =>{
    this.setState({count: this.state.count +1})
   }

    render(){
        console.log("jsxin ekrana gelme anı-render calıstı")
        return <div>
            <p>Bu butona {this.state.count} kez tıklandı</p>
            <button onClick={this.handleClick} >Artır</button>
            </div>
    }
}
export default Sayac;
import React, { Component } from 'react'

export class Child extends Component {
    constructor(props){
        super(props)
        this.state={
          name:"constructor method",
          data:[]
        }
      }
    componentWillUnmount(){
        alert("This component will unmount")
    }

static getDerivedStateFromProps(props) {
           return (
            {name:props.nameFromParent}
           )
  }

  render() {
    return (
      <div>
         <h1>
            {this.state.name}
         </h1>
      </div>
    )
  }
}

export default Child


// constructor(props){
//   super(props)
//   this.state={
//     name:"constructor method",
//     data:[],
//     show:true
//   }
// }

// componentDidMount(){
//   setTimeout(()=>{
//     this.setState({name:"We can call API using this method"})
//   },1000)
// }
 
// shouldComponentUpdate(){
//   return true
// }
// // componentDidMount(){
// //  fetch("https://jsonplaceholder.typicode.com/users").then(
// //    response => response.json()
// //  ).then(
// //    data=>this.setState({data:data})
// //  )
// // }

// getSnapshotBeforeUpdate(prevProps,prevState){
//   document.getElementById('beforeupdate').innerHTML=prevState.name
//   return null
// }
// componentDidUpdate(){
//   document.getElementById('afterupdate').innerHTML= this.state.name
// }

// render(){
//   return (
//     <div >
//      <h1>{this.state.name}</h1>
//      {this.state.show? <Child nameFromParent="getDerivedStateFromProps"/> : null }
//      <button onClick={()=>this.setState({show:!this.state.show})}>Click Me</button>
//      {this.state.data.map(d=>{
//       return <h4 key={d.id}>{d.name}</h4>
//      })}
//      <p id="beforeupdate"></p>
//      <p id="afterupdate"></p>
//     </div>
//   );}
// }


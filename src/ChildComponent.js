import React,{Component} from "react";

export default class ChildComponent extends Component{
constructor(props){
    super(props)
    this.state={
        name:"hello universe"
    }
}


static getDerivedStateFromProps(props){
return(
    {name:props.FromParentname}
)
}

componentWillUnmount(){
    alert('unmount')
}

render(){
    return(
        <div>
            <h1 id="header">{this.state.name}</h1>
        </div>
    )
}
}
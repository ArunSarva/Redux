import React, { Component } from 'react';
import { connect} from "react-redux"

var newname='';
class a2 extends Component {
    
   
    handleChange1= (e) => {
        newname=e.target.value;
    }
    render() {
        return (
            <div className="App-header">
                {/* <h1>Age is {this.props.age}</h1>
                <h1>Age is {this.props.name}</h1>
                <button className="button" onClick={this.props.onageup}>Inc Age</button> */}
                <input type="text"  onChange={this.handleChange1}/>
                <button className="button" onClick={this.props.chname}>Add to Array</button>
                <div>{this.props.abc.map((item)=>(
                   <h1>{item}</h1> 
                ))}
                </div>
                {/* <p>{this.props.abc}</p> */}
            </div>
        );
    }
    
}
const mapp =(state) => {
    return{
        age:state.age,
        name:state.name,
        abc:state.abc
    };
};
const map1 = (dispatch) =>{
    return{
        onageup: ()=>dispatch({type:"Age" }),
        chname: ()=>dispatch({type:"name",value:newname })
    }
}
export default connect(
    mapp,
    map1 
) (a2);
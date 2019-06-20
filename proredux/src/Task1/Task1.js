import React, { Component } from 'react';
import { connect} from "react-redux"
class Task1 extends Component {
     render() {
        return (
            <div className="App-header">
                <span>
                    <h1>Age is {this.props.age}</h1>
                    <button className="button" onClick={this.props.Update1}>Update 1</button>
                </span>
                <span>
                <h1>Age is {this.props.age1}</h1>
                    <button className="button" onClick={this.props.Update2}>Update 2</button>
                    <h1>Age is {this.props.age2}</h1>
                    <button className="button" onClick={this.props.Update3}>Update 3</button>
                    <h1>Age is {this.props.age3}</h1>
                    <button className="button" onClick={this.props.Update4}>Update 4</button>
                </span>
            </div>
        );
    }
}
const mapstatetoprops =(state) => {
    return{
        age:state.age,
        age1:state.age1,
        age2:state.age2,
        age3:state.age3
    };
};
const mapDispatchtoprops = (dispatch) =>{
    return{
        Update1: ()=>dispatch({type:"Update1" }),
        Update2: ()=>dispatch({type:"Update2"}),
        Update3: ()=>dispatch({type:"Update3" }),
        Update4: ()=>dispatch({type:"Update4" })
    }
}
export default connect(
    mapstatetoprops,
    mapDispatchtoprops
) (Task1);
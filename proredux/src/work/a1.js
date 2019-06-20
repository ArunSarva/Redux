import React, { Component } from 'react';
import { connect} from "react-redux"

class a1 extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state ={
    //         Age:20,
    //     }

    // }
    // ChangeAge=()=>{
    //     this.setState({Age:this.state.Age+1});
    // }
    // DecAge=()=>{
    //     this.setState({Age:this.state.Age-1});
    // }
    render() {
        return (
            <div className="App-header">
                <h1>Age is {this.props.age}</h1>
                <button className="button" onClick={this.props.onageup}>Inc Age</button>
                <button className="button" onClick={this.props.onagedown}>Dec Age</button>
            </div>
        );
    }
}
const mapstatetoprops =(state) => {
    return{
        age:state.age
    };
};
const mapDispatchtoprops = (dispatch) =>{
    return{
        onageup: ()=>dispatch({type:"AGE_UP" ,value:1}),
        onagedown: ()=>dispatch({type:"AGE_DOWN",value:1})

    }
}
export default connect(
    mapstatetoprops,
    mapDispatchtoprops
) (a1);
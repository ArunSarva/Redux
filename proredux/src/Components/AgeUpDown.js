import React, { Component } from 'react';
import {OnAgeUp,OnAgeDown} from  '../Action/AgeUpDownaction';
import { connect} from "react-redux";

class AgeUpDown extends Component {
    render() {
        return (
            <div>
                age:<span>{this.props.age}</span>
                <button className="button" onClick={this.props.OnAgeUp}>Age Up</button>
                <button className="button" onClick={this.props.OnAgeDown}>Age Down</button>
            </div>
        );
    }
}
const mapStateToprops=(state)=>{
    const {age}=state.Ageupdownreducer;
    return {age};
};

export default connect(
    mapStateToprops,
    {OnAgeUp,OnAgeDown}
    )(AgeUpDown);
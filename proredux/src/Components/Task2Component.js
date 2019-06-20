import React, { Component } from 'react';
import {UpDateA,UpDateB,UpDateC,UpDateD} from  '../Action/Task2action';
import { connect} from "react-redux";

class Task2Component extends Component {
    render() {
        return (
            <div>
                item A:<span>{this.props.itema}</span>
                item B:<span>{this.props.itemb}</span><br></br>
                <button onClick={()=>this.props.UpDateA(this.props.itemc)}>A</button>
                <button onClick={()=>this.props.UpDateB(this.props.itemd)}>B</button>
                <br></br>
                item C:<span>{this.props.itemc}</span>
                item D:<span>{this.props.itemd}</span><br></br>
                <button onClick={()=>this.props.UpDateC(this.props.itema)}>C</button>
                <button onClick={()=>this.props.UpDateD(this.props.itemb)}>D</button>
            </div>
        );
    }
}

const mapStateToprops=(state)=>{
    const {itema}=state.Task2reducerA;
    const {itemb}=state.Task2reducerB;
    const {itemc}=state.Task2reducerC;
    const {itemd}=state.Task2reducerD;
    return {itema,itemb,itemc,itemd};
};
export default connect(
    mapStateToprops,
    {UpDateA,UpDateB,UpDateC,UpDateD}
    )(Task2Component);